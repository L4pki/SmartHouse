import "./temp.css";
import { useState, useEffect } from "react";

function Temperature() {
  const addr = "http://192.168.247.99";

  const [temperature, setTemp] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      onClickEvent();
    }, 5000);

    // очистка интервала
    return () => clearInterval(timer);
  });

  async function onClickEvent() {
    try {
      const response = await fetch(`${addr}/temp`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTemp(data.temp);

      console.log(data);
      //alert("Успешно");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="temp_section">
      <h2>Температура</h2>
      <p>temperature = {temperature}</p>
    </div>
  );
}

export default Temperature;
