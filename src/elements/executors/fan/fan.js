import './fan.css'



function Fan() {
    const addr = "http://192.168.247.99";
    var fanState = false;

    async function onClickEvent() {
        try {
            
            var button = document.getElementById('button_fan');
            console.log('data');
            const response = await fetch(`${addr}/fan?fan=${(!fanState ? '1' : '0')}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            fanState = data.fan;
            button.innerText = (fanState ? 'ON' : 'OFF');
            button.classList.toggle('on', fanState);
            console.log(data);
            //alert("Успешно");
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Вентилятор</h1>
            <button className='button' id='button_fan' type='button' onClick={() => onClickEvent()}>ON</button>
        </div>
    );
}

export default Fan;