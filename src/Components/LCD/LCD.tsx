import "./LCD.scss";
import { useSelector } from "react-redux";

interface RootState {
  displayResult: string;
  displayRecords: string;
}

function LCD() {

  const displayResult = useSelector((state: RootState) => state.displayResult);
  const displayRecords = useSelector(
    (state: RootState) => state.displayRecords
  );

  return (
    <div id="display" className="LCD-wrap">
      <div className="records">{displayRecords}</div>
      <div className="result">{displayResult ? displayResult : "0" }</div>
    </div>
  );
}

export default LCD;
