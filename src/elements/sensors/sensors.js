import Temperature from "./temperature/temp.js";
import Lighting from "./lighting/light.js";
import O2 from "./oxygen/oxygen.js";
import Water from "./waterlevel/waterlevel.js";
import "./sensors.css";




function Sensor() {



    return (
        <section className="container-sensors">
            <Lighting />
            <O2 />
            <Temperature />
            <Water />
        </section>
    );

}



export default Sensor;
/*{props.type === "temp" &&
<button type="button" className="sensor__button" onClick={onClickEvent}>Send</button>
}*/

