import "./humid.css";
import { useState, useEffect } from "react";

function Humid() {
  const addr = "http://192.168.247.99";

  const [humid, setHumid] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      onClickEvent();
    }, 5000);

    // очистка интервала
    return () => clearInterval(timer);
  });

  async function onClickEvent() {
    try {
      const response = await fetch(`${addr}/humid`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setHumid(data.humid);
      console.log(data);
      //alert("Успешно");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="humid_section">
      <h2>Влажность</h2>
      <p>humid = {humid}</p>
    </div>
  );
}

export default Humid;
