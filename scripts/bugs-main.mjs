const MODULE_ID = 'bugs';

let modernRules;

function initializeStatusEffects() {
	const statusEffects = {};
	statusEffects[staticID('blinded')] = {
		changes: [
			{
				key: 'flags.midi-qol.disadvantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: '!canSee(tokenUuid, targetUuid)',
			},
			{
				key: 'flags.midi-qol.grants.advantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: '!canSee(targetUuid, tokenUuid)',
			},
		],
	};
	statusEffects[staticID('charmed')] = {
		changes: [
			{
				key: 'flags.midi-qol.grants.advantage.ability.check.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'nonWorkflowTargetedToken === effectTokenUuid',
			},
			{
				key: 'flags.midi-qol.fail.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'hasDamage && targetUuid === originTokenUuid',
			},
		],
	};
	statusEffects[staticID('dodging')] = {
		changes: [
			{
				key: 'flags.midi-qol.grants.disadvantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'target?.canSee && !["incapacitated","grappled","paralyzed","petrified","restrained","stunned","unconscious"].some(el=>target?.statuses[el]))',
			},
			{
				key: 'flags.midi-qol.advantage.ability.save.dex',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'target?.canSee && !["incapacitated","grappled","paralyzed","petrified","restrained","stunned","unconscious"].some(el=>target?.statuses[el]))',
			},
		],
	};
	if (!modernRules) {
		statusEffects[staticID('encumbered')] = {
			changes: [
				{
					key: 'flags.midi-qol.disadvantage.ability.check.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: 'statuses.exceedingCarryingCapacity || statuses.heavilyEncumbered',
				},
				{
					key: 'flags.midi-qol.disadvantage.ability.save.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: 'statuses.exceedingCarryingCapacity || statuses.heavilyEncumbered',
				},
				{
					key: 'flags.midi-qol.disadvantage.attack.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: 'statuses.exceedingCarryingCapacity || statuses.heavilyEncumbered',
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
	}
	statusEffects[staticID('frightened')] = {
		changes: [
			{
				key: 'flags.midi-qol.disadvantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'canSee(tokenUuid, originTokenUuid)',
			},
			{
				key: 'flags.midi-qol.disadvantage.ability.check.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'canSee(tokenUuid, originTokenUuid)',
			},
		],
	};
	if (modernRules) {
		statusEffects[staticID('grappled')] = {
			changes: [
				{
					key: 'flags.midi-qol.disadvantage.attack.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: 'targetUuid !== originTokenUuid',
				},
			],
		};
	}
	statusEffects[staticID('invisible')] = {
		changes: [
			{
				key: 'flags.midi-qol.advantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: '!target.canSee',
			},
			{
				key: 'flags.midi-qol.grants.disadvantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: '!canSee',
			},
			{
				key: 'flags.dnd5e.initiativeAdv',
				mode: CONST.ACTIVE_EFFECT_MODES.OVERRIDE,
				value: true,
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
				value: 'getDistance(tokenUuid,targetUuid) <= 5',
			},
			{
				key: 'flags.midi-qol.grants.disadvantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'getDistance(tokenUuid,targetUuid) > 5',
			},
			{
				key: 'flags.midi-qol.disadvantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: '1',
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
				value: 'effects.some(e=>e.name == "Subtle Spell") ? 1 : 0',
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
	return statusEffects;
}

function getChanges(id) {
	const isBUGS = BUGS.statusEffects[id];
	if (isBUGS) return foundry.utils.duplicate(isBUGS.changes);
	else return false;
}

function staticID(id) {
	id = `dnd5e${id}`;
	if (id.length >= 16) return id.substring(0, 16);
	return id.padEnd(16, '0');
}

function shouldProceed(check, hook) {
	return (!check.flags?.dnd5e?.exhaustionLevel && hook == 'create') || (!modernRules && check.flags?.dnd5e?.exhaustionLevel && !game.modules.get('alternative-exhaustion-5e')?.active && (!game.modules.get('rest-recovery')?.active || !game.settings.get('rest-recovery', 'one-dnd-exhaustion')));
}

function gameVersion(ver) {
	return ver ? game.version == ver : game.version;
}

function i18n(string) {
	return game.i18n.localize(string);
}

function getEffectOriginToken(effect /* ActiveEffect */, type = 'id' /*token, id, uuid*/) {
	if (!effect?.origin) return undefined;
	let effectOriginActor;
	/*  //we don't allow the preCreateHook on Item documents
	if (effect.parent instanceof CONFIG.Item.documentClass && effect.parent.isEmbedded) effectOriginActor = effect.parent.actor;
	if (!effectOriginActor && !effect.origin) return undefined;
	*/
	const origin = fromUuidSync(effect.origin);
	if (!effectOriginActor && origin instanceof CONFIG.ActiveEffect.documentClass) {
		if (origin.parent instanceof CONFIG.Item.documentClass) effectOriginActor = origin.parent.actor;
		if (origin.parent instanceof CONFIG.Actor.documentClass) effectOriginActor = origin.parent;
	}
	if (!effectOriginActor) return undefined;
	if (type === 'id') return effectOriginActor.getActiveTokens()[0]?.id;
	if (type === 'uuid') return effectOriginActor.getActiveTokens()[0]?.document.uuid;
	if (type === 'token') return effectOriginActor.getActiveTokens()[0];
}

function getEffectParentToken(doc /*actor*/, type = 'id') {
	//we don't allow the preCreateHook on Item documents
	if (!doc) return undefined;
	// let actor;
	// if (doc instanceof CONFIG.Item.documentClass) actor = doc.actor;
	// if (doc instanceof CONFIG.Actor.documentClass) actor = doc;
	if (type === 'id') return doc.getActiveTokens()[0]?.id;
	if (type === 'uuid') return doc.getActiveTokens()[0]?.document.uuid;
	if (type === 'token') return doc.getActiveTokens()[0];
}

Hooks.once('midi-qol.ready', () => {
	modernRules = game.settings.get('dnd5e', 'rulesVersion') === 'modern';
	const BUGS = {};
	BUGS.statusEffects = initializeStatusEffects();
	Hooks.on('preUpdateActiveEffect', (ae, updates) => {
		if (shouldProceed(updates, 'update')) {
			const exhaustionLevel = updates.flags.dnd5e.exhaustionLevel === 1 ? '' : updates.flags.dnd5e.exhaustionLevel;
			updates.changes = getChanges(staticID(`exhaustion${exhaustionLevel}`));
		}
	});
	Hooks.on('preCreateActiveEffect', (ae, aedata) => {
		if (ae.parent instanceof CONFIG.Item.documentClass) return true;
		if (shouldProceed(aedata, 'create')) {
			const changes = getChanges(ae.id);
			if (!changes) return true;
			changes.filter((change) => {
				const hasOriginTokenUuid = change.value.includes('originTokenUuid');
				const hasOriginTokenId = change.value.includes('originTokenId');
				const hasOriginToken = change.value.includes('originToken');
				if (hasOriginTokenUuid) change.value = change.value.replaceAll('originTokenUuid', `"${getEffectOriginToken(ae, 'uuid')}"`);
				if (hasOriginTokenId) change.value = change.value.replaceAll('originTokenId', `"${getEffectOriginToken(ae, 'id')}"`);
				if (hasOriginToken) change.value = change.value.replaceAll('originToken', `"${getEffectOriginToken(ae, 'token')}"`);
				const hasEffectTokenUuid = change.value.includes('effectTokenUuid');
				if (hasEffectTokenUuid) change.value = change.value.replaceAll('effectTokenUuid', `"${getEffectParentToken(ae.parent, 'uuid')}"`);
			});
			ae.updateSource({ changes: aedata.changes.concat(changes) });
		}
	});
	BUGS.info = { module: "Bugbear's Scripts", version: game.modules.get('bugs')?.version };
	BUGS.helpers = { getEffectOriginToken, getEffectParentToken };
	globalThis.BUGS = BUGS;
});
