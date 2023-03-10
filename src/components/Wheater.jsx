import React from 'react'

const Wheater = ({ wheater, temper, handleclick }) => {


    return (
        <article className='Art'>
            <div className='Init'>

                <h1 className='Title'><b>Wheater App</b></h1>
                <h2 className='Subtitle'>{wheater?.name} , {wheater?.sys.country}</h2>

            </div>
            <div className='bod'>
                <div className='Imagen'>

                    <img src={`http://openweathermap.org/img/wn/${wheater?.weather[0].icon}@4x.png`} />
                </div>
                <div className='Datos'>
                    <h2 className='Subsubtitle'>{wheater?.weather[0].description}</h2>
                    <ul className='Lista'>
                        <li className='Li'><span>Wind speed:</span> <b>{wheater?.wind.speed}m/s</b></li>
                        <li className='Li'><span>Clouds:</span> <b>{wheater?.clouds.all}%</b></li>
                        <li className='Li'><span>Pressure:</span><b>{wheater?.main.pressure}hPa</b> </li>
                    </ul>

                </div>
            </div>

            <footer className='Footer'>
                {temper ?
                    <h3 className='temp'><b>{(wheater?.main.temp - 273.15).toFixed(1)} °C</b> </h3>
                    :
                    <h3 className='temp'><b>{(((wheater?.main.temp - 273.15) * (9 / 5)) + 32).toFixed(1)} °F</b></h3>

                }
                <button className='Btn' onClick={handleclick}>
                    {temper ?
                        <h3>convertir a °F</h3>
                        :
                        <h3>convertir a °C</h3>
                    }</button>
            </footer>

        </article >

    )
}

export default Wheater