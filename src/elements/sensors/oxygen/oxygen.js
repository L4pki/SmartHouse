import './oxygen.css'
import { useState, useEffect } from 'react';

function O2() {
    const addr = "http://192.168.247.99";


    const [oxygen, setOxygen] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            onClickEvent();

        }, 5000);

        // очистка интервала
        return () => clearInterval(timer);
    });

    async function onClickEvent() {
        try {

            const response = await fetch(`${addr}/oxygen`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOxygen(data.oxygen);
            console.log(data);
            //alert("Успешно");
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='oxygen_section'>
            <h2>Кислород</h2>
            <p>oxygen = {oxygen}</p>
        </div>
    );
}



export default O2;