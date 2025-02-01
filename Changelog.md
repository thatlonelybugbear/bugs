## v1.4.1
- Compatibility bump 5e 4.2.2
- Modern rules changes
  - Both modern and legacy rules are respected.

### v1.2.1.1
- Hotfix, forgotten comma, thanks @gambit

## v1.2.1
- Monkeypatch adding back `reaction` and `bonusaction` status effects when DFreds CE is set to REPLACE and MidiQOL verions higher than 11.4.40.1, until the release that fixes this.

## v1.2.0
- Compatibility bump for Foundry v12.329 and d&d 5e v3.3.0

 ### v1.0.7.1
- Correct the MidiQOL hook `midi-qol.ready`

## v1.0.7
- Added pt-BR translation, thanks @Kharmans

## v1.0.6
- Closes [#14](https://github.com/thatlonelybugbear/bugs/issues/14) - Reaction used AE should be deleted when Combat ends.
- Adds a check for MidiQOL version being higher than 11.4.40.1, so that BUGS stops handling Reactions in case that's true (MidiQOL will handle these itself).

## v1.0.5
- Closes [#12](https://github.com/thatlonelybugbear/bugs/issues/12) - v11 `ActiveEffect5e#icon` vs v12 `ActiveEffect5e#img`

## v1.0.3
- Closes [9](https://github.com/thatlonelybugbear/bugs/issues/9) - Add a reaction used AE and logic to apply when needed.
- Bump compatibility to v12.328 Foundry.
- Added `images` used by [DFreds](https://github.com/DFreds) in [DFreds Convenient Effects](https://github.com/DFreds/dfreds-convenient-effects) and initially sourced from https://game-icons.net/ (CC-BY licence).

## v1.0.2
- Fix for `shouldProceed()` not doing what is supposed to do...

## v1.0.1
- When Alternative Exhaustion 5e module is enabled, it will take care of Exhaustion effects, so no MidiQOL flags are being added in that case.

## v1.0.0
- Initial release.
- Adds on all relevant system's status effects MidiQOL flags.
- Reinstates usability of DFreds CE in Foundry 11/12 and mainly dnd5e v3.x (change the modify status effects setting in DFreds CE to NONE).
- Rest Recovery compatibility with its exhaustion automation. If enabled, RR's automation takes priority.
- Check the readme for more info and a way to reinstate usability of Condition Lab Triggler too on dnd5e v3.x.
<https://github.com/thatlonelybugbear/bugs/blob/main/README.md>
