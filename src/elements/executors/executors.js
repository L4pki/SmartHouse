import Color from './color/color.js';
import Door from './door/door.js';
import Fan from './fan/fan.js';
import Switch from './light_switch/switch.js';
import './executors.css';


function Executors() {
    return (
        <div className='container-executors'>
            <Fan />
            <Color />
            <Switch />
            <Door />
        </div>
    );
}

export default Executors;