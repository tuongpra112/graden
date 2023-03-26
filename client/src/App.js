import React, { useEffect, useState } from "react";
import classes from "./App.css";
import LatestMessage from "./components/LatestMessage";
import axios from "axios";
import NavBar from "./components/navbar";
import Control from "./components/control";
import images from "./assets/images";
import Graph from "./components/graph";
// we are using a simple polling mechanism to fetch the latest message every 5 seconds
// A better approach would be to use a real-time communication protocol like WebSockets
// to receive updates from the server as soon as they happen.
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const intervalID = setInterval(() => {
      axios
        .get("/latest-message")
        .then(response => setMessage(response.data.message))
        .catch(error => console.log(error));
    }, 5000);
    return () => clearInterval(intervalID);
  }, []);

  let arr = [
    {
      img: images.temp,
      name: "Nhiệt độ",
      num: message.pump,
    },
    {
      img: images.humid,
      name: "Độ ẩm",
      num: message.air_temperature,
    },
    {
      img: images.light,
      name: "Ánh sáng",
      num: message.air_humid,
    },
    {
      img: images.user,
      name: "User",
      num: message.soil_moisture,
    },
  ];

  const arr_graph = ["NHIỆT ĐỘ", "ĐỘ ẨM", "ÁNH SÁNG"];
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <div>
        <div>
          <h1>WELLCOME TO GREEN GARDEN!</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80vw",
          }}
        >
          {arr.map(data => (
            <Control image={data.img} num={data.num} name={data.name} />
          ))}
        </div>
        <div style={{ display: "flex", marginTop: "5rem" }}>
          <div
            style={{
              width: "50vw",
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={images.humid}></img>
          </div>
          <div className={classes.style}>
            {arr_graph.map(data => (
              <Graph name={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
