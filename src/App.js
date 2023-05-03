import {
  React
} from "react"

// react-bootstrap imports:
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

// Component imports
import TimerActions from "./components/TimerActions";
import useStickyState from "./components/Sticky"

// Icon imports
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Custom style import
import "./custom.scss";

// Handle the header
const AppHeader = () => {
  return (
    <h1>Pomodoro timer</h1>
  );
}

function App() {
  const [workTime, setWorkTime] = useStickyState("25", "workTime"); // state for work time
  const [breakTime, setBreakTime] = useStickyState("5", "breakTime"); // state for break time
  const [longBreakTime, setLongBreakTime] = useStickyState("30", "longBreakTime"); // state for long break time
  const [timesToRepeat, setTimesToRepeat] = useStickyState("4", "timesToRepeat"); // state for repetition

  return (
    <Container className="mainProgramContainer" fluid="md">
      {/* Main container starts */}

      <Row className="mainProgramHeaderRow">
        {/* The header row starts */}
        <AppHeader />
        {/* The AppHeader component is called */}
      </Row>
      {/* The header row ends */}

      <Row className="mainProgramTimeInputForms mx-auto d-flex justify-content-center">
        {/* A row for inputting working time starts */}

        <Form.Group controlId="workTime" className="mainProgramTimeInputFormsGroup mx-auto">
          {/* The Form.Group for the working time input starts */}

          <Form.Label className="form-group-label">Working time 0-99 min</Form.Label>
          {/* A label for the working time input */}

          <InputGroup className="form-group-inputgroup mb-3 mx-auto">
            {/* An input group for the working time input starts */}

            <Button
              onClick={() => {
                const newWorkTime = parseInt(workTime) + 1;
                if (newWorkTime <= 99) {
                  setWorkTime(newWorkTime);
                }
              }}
              id="button-addon1"
              aria-label="Increase work time by 1 minute" >
              <FontAwesomeIcon icon={faPlus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to increase the working time by 1 minute */}

            <Form.Control
              className="form-control-input"
              type="number"
              min={0}
              max={99}
              value={workTime}
              onKeyDown={e => {
                if (isNaN(Number(e.key)) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
              onChange={e => {
                const newWorkTime = parseInt(e.target.value);
                if (!isNaN(newWorkTime) && newWorkTime >= 0 && newWorkTime <= 99) {
                  setWorkTime(newWorkTime);
                }
              }}
            />
            {/* An input field to enter the working time */}

            <Button
              onClick={() => {
                const newWorkTime = parseInt(workTime) - 1;
                if (newWorkTime >= 0) {
                  setWorkTime(newWorkTime);
                }
              }}
              id="button-addon1"
              aria-label="Decrease work time by 1 minute">
              <FontAwesomeIcon icon={faMinus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to decrease the working time by 1 minute */}

          </InputGroup>
          {/* The input group for the working time input ends */}

        </Form.Group>
        {/* The Form.Group for the working time input ends */}

      </Row>
      {/* The row for inputting working time ends */}

      <Row className="mainProgramTimeInputForms mx-auto d-flex justify-content-center">
        {/* A row for inputting break time starts */}
        <Form.Group controlId="breakTime" className="mainProgramTimeInputFormsGroup mx-auto">
          {/* The Form.Group for the break time input starts */}

          <Form.Label className="form-group-label">Break time 0-99 min</Form.Label>
          {/* A label for the break time input */}

          <InputGroup className="form-group-inputgroup mb-3 mx-auto">
            {/* Start of input group for the break time input starts */}

            <Button
              onClick={() => {
                const newBreakTime = parseInt(breakTime) + 1;
                if (newBreakTime <= 99) {
                  setBreakTime(newBreakTime);
                }
              }}
              id="button-addon1"
              aria-label="Increase break time by 1 minute" >
              <FontAwesomeIcon icon={faPlus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to increase the break time by 1 minute */}

            <Form.Control
              className="form-control-input"
              type="number"
              min={0}
              max={99}
              value={breakTime}
              onKeyDown={e => {
                if (isNaN(Number(e.key)) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
              onChange={e => {
                const newBreakTime = parseInt(e.target.value);
                if (!isNaN(newBreakTime) && newBreakTime >= 0 && newBreakTime <= 99) {
                  setBreakTime(newBreakTime);
                }
              }}
            />
            {/* An input field to enter the break time */}

            <Button
              onClick={() => {
                const newBreakTime = parseInt(breakTime) - 1;
                if (newBreakTime >= 0) {
                  setBreakTime(newBreakTime);
                }
              }}
              id="button-addon1"
              aria-label="Decrease break time by 1 minute">
              <FontAwesomeIcon icon={faMinus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to decrease the break time by 1 minute */}

          </InputGroup>
          {/* End of input group for the break time input */}

        </Form.Group>
        {/* End of Form.Group for the break time input */}

      </Row>
      {/* End of row for inputting break time */}

      <Row className="mainProgramTimeInputForms mx-auto d-flex justify-content-center">
        {/* A row for inputting long break time starts */}

        <Form.Group controlId="longBreakTime" className="mainProgramTimeInputFormsGroup mx-auto">
          {/* The Form.Group for the long break time input starts */}

          <Form.Label className="form-group-label">Long break time 0-99 min</Form.Label>
          {/* A label for the long break time input */}

          <InputGroup className="form-group-inputgroup mb-3 mx-auto">
            {/* An input group for the long break time input starts */}

            <Button
              onClick={() => {
                const newLongBreakTime = parseInt(longBreakTime) + 1;
                if (newLongBreakTime <= 99) {
                  setLongBreakTime(newLongBreakTime);
                }
              }} id="button-addon1"
              aria-label="Increase work time by 1 minute">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to increase the long break time by 1 minute */}

            <Form.Control
              className="form-control-input"
              type="number"
              min={0}
              max={99}
              value={longBreakTime}
              onKeyDown={e => {
                if (isNaN(Number(e.key)) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
              onChange={e => {
                const newLongBreakTime = parseInt(e.target.value);
                if (!isNaN(newLongBreakTime) && newLongBreakTime >= 0 && newLongBreakTime <= 99) {
                  setLongBreakTime(newLongBreakTime);
                }
              }}
            />
            {/* An input field to enter the long break time */}

            <Button
              onClick={() => {
                const newLongBreakTime = parseInt(longBreakTime) - 1;
                if (newLongBreakTime >= 0) {
                  setLongBreakTime(newLongBreakTime);
                }
              }}
              id="button-addon1"
              aria-label="Increase work time by 1 minute">
              <FontAwesomeIcon icon={faMinus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to decrease the long break time by 1 minute */}

          </InputGroup>
          {/* The input group for the long break time input ends */}

        </Form.Group>
        {/* The Form.Group for the long break time input ends */}

      </Row>
      {/* The row for inputting long break time ends */}

      <Row className="mainProgramTimeInputForms mx-auto d-flex justify-content-center">
        {/* A row for inputting repetition amount starts */}

        <Form.Group controlId="timesToRepeat" className="mainProgramTimeInputFormsGroup mx-auto">
          {/* The Form.Group for the repetition amount input starts */}

          <Form.Label className="form-group-label">Times to repeat 0-99</Form.Label>
          {/* An input group for the repetition amount input starts */}

          <InputGroup className="form-group-inputgroup mb-3 mx-auto">


            <Button
              onClick={() => {
                const newTimesToRepeat = parseInt(timesToRepeat) + 1;
                if (newTimesToRepeat <= 99) {
                  setTimesToRepeat(newTimesToRepeat);
                }
              }}
              id="button-addon1"
              aria-label="Increase work time by 1 minute">
              <FontAwesomeIcon icon={faPlus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to increase the repetition amount by 1 minute */}

            <Form.Control
              className="form-control-input"
              type="number"
              min={0}
              max={99}
              value={timesToRepeat}
              onKeyDown={e => {
                if (isNaN(Number(e.key)) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
              onChange={e => {
                const newTimesToRepeat = parseInt(e.target.value);
                if (!isNaN(newTimesToRepeat) && newTimesToRepeat >= 0 && newTimesToRepeat <= 99) {
                  setTimesToRepeat(newTimesToRepeat);
                }
              }}
            />
            {/* An input field to enter the repetition amount */}

            <Button
              onClick={() => {
                const newTimesToRepeat = parseInt(timesToRepeat) - 1;
                if (newTimesToRepeat >= 0) {
                  setTimesToRepeat(newTimesToRepeat);
                }
              }}
              id="button-addon1"
              aria-label="Increase work time by 1 minute">
              <FontAwesomeIcon icon={faMinus} style={{ color: "#aec6cf" }} />
            </Button>
            {/* A button to decrease the repetition amount by 1 minute */}

          </InputGroup>
          {/* The input group for the repetition amount input ends */}

        </Form.Group>
        {/* The Form.Group for the repetition amount input ends */}

      </Row>
      {/* The row for inputting repetition amount ends */}

      <Row className="mainProgramTimerActionsRow justify-content-center">
        {/* The row for timer actions starts */}

        <TimerActions workTime={workTime} breakTime={breakTime} longBreakTime={longBreakTime} timesToRepeat={timesToRepeat} />
        {/* TimerActions is called with the right values */}

      </Row>
      {/* The row for timer actions ends */}

      {/* Main container ends */} </Container >
  );
}

export default App;