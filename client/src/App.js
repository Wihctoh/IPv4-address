import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [ip, setIp] = useState("");

  async function requestServer() {
    const response = await axios.get("https://api.ipify.org/?format=json");
    setIp(response.data.ip);
  }

  useEffect(() => {
    requestServer();
  });

  return (
    <div className="App">
      <h1>{ip}</h1>
      <p>{ip} ( This is your IP address...probably :P )</p>
    </div>
  );
}

export default App;
