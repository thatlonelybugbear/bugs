const MODULE_ID = 'bugs';

const imgSource = gameVersion() < 12 ? 'icon' : 'img';

const statusEffects = {};
statusEffects[staticID('dead')] = {};
statusEffects[staticID('bleeding')] = {};
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
statusEffects[staticID('burrowing')] = {};
statusEffects[staticID('charmed')] = {};
statusEffects[staticID('concentrating')] = {};
statusEffects[staticID('cursed')] = {};
statusEffects[staticID('deafened')] = {};
statusEffects[staticID('diseased')] = {};
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
statusEffects[staticID('ethereal')] = {};
statusEffects[staticID('exceedingCarryingCapacity')] = {};
statusEffects[staticID('exhaustion1')] = {
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
statusEffects[staticID('flying')] = {};
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
statusEffects[staticID('grappled')] = {};
statusEffects[staticID('heavilyEncumbered')] = {};
statusEffects[staticID('hiding')] = {};
statusEffects[staticID('hovering')] = {};
statusEffects[staticID('incapacitated')] = {};
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
statusEffects[staticID('marked')] = {};
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
statusEffects[staticID('sleeping')] = {};
statusEffects[staticID('stable')] = {};
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
	flags: { dae: { specialDuration: ['turnEndSource'] } },
};
statusEffects[staticID('transformed')] = {};
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
			const exhaustionLevel = updates.flags.dnd5e.exhaustionLevel; /* === 1 ? '' : updates.flags.dnd5e.exhaustionLevel*/
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
		if (!aedata._source._id && !aedata.name.includes('Convenient Effect')) updateSource._id = staticID(aedata.name.toLowerCase())
		ae.updateSource(updateSource);
	});

	const dfredsID = 'dfreds-convenient-effects';
	if (game.modules.get(dfredsID)?.active && game.settings.get(dfredsID, 'modifyStatusEffects') == 'replace') {
		statusEffects[staticID('flanked')] = { };   //Expect error: making sure these will get an _id, as Status effects with implicit statuses must have a static _id
		statusEffects[staticID('inaudible')] = { };
		changeDFredsStatusEffects();
	}

	globalThis.BUGS = {};

	Hooks.on('BUGS.ready', changeStatusEffects);
	setTimeout(() => {
		Hooks.callAll('BUGS.ready');
	}, 100);
});
function changeDFredsStatusEffects() {
	console.warn('DFREDS pre');
	for (const { name } of CONFIG.statusEffects) {
		const effect = CONFIG.statusEffects.find((e) => e.name === name);
		if (!name.includes('Exhaustion') && statusEffects[staticID(name.toLowerCase())]) foundry.utils.mergeObject(effect, { id: effect.name.toLowerCase(), _id: staticID(name.toLowerCase()) });
		else if (name.includes('Exhaustion')) {
			if (name == 'Exhaustion 1')
				foundry.utils.mergeObject(
					CONFIG.statusEffects.find((e) => e.name === name),
					{ id: 'exhaustion', _id: staticID('exhaustion') }
				);
			else {
				const forID = effect.name.replace(' ', '').toLowerCase();
				foundry.utils.mergeObject(effect, { id: forID, _id: staticID(forID) });
			}
		}
	}
	console.warn('BUGS replaced the statusEffects', CONFIG.statusEffects);
}
function changeStatusEffects() {
	const goOn = Hooks.call('BUGS.preStatusEffectsChange', this);
	if (goOn == false) return true;
	for (const { id } of CONFIG.statusEffects) {
		if (!CONFIG.statusEffects.find((e) => e.id == id)._id) continue;
		ActiveEffect.implementation.fromStatusEffect(id, { keepId: true }).then((effect) => {
			globalThis.BUGS[id] = foundry.utils.mergeObject(effect, statusEffects[staticID(id)]);
		});
	}
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
