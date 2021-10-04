import { ActionKind } from "../Actions/action";

type state = {
  displayResult: string;
  displayRecords: string;
  operation: string;
};

type Action = {
  type: ActionKind;
  payload: any;
};

const initState: state = {
  displayResult: "",
  displayRecords: "",
  operation: "",
};

function reducer(state = initState, action: Action): state {
  const opreatorIs = state.displayRecords.split(" ");

  switch (action.type) {
    case ActionKind.DisplayResult:
      if (action.payload === "C") {
        return {
          ...state,
          displayResult: "",
        };
      } else {
        const recordLength = opreatorIs.length - 1;
        if (
          opreatorIs[recordLength] === "-" ||
          opreatorIs[recordLength] === "+" ||
          opreatorIs[recordLength] === "/" ||
          opreatorIs[recordLength] === "*"
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

    // case ActionKind.Operation:
    //   if(action.payload === "+"){

    //   }
    //   return {
    //     ...state,
    //     operation: action.payload
    //   }

    default:
      return state;
  }
}

export default reducer;
