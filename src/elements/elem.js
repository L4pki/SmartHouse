import './elem.css';
import Sensors from './sensors/sensors.js';
import Executors from './executors/executors.js';

function Elements(){
    return (
        <div className='container-elements'>
            <Sensors />
            <Executors />
        </div>
    );
}

export default Elements;