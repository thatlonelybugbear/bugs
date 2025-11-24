# Bugbear's Scripts (BUGS)
So BUGS is a module that provides some extra functionality when MidiQOL is active.
For now it will:
* add the proper MidiQOL flags to the system's status effect, like advantage when attacking a Blinded creature or disadvantage when attacking while being Blinded.
* add a way for automatically rolling and applying the corresponding effect when using the MidiQOL's Choose Effects functionality (more [here](<https://github.com/thatlonelybugbear/bugs/pull/32#issue-2993717699>))

<details>
  <summary><b>Supported Status effects</b></summary>
  
- `blinded`,
- `charmed` will try to automate:
  - _fail of activities that would do damage to the Charmer_: removed as it can be too invasive!
  - advantage for checks when the Charmer has the Charmed creature targeted before rolling!
- `dodging`,
- `encumbered`: when the system is set to legacy 5e rules and also `Encumbrance Tracking` set to `Variant (encumbered & heavily encumbered)`,
- `exhaustion (1-5)`: when the system is set to legacy 5e rules,
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
</details>

### Compatibility notes
- `Rest Recovery`: Provides exhaustion automation (when that setting is enabled it will take priority; NEEDS to reload Foundry if you change any relevant settings in RR).
- `Alternative Exhaustion 5e`: If that module is active, it will handle all the exhaustion effects and no MidiQOL flags will be added.
- v12.438.1+ needs D&D5e 4.3.x

<hr>
If you like what I do, consider supporting this lonely bugbear 🐾

Every shiny gold coin helps keep the ideas flowing and the goblins at bay.


<a href="https://www.patreon.com/thatlonelybugbear"><img src="https://img.shields.io/badge/-Patreon-%23f96854?style=for-the-badge&logo=patreon"/></a>
<a href="https://ko-fi.com/thatlonelybugbear"><img src="https://img.shields.io/badge/Ko–fi-00ADEF?style=for-the-badge&logo=kofi&logoColor=white"/></a>
<br/>
<br/>
You can also join the Bugbear’s Den to hang out, get help, or check what I might be working on!

<a href="https://discord.gg/KYb74fcsBt"><img src="https://img.shields.io/discord/1226846921474310194?style=for-the-badge&logo=discord&label=Discord&labelColor=%231c1e1f&color=%235865f2&link=https%3A%2F%2Fdiscord.gg%KYb74fcsBt"/></a>
<hr>

### Special credits
- Added `images` used by [DFreds](https://github.com/DFreds) and initially sourced from https://game-icons.net/ (CC-BY licence).
