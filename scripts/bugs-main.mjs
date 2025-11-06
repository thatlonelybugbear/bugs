const MODULE_ID = 'bugs';

let modernRules, midiVersion;

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
		changes: {
			origin: [
				{
					key: 'flags.midi-qol.grants.advantage.ability.check.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: 'nonWorkflowTargetedToken === effectTokenUuid',
				},
				// {
				// 	key: 'flags.midi-qol.fail.all',
				// 	mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				// 	value: 'hasDamage && targetUuid === originTokenUuid',
				// },
			],
			nonorigin: [
				{
					key: 'flags.midi-qol.grants.advantage.ability.check.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: 'nonWorkflowTargetedToken === effectTokenUuid',
				},
				// {
				// 	key: 'flags.midi-qol.fail.all',
				// 	mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				// 	value: 'confirm("Is this roll against the Charmed status source?")',
				// },
			],
		},
	};
	statusEffects[staticID('dodging')] = {
		changes: [
			{
				key: 'flags.midi-qol.grants.disadvantage.attack.all',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'target?.canSee && !["incapacitated","grappled","paralyzed","petrified","restrained","stunned","unconscious"].some(el=>target?.statuses[el])',
			},
			{
				key: 'flags.midi-qol.advantage.ability.save.dex',
				mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
				value: 'target?.canSee && !["incapacitated","grappled","paralyzed","petrified","restrained","stunned","unconscious"].some(el=>target?.statuses[el])',
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
		statusEffects[staticID('exhaustion3')] = {
			changes: [
				{
					key: 'flags.midi-qol.disadvantage.attack.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: '1',
				},
			],
		};
		statusEffects[staticID('exhaustion4')] = {
			changes: [
				{
					key: 'flags.midi-qol.disadvantage.attack.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: '1',
				},
			],
		};
		statusEffects[staticID('exhaustion5')] = {
			changes: [
				{
					key: 'flags.midi-qol.disadvantage.attack.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: '1',
				},
			],
		};
	}
	statusEffects[staticID('frightened')] = {
		changes: {
			origin: [
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
			nonorigin: [
				{
					key: 'flags.midi-qol.disadvantage.attack.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: true,
				},
				{
					key: 'flags.midi-qol.disadvantage.ability.check.all',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: true,
				},
			],
		},
	};
	if (modernRules) {
		statusEffects[staticID('grappled')] = {
			changes: {
				origin: [
					{
						key: 'flags.midi-qol.disadvantage.attack.all',
						mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
						value: 'targetUuid !== originTokenUuid',
					},
				],
				nonorigin: [],
			},
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
	if (modernRules) {
		statusEffects[staticID('surprised')] = {
			changes: [
				{
					key: 'flags.dnd5e.initiativeDisadv',
					mode: CONST.ACTIVE_EFFECT_MODES.CUSTOM,
					value: '1',
				},
			],
		};
	}
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

function getChanges(ae) {
	const id = typeof ae === 'string' ? ae : ae.id;
	// const isTransfer = ae.transfer;
	const hasOrigin = ae.origin;
	const isBUGS = BUGS.statusEffects[id];
	if (isBUGS && !hasOrigin) return isBUGS.changes.nonorigin ? foundry.utils.duplicate(isBUGS.changes.nonorigin) : foundry.utils.duplicate(isBUGS.changes);
	else if (isBUGS && hasOrigin) return isBUGS.changes.origin ? foundry.utils.duplicate(isBUGS.changes.origin) : foundry.utils.duplicate(isBUGS.changes);
	else return false;
}

function staticID(id) {
	id = `dnd5e${id}`;
	if (id.length >= 16) return id.substring(0, 16);
	return id.padEnd(16, '0');
}

function shouldProceed(check, hook) {
	return getAutomateStatusesFlags() && ((!check.flags?.dnd5e?.exhaustionLevel && hook == 'create') || (!modernRules && check.flags?.dnd5e?.exhaustionLevel && !game.modules.get('alternative-exhaustion-5e')?.active && (!game.modules.get('rest-recovery')?.active || !game.settings.get('rest-recovery', 'one-dnd-exhaustion'))));
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
	if (!origin?.origin) {
		if (origin instanceof CONFIG.ActiveEffect.documentClass) {
			if (origin.parent instanceof CONFIG.ActiveEffect.documentClass) {
				if (origin.parent?.parent instanceof CONFIG.Item.documentClass) effectOriginActor = origin.parent.parent.actor;
				if (origin.parent?.parent instanceof CONFIG.Actor.documentClass) effectOriginActor = origin.parent.parent;
			}
		}
		if (origin.parent instanceof CONFIG.Item.documentClass) effectOriginActor = origin.parent.actor;
		if (origin.parent instanceof CONFIG.Actor.documentClass) effectOriginActor = origin.parent;
	} else {
		const newOrigin = fromUuidSync(origin.origin);
		if (newOrigin instanceof CONFIG.ActiveEffect.documentClass) {
			if (newOrigin.parent instanceof CONFIG.ActiveEffect.documentClass) {
				if (newOrigin.parent?.parent instanceof CONFIG.Item.documentClass) effectOriginActor = newOrigin.parent.parent.actor;
				if (newOrigin.parent?.parent instanceof CONFIG.Actor.documentClass) effectOriginActor = newOrigin.parent.parent;
			}
		}
		if (newOrigin.parent instanceof CONFIG.Item.documentClass) effectOriginActor = newOrigin.parent.actor;
		if (newOrigin.parent instanceof CONFIG.Actor.documentClass) effectOriginActor = newOrigin.parent;
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
	BUGS.info = { module: "Bugbear's Scripts", version: game.modules.get('bugs')?.version, modernRules };
	BUGS.helpers = { getEffectOriginToken, getEffectParentToken, staticID };
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
			const changes = getChanges(ae);
			if (!changes || foundry.utils.isEmpty(changes)) return true;
			changes.filter((change) => {
				if (typeof change.value !== 'string') return false;
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
	midiVersion = game.modules.get('midi-qol').version;
	if (foundry.utils.isNewerVersion(midiVersion, '12.4.31')) Hooks.on('renderDialog', implementAutoMidiChooseEffects);
	globalThis.BUGS = BUGS;

	Hooks.callAll('BUGS.ready');
});

async function implementAutoMidiChooseEffects(app, html, data) {
	if (!getAutomateChooseEffects() || !app.element.hasClass('effectNoTarget')) return;

	const string = '[autoMidiChooseEffects]';
	const activity = foundry.utils.isNewerVersion(midiVersion, '12.4.43') ? app?.data?.midiOptions?.activity : undefined;
	const item = activity?.item ?? fromUuidSync(Object.keys(data.buttons)[0].split('.ActiveEffect')[0]);
	const isAutoMidiChooseEffects = activity?.description?.chatFlavor?.includes(string) || item?.system?.requirements?.includes(string) || item?.system?.description?.value.includes(string) || item?.system?.description?.chat.includes(string) || item?.system?.unidentified?.description.includes(string);
	if (!isAutoMidiChooseEffects) return;

	const buttons = app.element[0].querySelectorAll('button');
	const numButtons = buttons.length;

	if (numButtons === 0) return;

	let result, timeout;
	if (numButtons === 1) result = 0;
	else {
		const formula = numButtons === 2 && game.dice3d ? '1dc' : `1d${numButtons}`;
		const roll = new Roll(formula);
		await roll.toMessage({ flavor: `Rolling to randomly pick one of the ${numButtons} available effects to apply for ${activity ? activity.name : item.name}` });
		timeout = 1500;
		result = game.dice3d && numButtons === 2 ? roll.total : roll.total - 1;
	}
	const buttonToClick = buttons[result];
	buttonToClick.style.outline = '3px solid orange';
	buttonToClick.style.transition = 'outline 0.3s ease-in-out';
	console.log(`Auto-selecting button #${result + 1} in 1 second...`);
	//should add a nice chat message too or something that makes sense. Maybe update the Item's chat card with the roll data
	setTimeout(() => {
		buttonToClick.click();
	}, timeout);
}

function registerSettings() {
	game.settings.register('bugs', 'automateStatusesFlags', {
		name: 'BUGS.automateStatusesFlags.name',
		hint: 'BUGS.automateStatusesFlags.hint',
		scope: 'world',
		config: true,
		default: true,
		type: Boolean,
	});
	game.settings.register('bugs', 'automateChooseEffects', {
		name: 'BUGS.automateChooseEffects.name',
		hint: 'BUGS.automateChooseEffects.hint',
		scope: 'world',
		config: true,
		default: true,
		type: Boolean,
	});
	game.settings.register('bugs', 'autoUpdateHombrewItems', {
		name: 'BUGS.automateHomebrewAdvancement.name',
		hint: 'BUGS.automateHomebrewAdvancement.hint',
		scope: 'world',
		config: true,
		default: true,
		type: Boolean,
	});
}

function getAutomateStatusesFlags() {
	return game.settings.get('bugs', 'automateStatusesFlags');
}

function getAutomateChooseEffects() {
	return game.settings.get('bugs', 'automateChooseEffects');
}

function autoUpdateHombrewItems() {
	return game.settings.get('bugs', 'autoUpdateHombrewItems');
}

//other Hooks
Hooks.once('init', registerSettings);
Hooks.on('dnd5e.advancementManagerComplete', advanceHomebrew);

async function advanceHomebrew(manager) {
	if (!autoUpdateHombrewItems()) return true;
	const level = manager.steps.findLast(Boolean).level;
	const actor = manager.actor;
	const identifiers = {
		bloodfang: {
			6: 'Compendium.bugs.bugs-alindrena.Item.NgnUdXtluXtOvMh7',
			7: 'Compendium.bugs.bugs-alindrena.Item.1Lbu1mG4AlHsWApb',
			9: 'Compendium.bugs.bugs-alindrena.Item.8CfBI2WjZt4ySGjV',
			11: 'Compendium.bugs.bugs-alindrena.Item.y84d6wapGpqvhGc1',
		},
		['echo-of-calamity']: {
			6: 'Compendium.bugs.bugs-alindrena.Item.SnvvKJBET7BZRuw4',
			7: 'Compendium.bugs.bugs-alindrena.Item.BOJSnSYq0YYFCTsu',
			9: 'Compendium.bugs.bugs-alindrena.Item.uoeelqj3qFywjqhk',
			11: 'Compendium.bugs.bugs-alindrena.Item.eXnhz72r44Q14GLG',
		},
		['mantle-of-the-starforged-herald']: {
			6: 'Compendium.bugs.bugs-alindrena.Item.6dlh9UHmKscEe4x3',
			7: 'Compendium.bugs.bugs-alindrena.Item.eTph7GMEqexehaFS',
			9: 'Compendium.bugs.bugs-alindrena.Item.ABKNp4eJne3ydfRv',
			11: 'Compendium.bugs.bugs-alindrena.Item.sodqfOn6POjTUJrc',
		},
		['mask-of-the-drowned-voice']: {
			6: 'Compendium.bugs.bugs-alindrena.Item.xbQnecpWSW7jWKFI',
			7: 'Compendium.bugs.bugs-alindrena.Item.Y40imydYLhqjge0E',
			9: 'Compendium.bugs.bugs-alindrena.Item.NvTKRyscm6KP6pME',
			11: 'Compendium.bugs.bugs-alindrena.Item.2GANfPoFy57yfXqR',
		},
		['the-teeth-of-the-worldshell']: {
			6: 'Compendium.bugs.bugs-alindrena.Item.Ia2i7LNVc0HGoojT',
			7: 'Compendium.bugs.bugs-alindrena.Item.MWVYcsPEn6dpvCIe',
			9: 'Compendium.bugs.bugs-alindrena.Item.gWMX863RZhaU1Prf',
			11: 'Compendium.bugs.bugs-alindrena.Item.NaekvPVY7nTfImfn',
		},
		venomcoin: {
			6: 'Compendium.bugs.bugs-alindrena.Item.rmn2dUNN80oNs5dJ',
			7: 'Compendium.bugs.bugs-alindrena.Item.3UBUTJ7E1bnTScNt',
			9: 'Compendium.bugs.bugs-alindrena.Item.8LVhzis06PJt8Q7w',
			11: 'Compendium.bugs.bugs-alindrena.Item.YKDlGs5KwLR3Mo8G',
		},
		['whisperfang-the-returning-wind']: {
			6: 'Compendium.bugs.bugs-alindrena.Item.RcBy9HFKFI7rYsTU',
			7: 'Compendium.bugs.bugs-alindrena.Item.rsMTd3Sifi9RcLJz',
			9: 'Compendium.bugs.bugs-alindrena.Item.d2rp5bldXvG4hmSp',
			11: 'Compendium.bugs.bugs-alindrena.Item.zPYYKAxbgRvSxsuC',
		},
	};
	const levelIdentifier = level >= 11 ? '-11' : level >= 9 ? '-9' : level >= 7 ? '-7' : '';
	const levelAdditions = level >= 11 ? '11' : level >= 9 ? '9' : level >= 7 ? '7' : '6';
	const relevantItems = actor.items.filter((i) => {
		return Object.keys(identifiers).some((id) => i.identifier?.toLowerCase().includes(id));
	});
	const relevantItemsBareIds = relevantItems.map((i) => Object.keys(identifiers).find((id) => i.identifier?.toLowerCase().includes(id)));
	const needUpdate = relevantItems.filter((i) => (!!levelIdentifier ? !i.identifier.includes(levelIdentifier) : !!Number(i.identifier.at(-1))));
	const needDeletion = needUpdate.map((i) => i.id);
	const needUpdateUuids = needUpdate.map((i) => identifiers[relevantItemsBareIds.find((id) => i.identifier.includes(id))][levelAdditions]);
	await actor.deleteEmbeddedDocuments('Item', needDeletion);
	const toCreate = [];
	for (const uuid of needUpdateUuids) {
		const compendiumItem = await fromUuid(uuid);
		const itemData = game.items.fromCompendium(compendiumItem);
		itemData.name = itemData.name.split('-')[0];
		toCreate.push(itemData);
	}
	const newItems = await actor.createEmbeddedDocuments('Item', toCreate);
	console.warn('BUGS updates on Items', { updated: newItems.map((i) => i.name) });
}
