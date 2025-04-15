# Bugbear's Scripts

## Description
So BUGS is a module that provides some extra functionality when MidiQOL is active.
For now it will:
* add the proper MidiQOL flags to the system's status effect, like advantage when attacking a Blinded creature or disadvantage when attacking while being Blinded.
* add a way for automatically rolling and applying the corresponding effect when using the MidiQOL's Choose Effects functionality (more [here](<https://github.com/thatlonelybugbear/bugs/pull/32#issue-2993717699>)

Supported Status effects:
- `blinded`,
- `charmed` will try to automate:
  - fail of activities that would do damage to the Charmer
  - advantage for checks that the Charmer rolls when you have the Charmed creature targeted before rolling!
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
