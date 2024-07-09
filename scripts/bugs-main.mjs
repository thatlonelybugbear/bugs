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
			value: 'fromUuidSync(tokenUuid)?.actor.appliedEffects.some(e=>e.name == "Subtle Spell") ? 1 : 0',
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

function getChanges(id) {
	return statusEffects[id]?.changes;
}

function staticID(id) {
	id = `dnd5e${id}`;
	if (id.length >= 16) return id.substring(0, 16);
	return id.padEnd(16, '0');
}

function shouldProceed(check, hook) {
	return (
		(!check.flags?.dnd5e?.exhaustionLevel && hook == 'create') ||
		(check.flags?.dnd5e?.exhaustionLevel &&
			!game.modules.get('alternative-exhaustion-5e')?.active &&
			(!game.modules.get('rest-recovery')?.active || !game.settings.get('rest-recovery', 'one-dnd-exhaustion')))
	);
}

Hooks.once('midi-qol.midiReady', () => {
	Hooks.on('preUpdateActiveEffect', (ae, updates) => {
		if (shouldProceed(updates, 'update')) {
			const exhaustionLevel = updates.flags.dnd5e.exhaustionLevel === 1 ? '' : updates.flags.dnd5e.exhaustionLevel;
			updates.changes = getChanges(staticID(`exhaustion${exhaustionLevel}`));
		}
	});
	Hooks.on('preCreateActiveEffect', (ae, aedata) => {
		if (shouldProceed(aedata, 'create') && getChanges(ae.id)?.length) {
			const changes = getChanges(ae.id);
			ae.updateSource({ changes });
		}
	});
	Hooks.on('midi-qol.RollComplete', async (workflow) => {
		const { actor, item } = workflow || {};
		if (!item) return true;
		const parent = actor ?? item.actor;
		const { type, cost } = item.system.activation;
		if ((type?.includes('reaction') && cost) || (game.combat?.active && game.combat.combatant?.actor !== parent)) {
			const effectData = {
				name: 'Reaction Used',
				img: 'modules/bugs/images/reaction.svg',
				'flags.dae.specialDuration': ['turnStartSource'],
				duration: { rounds: 1 },
				origin: item.uuid,
				_id: staticID('reaction'),
			};
			return ActiveEffect.implementation.create([effectData], { parent });
		}
	});
});
