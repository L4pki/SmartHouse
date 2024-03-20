import './waterlevel.css'
import { useState, useEffect } from 'react';

function Water() {
    const addr = "http://192.168.247.99";


    const [waterlevel, setWater] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            onClickEvent();

        }, 5000);

        // очистка интервала
        return () => clearInterval(timer);
    });

    async function onClickEvent() {
        try {

            const response = await fetch(`${addr}/waterlevel`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWater(data.waterlevel);
            console.log(data);
            //alert("Успешно");
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='waterlevel_section'>
            <h2>Затопленость</h2>
            <p>waterlevel = {waterlevel}</p>
        </div>
    );
}



export default Water;