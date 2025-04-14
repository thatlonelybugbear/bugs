## v12.438.3
* Added settings for:
 * automatically adding MidiQOL flags in applied system statuses (default on)
 * automatically rolling and applying one of the MidiQOL (needs v12.4.32+) choose effects (default on)
   * to trigger this function, add in the Item's requirements field the string `[autoMidiChooseEffects]`
   * video and images [here](<https://github.com/thatlonelybugbear/bugs/pull/32#issue-2993717699>)

## v12.438.2
* Slightly better handling for effect with no available origin.
* Added BUGS.helpers.staticID which returns the system's static ids of statuses, eg `dnd5echarmed0000` for `charmed` status

## v12.438.1
* D&D5e 4.3.x (set as minimum version) compatibility and changes for modern rules
* `Charmed` status will ***try*** to automate:
  * fail of activities that would do damage to the Charmer
  * advantage for checks that the Charmer rolls with the Charmed creature **targeted** when rolling
* Added `globalThis.BUGS` object which includes: 
  * `info`: module name and version,
  * `helpers`:  `getEffectOriginToken(effect, type)`, `getEffectParentToken(actor, type)` 
  * `statusEffects`: which includes all the predefined changes to the relevant effects.
    * as this it globally accessed and BUGS will check `BUGS.statusEffects[staticID]` for the relevant changes, any module or script altering these can inject their own flags etc.
* Added as available parameters in the effect values:
  * `effectTokenUuid`: which when the effect is being created, will be replaced by the token.document.uuid of the actor that the effect is being applied on.
  * `originTokenUuid`: which when the effect is being created, will be replaced by the token.document.uuid of the actor that the is the origin of the effect that's being created.
     * also available are `originToken`, `originTokenId` which return the Token5e and the id if there is a need.

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
