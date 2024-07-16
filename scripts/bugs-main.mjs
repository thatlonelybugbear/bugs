const MODULE_ID = 'bugs';

const imgSource = gameVersion() < 12 ? 'icon' : 'img';

const statusEffects = {};
statusEffects[staticID('blinded')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('dodging')] = {
	changes: [
		{
			key: 'flags.midi-qol.grants.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value:
				'target.canSee && !["incapacitated","grappled","paralyzed","petrified","restrained","stunned","unconscious"].some(el=>workflow.targets.first()?.actor.statuses.has(el)) && workflow.targets.first()?.actor.system.attributes.exhaustion !== 5',
		},
	],
};
statusEffects[staticID('encumbered')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: 'fromUuidSync(targetUuid).actor.statuses.has("exceedingCarryingCapacity") || fromUuidSync(targetUuid).actor.statuses.has("heavilyEncumbered")',
		},
		{
			key: 'flags.midi-qol.disadvantage.ability.save.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: 'fromUuidSync(targetUuid).actor.statuses.has("exceedingCarryingCapacity") || fromUuidSync(targetUuid).actor.statuses.has("heavilyEncumbered")',
		},
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: 'fromUuidSync(tokenUuid).actor.statuses.has("exceedingCarryingCapacity") || fromUuidSync(tokenUuid).actor.statuses.has("heavilyEncumbered")',
		},
	],
};
statusEffects[staticID('exhaustion')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.dnd5e.initiativeDisadv',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('exhaustion2')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.dnd5e.initiativeDisadv',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('exhaustion3')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.dnd5e.initiativeDisadv',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.ability.save.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('exhaustion4')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.dnd5e.initiativeDisadv',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.ability.save.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('exhaustion5')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.dnd5e.initiativeDisadv',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.ability.save.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('frightened')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
/*
statusEffects[staticID('grappled')] = {
	changes: [
		{
			key: 'system.attributes.movement.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '0',
			priority: 25,
		},
	],
};
*/
statusEffects[staticID('invisible')] = {
	changes: [
		{
			key: 'flags.midi-qol.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('paralyzed')] = {
	changes: [
		{
			key: 'flags.midi-qol.fail.ability.save.dex',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.fail.ability.save.str',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.critical.range',
			mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
			value: '5',
		},
	],
};
statusEffects[staticID('petrified')] = {
	changes: [
		{
			key: 'flags.midi-qol.grants.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.fail.ability.save.dex',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.fail.ability.save.str',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'system.traits.di.value',
			mode: CONST.ACTIVE_EFFECT_MODES.ADD,
			value: 'poison',
		},
		{
			key: 'system.traits.dr.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: 'physical',
		},
		{
			key: 'system.traits.dr.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: 'magical',
		},
	],
};
statusEffects[staticID('poisoned')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.ability.check.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('prone')] = {
	changes: [
		{
			key: 'flags.midi-qol.grants.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: 'getDistance(fromUuidSync(tokenUuid),workflow.targets.first()) <= 5',
		},
		{
			key: 'flags.midi-qol.grants.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: 'getDistance(fromUuidSync(tokenUuid),workflow.targets.first()) > 5',
		},
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'system.attributes.movement.walk',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '*0.5',
			priority: 25,
		},
	],
};
statusEffects[staticID('restrained')] = {
	changes: [
		{
			key: 'flags.midi-qol.disadvantage.ability.save.dex',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.disadvantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('silenced')] = {
	changes: [
		{
			key: 'flags.midi-qol.fail.spell.vocal',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('stunned')] = {
	changes: [
		{
			key: 'flags.midi-qol.fail.ability.save.dex',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.fail.ability.save.str',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
	],
};
statusEffects[staticID('surprised')] = {
	/*changes: [
		{
			key: 'flags.midi-qol.actions.reaction',
			mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
			value: 'dae.eval(combat?.turn <= combat.turns.findIndex(i=>i.tokenId == @tokenId))',
		}
	],*/
	flags: { dae: { specialDuration: ['turnEnd'] } },
	duration: { seconds: 7 },
};
statusEffects[staticID('unconscious')] = {
	changes: [
		{
			key: 'flags.midi-qol.fail.ability.save.dex',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.fail.ability.save.str',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.advantage.attack.all',
			mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
			value: '1',
		},
		{
			key: 'flags.midi-qol.grants.critical.range',
			mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
			value: '5',
		},
	],
};
statusEffects[staticID('reaction')] = {
	[imgSource]: 'modules/bugs/images/reaction.svg',
	'flags.dae.specialDuration': ['turnStartSource', 'combatEnd'],
	[`flags.${MODULE_ID}.statusEffect`]: staticID('reaction'),
	duration: { rounds: 1 },
	//_id: staticID('reaction'),
};

function getChanges(id) {
	return statusEffects[id]?.changes;
}

function staticID(id) {
	id = `dnd5e${id}`;
	if (id.length >= 16) return id.substring(0, 16);
	return id.padEnd(16, '0');
}

function shouldProceed(check, hook) {
	if (hook == 'update') {
		return (
			check.flags?.dnd5e?.exhaustionLevel &&
			!game.modules.get('alternative-exhaustion-5e')?.active &&
			(!game.modules.get('rest-recovery')?.active || !game.settings.get('rest-recovery', 'one-dnd-exhaustion'))
		);
	}
	if (hook == 'create') {
		return !check.flags?.dnd5e?.exhaustionLevel || [staticID('silenced'), staticID('surprised')].includes(check._id) || !check.origin;
	}
}

function gameVersion(ver) {
	return ver ? game.version == ver : game.version;
}

Hooks.on('midi-qol.ready', () => {
	Hooks.on('preUpdateActiveEffect', (ae, updates) => {
		if (shouldProceed(updates, 'update')) {
			const exhaustionLevel = updates.flags.dnd5e.exhaustionLevel === 1 ? '' : updates.flags.dnd5e.exhaustionLevel;
			updates.changes = getChanges(staticID(`exhaustion${exhaustionLevel}`));
		}
	});
	Hooks.on('preCreateActiveEffect', (ae, aedata) => {
		if (!shouldProceed(aedata, 'create')) return true;
		const actor = ae.parent;
		const { combat } = game;
		const updateSource = {};
		if (aedata._id == staticID('silenced') && ae.parent.items.getName('Subtle Spell')) updateSource.changes = [];
		if (aedata._id == staticID('surprised')) {
			const actorId = parent.id;
			const tokenId = parent.token?.id ?? canvas.tokens.placeables.find((tok) => tok.actor.inCombat && tok.actor.id == actor.id)?.id;
			console.log(tokenId);
			console.log(combat?.turns?.find((turn) => turn.tokenId == tokenId));
			console.log(combat?.round, combat?.turn);
			if (!combat || (combat && tokenId && combat.round <= 1 && combat.turn <= combat.turns.findIndex((turn) => turn.tokenId == tokenId)))
				updateSource.changes = [
					{
						key: 'flags.midi-qol.actions.reaction',
						mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
						value: true,
					},
				];
		}
		if (!aedata.origin) updateSource.origin = actor.uuid;
		ae.updateSource(updateSource);
	});
	globalThis.BUGS = {};
	for (const { id } of CONFIG.statusEffects) {
		ActiveEffect.implementation.fromStatusEffect(id, { keepId: true }).then((effect) => {
			globalThis.BUGS[id] = foundry.utils.mergeObject(effect, statusEffects[staticID(id)]);
		});
	}
	const dfredsID = 'dfreds-convenient-effects';
	if (game.modules.get(dfredsID)?.active && game.settings.get(dfredsID, 'modifyStatusEffects') == 'replace') {
		Hooks.on(`${dfredsID}.ready`, () => Hooks.on('BUGS.ready', changeStatusEffects));
	} else Hooks.on('BUGS.ready', changeStatusEffects);
	setTimeout(() => {
		Hooks.callAll('BUGS.ready');
	}, 100);
});
function changeStatusEffects() {
	const goOn = Hooks.call('BUGS.preStatusEffectsChange', this);
	if (goOn == false) return true;
	console.warn('BUGS changing Status Effects');
	for (const id in BUGS)
		foundry.utils.mergeObject(
			CONFIG.statusEffects.find((e) => e.id === id),
			BUGS[id]
		);
	setTimeout(() => {
		Hooks.callAll('BUGS.postStatusEffectsChange');
	}, 100);
}
