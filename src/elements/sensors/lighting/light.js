import './light.css'
import { useState, useEffect } from 'react';

function Lighting() {
    const addr = "http://192.168.247.99";


    const [light, setLight] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            onClickEvent();

        }, 5000);

        // очистка интервала
        return () => clearInterval(timer);
    });

    async function onClickEvent() {
        try {

            const response = await fetch(`${addr}/illum`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLight(data.illum);
            console.log(data);
            //alert("Успешно");
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='light_section'>
            <h2>Свет</h2>
            <p>light = {light}</p>
        </div>
    );
}



export default Lighting;