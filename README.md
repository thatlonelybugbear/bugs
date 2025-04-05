# Bugbear's Scripts

## Description
A <b>MidiQOL</b> compatible module which hooks on `preCreateActiveEffect` and `preUpdateActiveEffect`, in order to add the proper `MidiQOL flags` to the system's core status effects for:
- `blinded`,
- `dodging`,
- `encumbered`: (legacy rules) Needs the system's setting for `Encumbrance Tracking` set to `Variant (encumbered & heavily encumbered)`,
- `exhaustion (1-5)`: (legacy rules),
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
- `Rest Recovery`: Provides exhaustion automation (when that setting is enabled it will take priority; NEEDS to reload Foundry if you change any relevant settings in RR).
- `Alternative Exhaustion 5e`: If that module is active, it will handle all the exhaustion effects and no MidiQOL flags will be added.
- v12.438.1+ needs D&D5e 4.3.x

## Special credits.
- Added `images` used by [DFreds](https://github.com/DFreds) and initially sourced from https://game-icons.net/ (CC-BY licence).
