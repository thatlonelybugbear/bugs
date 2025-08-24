## v13.512.1
* Compatibility with v5.1.2 5e system version.
  * For pre v5.1 please use BUGS v13.504.1
* Removal of flags for statuses that are automated by the system.

## v13.504.1
* Compatibility bump
* Fix for some conditions not populating changes

## v12.439.5
* Added handling for rolling `1dc` instead of `1d2`, if Dice so Nice module is active and only 2 available effects to choose from for `[autoMidiChooseEffects]`.
* If Dice so Nice module is not active, a message with the roll's details will be created to give some sense to what's happening.
  
## v12.439.4
* Allow changing the BUGS settings for applying MidiQOL flags on system conditions, on the fly without a reload needed.

## v12.439.3
* From MidiQOL 12.4.44 you will able to use a per activity trigger. Adding `[autoMidiChooseEffects]` in a specific activity's Chat Flavor, will allow for that one only to trigger the Choose effects function, and there will not be a need to add anything on a per item basis.
* Until then and for extra choices, you can also add the `[autoMidiChooseEffects]` in the unidentified item's description field among other fields already available.
* Fix for Dodging adding an extra `)` and the evaluation failing as a result.
* Adding a hook `BUGS.ready` called when BUGS has finished initializing, which can be called by other modules to subsequently change as/if needed the `BUGS.statusEffects`. Any changes in that object will be picked up when applying the relevant conditions.

## v12.439.2.1
* `game.dice3d` can be undefined

## v12.439.2
* For auto rolling MidiQOL Choose effects, you can now add `[autoMidiChooseEffects]` in all item description fields.
  * (in a future release it will be added in a per activity capacity, but I am waiting on some changes in MidiQOL for that).

## v12.439.1
* Added Surprised for modern rules (disadvantage on initiative)
* D&D5e v4.3.9 verified

## v12.438.3.2
* More translations updates, thanks to [GregoryWarn](<https://github.com/GregoryWarn>) and [Kharmans](<https://github.com/Kharmans>)
  
## v12.438.3.1
* Translations updates

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
