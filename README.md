# POMODORO APP
## THIS VERSION IS WIP
### Known issues:
- Setting values to zero and pressing restart causes the notification sound to infinite loop and crashes chrome
- Time boxes dont allow backspace properly. Broke when adding testing for valuerange 0-99, should be quite simple change
- Chrome doesn't loop sound properly
- Sounds are different volume (The original tracks have different volume)
- Sometimes the selected sound wont play (Something to do with not being able to recieve the sound file. Error logs in console)
- Some weirdness with the audio in general
- Volume slider doesn't affect notification sound. Issue caused by app structure.
- Some files still contain default bloat/settings from create-react-app. I didn't feel comfortable deleting alot of it.
- Title and picture use default values. Should change to custom.

### Future changes:
- Refactor some returns to use <Container>'s and follow that structure instead on <div>
- Rebuild audio feature to work more reliably
- Add todos
- Clean up SCSS files
- Redo part of app.js to use components instead of one big return
- Refactor Play/Pause/Restart functionality to work more fluent

### Completed features:
- Customizable timer and repetitions
- Start/pause/restart
- Multiple background noise choices (Including option for None)
- Notification for timer change
- Volume/mute controls
- Persistant states for values that i felt like needed it
- Decent mobile scaling
- Code commented

### Used technologies:
- React
- Bootstrap
- react-bootstrap
- create-react-app
- SCSS
- useSound
- useStickyState (Thanks to [www.joshwcomeau.com](https://www.joshwcomeau.com/react/persisting-react-state-in-localstorage/#keeping-localstorage-in-sync-5))
  - Felt this was needed to make the app work better, but didn't have the knowledge to do it myself
- Sound files from [freesound.org](https://freesound.org/)
  - All used sound files fall under Creative Commons 0


