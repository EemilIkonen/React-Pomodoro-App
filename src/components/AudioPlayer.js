import {
    React,
    useState,
    useEffect
} from "react";

// react-bootstrap component imports:
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button";

//Sound imports 
import humNoise from "../sounds/hum-noise.wav"
import whiteNoise from "../sounds/white-noise.wav"
import windNoise from "../sounds/wind-noise.wav"
import whiteNoise2 from "../sounds/white-noise2.wav"
import noneNoise from "../sounds/none.wav"
import useStickyState from "./Sticky"

//Custom style import
import "../custom.scss"

const AudioPlayer = (props) => {
    const [soundUrl, setSoundUrl] = useStickyState(windNoise, "soundUrl") // saved state for setting the url of the sound
    const [audio] = useState(new Audio(soundUrl)); // create an Audio object with audio file
    const [muted, setMuted] = useStickyState(true, "muted"); // saved state for muting/unmuting the audio
    const [volume, setVolume] = useStickyState(0.5, "volume"); // saved state for controlling the volume of the audio
    const { buttonAction, breakStatus } = props; // save props as variables

    // useEffect that handles the interaction with the Play/Pause/Restart controls.
    useEffect(() => {
        if (buttonAction === "start" && !breakStatus) {
            audio.src = soundUrl;
            audio.play();
        } else if (buttonAction === "start" && breakStatus) {
            audio.pause();
        } else if (buttonAction === "pause") {
            audio.pause();
        } else if (buttonAction === "restart") {
            audio.currentTime = 0;
            audio.pause();
        }
    }, [buttonAction, breakStatus, soundUrl]);

    // useEffect that handles the audio settings for loop and autoplay and plays/pauses it
    useEffect(() => {
        audio.loop = true
        audio.autoplay = false
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio]);

    // Handles volume change
    useEffect(() => {
        // set the volume of the audio when the volume state changes
        audio.volume = volume;
    }, [audio, volume]);

    // Handles mute change
    useEffect(() => {
        // mute/unmute the audio when the muted state changes
        audio.muted = muted;
    }, [audio, muted]);

    // Handler for mute button
    const handleMuteToggle = () => {
        setMuted(!muted);
    };

    // Handler for volume range
    const handleVolumeChange = (e) => {
        setVolume(e.target.value / 100);
    };

    // Handler for Form.Select that chooses the right audiotrack.
    const handleSoundChange = (e) => {
        setSoundUrl(e.target.value)
    };

    return (
        <Container>
            <Row className="soundControlRow mx-auto d-flex justify-content-center">
                <Form.Label className="selectNoiseLabel mx-auto">Select Sound:
                    <Form.Select aria-label="Select background noise" className="selectNoiseDropdown mx-auto" onChange={handleSoundChange}>
                        <option value={windNoise}>Wind sound</option>
                        <option value={whiteNoise}>White noise</option>
                        <option value={whiteNoise2}>White noise 2</option>
                        <option value={humNoise}>hum noise</option>
                        <option value={noneNoise}>None</option>
                    </Form.Select></Form.Label>
            </Row>
            <Row className="soundControlRow mx-auto d-flex justify-content-center">
                <Button className="btn-custom btn-primary" onClick={handleMuteToggle}>{muted ? "Unmute" : "Mute"}</Button>
                <input aria-label="Volume Control range" as="Button" className="volumeRange" type="range" min="0" max="100" value={volume * 100} onChange={handleVolumeChange} />
            </Row>
        </Container>
    );
};

export default AudioPlayer;