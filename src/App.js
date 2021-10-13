import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io(`http://localhost:8080/compile`, {
  autoConnect: false,
});

function App() {
  const [code, setCode] = useState();
  useEffect(() => {
    socket.open();
    socket.once("connect", () => {
      socket.on("unity", (data) => {
        console.log("::unity::", data);
        setCode(data);
      });
    });
  });
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>{code}</div>
    </div>
  );
}

export default App;
