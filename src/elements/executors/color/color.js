import "./color.css";

function Color() {
  const addr = "http://192.168.247.99";

  async function onClickEvent() {
    try {
      var colorState = document.getElementById("color-lamp");
      console.log(colorState.value);
      const response = await fetch(`${addr}/color?color=${colorState.value}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      /*const data = await response.json();
      colorState = data.color;
      console.log(data);*/
      //alert("Успешно");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="color">
      <h1>Цвет</h1>
      <div className="SendColor">
        <input id="color-lamp" type="color" className="color_lamp"></input>
        <button className="Button_Send_Color" onClick={() => onClickEvent()}>
          Отправить цвет
        </button>
      </div>
    </div>
  );
}

export default Color;

//<input id="lamp-color" type="color" name="lampColor" value="#e0e0e0"></input>

//<input id="lamp-color" type="color" name="lampColor" value="#e0e0e0">
