export enum ActionKind {
  DisplayResult = "DISPLAY_RESULT",
  DisplayRecords = "DISPALY_RECORDS",
  Operation = "OPERATION_SET",
}

type Action = {
  type: ActionKind;
  payload: any;
};

export const displayChange = (displayResult: string): Action => ({
  type: ActionKind.DisplayResult,
  payload: displayResult,
});

export const displayRecordsShow = (displayRecords: string): Action => ({
  type: ActionKind.DisplayRecords,
  payload: displayRecords,
});

export const operationSet = (operation: string): Action => ({
  type: ActionKind.Operation,
  payload: operation,
});
