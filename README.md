# Bugbear's Scripts

## Description
A small module for Foundry and Dnd5e which contains scripts that thislonelybugbear finds useful.

The ones included can at any point be altered, based on functionality absorbed/fixed/removed from relevant modules or the system.

The initial commit hooks on preCreateActiveEffect and preUpdateActiveEffect, in order to add the proper `MidiQOL flags` to the system's core status effects for:
- `blinded`,
- `dodging`,
- `encumbered`: Needs the system's setting for `Encumbrance Tracking` set to `Variant (encumbered & heavily encumbered),
- `exhaustion (1-5)`,
- `frightened`,
- `invisible`,
- `paralyzed`,
- `petrified`,
- `poisoned`,
- `prone`,
- `restrained`,
- `silenced`: Forces spells with V component to fail. You can create an Active Effect with `flags.midi-qol.fail.spell.vocal | Override | false | 20` which will cancel it out (think Subtle spell),
- `stunned`,
- `unconscious`.

## Compatibility notes.
- `DFreds Convenient Effects`: For compatibility make sure that you set the `Modify Status Effects` to `NONE`. As a side effect DFreds CE will be usable on dnd5e 3.x and Foundry 11/12.
- `Rest Recovery`: Provides exhaustion automation (when that setting is enabled it will take priority; NEEDS to reload Foundry if you change any relevant settings in RR).
- `Condition Lab Trigger`: For compatibility you need to make sure to force the default system's status effects, instead of the ones altered by CLT. To do that you need a World script which follows.
```js
Hooks.once('ready', () => {
  CONFIG.statusEffects = CONFIG.defaultStatusEffects;
});
```
