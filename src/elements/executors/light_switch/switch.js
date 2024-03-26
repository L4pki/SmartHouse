import "./switch.css";

function Light() {
  const addr = "http://192.168.247.99";
  var lightState = false;

  async function onClickEvent() {
    try {
      var button = document.getElementById("button_light");
      console.log("data");
      const response = await fetch(
        `${addr}/light?light=${!lightState ? "1" : "0"}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      lightState = data.light;
      button.innerText = lightState ? "ON" : "OFF";
      button.classList.toggle("on", lightState);
      console.log(data);
      //alert("Успешно");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="light">
      <h1>Свет</h1>
      <button
        className="button"
        id="button_light"
        type="button"
        onClick={() => onClickEvent()}
      >
        ON
      </button>
    </div>
  );
}

export default Light;
