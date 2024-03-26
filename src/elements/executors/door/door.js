import "./door.css";

function Door() {
  const addr = "http://192.168.247.99";
  var doorState = false;

  async function onClickEvent() {
    try {
      var button = document.getElementById("button_door");
      console.log("data");
      const response = await fetch(
        `${addr}/door?door=${!doorState ? "1" : "0"}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      doorState = data.door;
      button.innerText = doorState ? "ON" : "OFF";
      button.classList.toggle("on", doorState);
      console.log(data);
      //alert("Успешно");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="door">
      <h1>Дверь</h1>
      <button
        className="button"
        id="button_door"
        type="button"
        onClick={() => onClickEvent()}
      >
        ON
      </button>
    </div>
  );
}

export default Door;
