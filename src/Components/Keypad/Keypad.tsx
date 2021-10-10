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
    // console.log("splice::", newArr);
    // console.log("preArry:", operation);

    if (newArr.length >= 2 && newArr[newArr.length - 1] === "-") {
      switch (newArr[newArr.length - 2]) {
        case "+":
          acc = parseFloat(operand) + -parseFloat(number);
          console.log("acc+", acc);
          setOperand(acc.toString());
          return acc.toString();

        case "-":
          acc = parseFloat(operand) - -parseFloat(number);

          console.log("acc-", acc);
          setOperand(acc.toString());
          return acc.toString();

        case "/":
          acc = parseFloat(operand) / -parseFloat(number);

          console.log("acc/", acc);
          setOperand(acc.toString());
          return acc.toString();

        case "*":
          acc = parseFloat(operand) * -parseFloat(number);

          console.log("acc*", acc);
          setOperand(acc.toString());
          return acc.toString();

        default:
          acc = "";
          setOperand(acc);
          return acc;
      }
    } else {
      console.log("he", newArr[newArr.length - 2]);
      switch (newArr[newArr.length - 1]) {
        case "+":
          acc = parseFloat(operand) + parseFloat(number);
          console.log("acc+", acc);
          setOperand(acc.toString());
          return acc.toString();

        case "-":
          acc = parseFloat(operand) - parseFloat(number);
          console.log("acc-", acc);
          setOperand(acc.toString());
          return acc.toString();

        case "/":
          acc = parseFloat(operand) / parseFloat(number);
          console.log("acc/", acc);
          setOperand(acc.toString());
          return acc.toString();

        case "*":
          acc = parseFloat(operand) * parseFloat(number);
          console.log("acc*", acc);
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
      // console.log("sign::", op);
      let acc: string = calculate();
      displayResultDispatch({ type: ActionKind.DisplayResult, payload: "C" });
      displayResultDispatch({
        type: ActionKind.DisplayResult,
        payload: acc.toString(),
      });
      setOperation([]);
    } else {
      // console.log("empty", number, operand);
    }

    displayRecordsDispatch({ type: ActionKind.DisplayRecords, payload: op });
    setOperation([...operation, op]);
    setNumber("");
  };

  const percentOnClick = () => {
    let percent: string = (parseInt(displayState) / 100).toString();
    displayResultDispatch({ type: ActionKind.DisplayResult, payload: "C" });
    displayResultDispatch({
      type: ActionKind.DisplayResult,
      payload: percent,
    });
    setNumber(percent);
  };

  const equalOnClick = () => {
    if (operand && number) {
      // console.log("eq", calculate());
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
        {/* <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.996 511.996">
            <path d="M349.85 62.196c-10.797-4.717-23.373.212-28.09 11.009-4.717 10.797.212 23.373 11.009 28.09 69.412 30.324 115.228 98.977 115.228 176.035 0 106.034-85.972 192-192 192-106.042 0-192-85.958-192-192 0-77.041 45.8-145.694 115.192-176.038 10.795-4.72 15.72-17.298 10.999-28.093-4.72-10.795-17.298-15.72-28.093-10.999C77.306 99.275 21.331 183.181 21.331 277.329c0 129.606 105.061 234.667 234.667 234.667 129.592 0 234.667-105.068 234.667-234.667 0-94.17-55.998-178.08-140.815-215.133z" />
            <path d="M255.989 234.667c11.782 0 21.333-9.551 21.333-21.333v-192C277.323 9.551 267.771 0 255.989 0c-11.782 0-21.333 9.551-21.333 21.333v192c0 11.782 9.551 21.334 21.333 21.334z" />
          </svg>
        </button> */}
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
