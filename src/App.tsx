import "./App.css";
import Container from "./Components/container/Container";

function App() {
  return (
    <div className="App">
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "0",
        }}
      >
        <path
          fill="#eff3fa"
          d="M44.1,-76.5C58,-68.5,70.5,-58.2,77.7,-45.1C85,-32,86.9,-16,87.4,0.3C87.8,16.5,86.7,33,79.3,45.8C72,58.7,58.3,68,44,74.9C29.7,81.9,14.9,86.6,-0.4,87.2C-15.6,87.9,-31.2,84.4,-45.6,77.6C-60,70.7,-73.3,60.3,-81.9,46.8C-90.5,33.3,-94.4,16.6,-92.7,1C-91,-14.6,-83.5,-29.3,-74.9,-42.7C-66.3,-56.2,-56.5,-68.5,-43.8,-77.2C-31.1,-85.9,-15.6,-90.9,-0.2,-90.6C15.2,-90.2,30.3,-84.5,44.1,-76.5Z"
          transform="translate(100 100)"
        />
      </svg>
      <Container />
    </div>
  );
}

export default App;
