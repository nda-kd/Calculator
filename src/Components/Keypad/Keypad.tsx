import "./Keypad.scss";
import { ActionKind } from "../../Redux/Actions/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

interface RootState {
  displayResult: string;
}

function KeyPad() {
  const displayResultDispatch = useDispatch();
  const displayRecordsDispatch = useDispatch();
  // const operationDispatch = useDispatch();

  const [number, setNumber] = useState("");
  const [operand, setOperand] = useState<string>("");
  const [operation, setOperation] = useState<string[]>([]);

  const displayState = useSelector((state: RootState) => state.displayResult);

  const ClearLCD = () => {
    displayResultDispatch({ type: ActionKind.DisplayResult, payload: "C" });
    displayRecordsDispatch({ type: ActionKind.DisplayRecords, payload: "C" });
    setNumber("");
    setOperand("");
    setOperation([]);
  };

  const numberOnClick = (num: string) => {
    if (num === "." && displayState === "") {
      displayResultDispatch({
        type: ActionKind.DisplayResult,
        payload: "0",
      });
    }

    if (num === "0" && displayState === "") {
    } else {
      displayResultDispatch({ type: ActionKind.DisplayResult, payload: num });
    }
    setNumber(number + num);
  };

  const calculate = () => {
    var acc;
    var newArr: any[] = [];

    newArr = operation.splice(0, operation.length);

    if (newArr.length >= 2 && newArr[newArr.length - 1] === "-") {
      switch (newArr[newArr.length - 2]) {
        case "+":
          acc = parseFloat(operand) + -parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        case "-":
          acc = parseFloat(operand) - -parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        case "/":
          acc = parseFloat(operand) / -parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        case "*":
          acc = parseFloat(operand) * -parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        default:
          acc = "";
          setOperand(acc);
          return acc;
      }
    } else {
      switch (newArr[newArr.length - 1]) {
        case "+":
          acc = parseFloat(operand) + parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        case "-":
          acc = parseFloat(operand) - parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        case "/":
          acc = parseFloat(operand) / parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        case "*":
          acc = parseFloat(operand) * parseFloat(number);
          setOperand(acc.toString());
          return acc.toString();

        default:
          acc = "";
          setOperand(acc);
          return acc;
      }
    }
  };

  const operationOnClick = (op: string) => {
    if (number) {
      displayRecordsDispatch({
        type: ActionKind.DisplayRecords,
        payload: number,
      });
      setOperand(number);
    }

    if (operand && number) {
      let acc: string = calculate();
      displayResultDispatch({ type: ActionKind.DisplayResult, payload: "C" });
      displayResultDispatch({
        type: ActionKind.DisplayResult,
        payload: acc.toString(),
      });
      setOperation([]);
    } else if (!operand && !number && !displayState) {
      setOperand("0");
    }

    displayRecordsDispatch({ type: ActionKind.DisplayRecords, payload: op });
    setOperation([...operation, op]);
    setNumber("");
  };

  const percentOnClick = () => {
    if (displayState) {
      let percent: string = (parseInt(displayState) / 100).toString();
      displayResultDispatch({ type: ActionKind.DisplayResult, payload: "C" });
      displayResultDispatch({
        type: ActionKind.DisplayResult,
        payload: percent,
      });
      setNumber(percent);
    }
  };

  const equalOnClick = () => {
    if (operand && number) {
      let acc: string = calculate();
      displayRecordsDispatch({ type: ActionKind.DisplayRecords, payload: "C" });
      displayResultDispatch({ type: ActionKind.DisplayResult, payload: "C" });
      displayResultDispatch({
        type: ActionKind.DisplayResult,
        payload: acc,
      });
      setNumber(acc);
      setOperand("");
    } else {
      displayResultDispatch({ type: ActionKind.DisplayResult, payload: "C" });
      displayResultDispatch({
        type: ActionKind.DisplayResult,
        payload: displayState,
      });
      setOperation([]);
    }
  };

  return (
    <div className="keypad-wrap">
      <div className="button-wrap">
        <button id="clear" onClick={ClearLCD}>
          AC
        </button>
        <button id="percent" onClick={() => percentOnClick()}>
          %
        </button>
        <button id="divide" onClick={() => operationOnClick("/")}>
          /
        </button>
        <button id="one" onClick={() => numberOnClick("1")}>
          1
        </button>
        <button id="two" onClick={() => numberOnClick("2")}>
          2
        </button>
        <button id="three" onClick={() => numberOnClick("3")}>
          3
        </button>
        <button id="multiply" onClick={() => operationOnClick("*")}>
          x
        </button>

        <button id="four" onClick={() => numberOnClick("4")}>
          4
        </button>
        <button id="five" onClick={() => numberOnClick("5")}>
          5
        </button>
        <button id="six" onClick={() => numberOnClick("6")}>
          6
        </button>
        <button id="add" onClick={() => operationOnClick("+")}>
          +
        </button>

        <button id="seven" onClick={() => numberOnClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => numberOnClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => numberOnClick("9")}>
          9
        </button>
        <button id="subtract" onClick={() => operationOnClick("-")}>
          -
        </button>

        <button id="zero" onClick={() => numberOnClick("0")}>
          0
        </button>
        <button id="decimal" onClick={() => numberOnClick(".")}>
          .
        </button>
        <button id="equals" onClick={() => equalOnClick()}>
          {" "}
          ={" "}
        </button>
      </div>
    </div>
  );
}

export default KeyPad;
