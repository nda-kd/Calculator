import { ActionKind } from "../Actions/action";

type Action = {
  type: ActionKind;
  payload: any;
};

type state = {
  displayResult: string;
  displayRecords: string;
  operation: string[];
};

const initState: state = {
  displayResult: "",
  displayRecords: "",
  operation: [],
};

function reducer(state = initState, action: Action): state {
  const lastOpreatorIs = state.displayRecords.split(" ");

  switch (action.type) {
    case ActionKind.DisplayResult:
      if (action.payload === "C") {
        return {
          ...state,
          displayResult: "",
        };
      } else {
        const recordLength = lastOpreatorIs.length - 1;
        if (
          lastOpreatorIs[recordLength] === "-" ||
          lastOpreatorIs[recordLength] === "+" ||
          lastOpreatorIs[recordLength] === "/" ||
          lastOpreatorIs[recordLength] === "*"
        ) {
          return {
            ...state,
            displayResult: action.payload,
            displayRecords: state.displayRecords + " ",
          };
        } else {
          if (state.displayResult.includes(".") && action.payload === ".") {
            return {
              ...state,
              displayResult: state.displayResult,
            };
          } else {
            return {
              ...state,
              displayResult: state.displayResult + action.payload,
            };
          }
        }
      }

    case ActionKind.DisplayRecords:
      if (action.payload === "C") {
        return {
          ...state,
          displayRecords: "",
        };
      } else {
        if (
          (action.payload === "+" ||
            action.payload === "-" ||
            action.payload === "/" ||
            action.payload === "*") &&
          (state.displayResult === "0" || state.displayResult === "")
        ) {
          return {
            ...state,
            displayRecords: 0 + " " + action.payload,
          };
        } else {
          return {
            ...state,
            displayRecords: state.displayRecords + " " + action.payload,
          };
        }
      }

    case ActionKind.Operation:
      if (action.payload === "C") {
        return {
          ...state,
          operation: [],
        };
      } else {
        return {
          ...state,
          operation: [...state.operation, action.payload],
        };
      }

    default:
      return state;
  }
}

export default reducer;
