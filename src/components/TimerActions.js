import {
    React,
    useState,
    useEffect,
} from "react"

// react-bootstrap imports
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"

// Audio imports
import AudioPlayer from "./AudioPlayer"
import useSound from "use-sound";

// Sound effect imports
import switchSound from "../sounds/switchSound.wav"

//Custom style import
import "../custom.scss"


const TimerActions = ({ workTime, breakTime, longBreakTime, timesToRepeat }) => {
    const [timerActive, setTimerActive] = useState(false) // state for timer being active
    const [timeLeft, setTimeLeft] = useState(workTime * 60) // state for the time left
    const [breakTimeBool, setBreakTimeBool] = useState(false)  // state for the breaktime boolean; BreakTimeBool = true: break is on
    const [repetitions, setRepetitions] = useState(0) // state for how many times the work -> break -> cycle has been repeated
    const [buttonAction, setButtonAction] = useState(null) // state for the button action that gets passed to AudioPlayer
    const [pauseDisabled, setPauseDisabled] = useState(true) // States to handle the button disable when needed
    const [startDisabled, setStartDisabled] = useState(false)

    const [playSwitchSound] = useSound(switchSound) // make playSwitchSound() play a notification sound

    useEffect(() => {
        let interval

        // Handle long break
        if (repetitions === timesToRepeat) {
            setBreakTimeBool(true) 
            setTimeLeft(longBreakTime * 60)
            setRepetitions(prevRepetitions => prevRepetitions - timesToRepeat)
            playSwitchSound()
        }

        // Handle work/break time
        if (timeLeft <= 0) {
            if (!breakTimeBool) {
                // Executes if timer was showing work timer
                setBreakTimeBool(true) 
                setTimeLeft(breakTime * 60)
                setRepetitions(prevRepetitions => prevRepetitions + 1)
                playSwitchSound()
            } else {
                // This executes if timer was showing break timer
                setBreakTimeBool(false) 
                setTimeLeft(workTime * 60)
                playSwitchSound()
            }
        }

        // Handle timer ticking down
        if (timerActive) {
            interval = setInterval(() => setTimeLeft(timeLeft => timeLeft - 1), 1000)
        }
        // clean up
        return () => clearInterval(interval)
    }, [timerActive, breakTimeBool, timeLeft, timesToRepeat, setBreakTimeBool, workTime, breakTime, longBreakTime])

    // Handle start button action
    const startTimer = () => {
        setTimerActive(true)
        setButtonAction("start")
        setStartDisabled(true)
        setPauseDisabled(false)
    }

    // Handle pause button action
    const pauseTimer = () => {
        setTimerActive(false)
        setButtonAction("pause")
        setPauseDisabled(true)
        setStartDisabled(false)
    }

    // Handle restart button action
    const restartTimer = () => {
        setTimeLeft(workTime * 60)
        setTimerActive(false)
        setBreakTimeBool(false)
        setButtonAction("restart")
        setStartDisabled(false)
        setPauseDisabled(true)
    }

    // Render remaining time on screen
    const renderRemainingTime = () => {
        const minutes = Math.floor(timeLeft / 60)
        const seconds = timeLeft % 60
        return (
            <h1 className="timerText">
                {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
            </h1>
        );
    }

    return (
        <div>
            <div>
                <div className="timerContainer">
                    {renderRemainingTime()}
                </div>
                {/* Added some inline styling for the buttons */}
                <ButtonGroup>
                    <Button className="btn btn-primary" onClick={startTimer} disabled={startDisabled} style={{ borderTopLeftRadius: "0px" }}>Start</Button>
                    <Button className="btn btn-primary" onClick={pauseTimer} disabled={pauseDisabled}>Pause</Button>
                    <Button className="btn btn-primary" onClick={restartTimer} style={{ borderTopRightRadius: "0px" }}>Restart</Button>
                </ButtonGroup>
            </div>
            <div>
                <AudioPlayer buttonAction={buttonAction} breakStatus={breakTimeBool} />
            </div>
        </div>
    )
}

export default TimerActions