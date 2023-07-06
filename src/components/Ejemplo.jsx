import axios from "axios"
import { useState, useEffect } from "react"
const City = () => {

    let latitude
    let longitude
    const [ city, setCity ] = useState({})
    
    
    
    useEffect(() =>{
                navigator.geolocation.getCurrentPosition(position => {
                     latitude = position.coords.latitude
                     longitude = position.coords.longitude
                     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=69b4289ef8cc5d720923a84d432f017b&units=metric&lang=sp, es`
                     console.log(url)
                     
                        axios
                        .get(url)
                        //.get('https://api.openweathermap.org/data/2.5/weather?lat=4.1549824&lon=-74.8879872&appid=69b4289ef8cc5d720923a84d432f017b&units=metric')
                        .then(resp => {
                            setCity(resp.data)
                            console.log(resp.data)
                            
                        })
                        .catch( error => console.error(error))
                    })

            }, [])
    let img = `https://openweathermap.org/img/wn/${city.weather?.[0].icon}@2x.png`
    return(
        
        <section className="container">
         
         <div className="container-clima">
            <div className="container-clima_temp">                
                <img className="container-icon" src={`${img}`} alt="" />
                <h2> {Math.round(city.main?.temp)}°C</h2>
            </div>
            <div className="container-clima_viento">
                <h2>Viento:{city.wind?.speed} m/s</h2>
                <h2>Nubes:{city.clouds?.all}%</h2>
                <h2>Presión:{city.main?.pressure}</h2>
            </div>
            
            <div className="container-city">
                <h2>{city.name},{city.sys?.country}</h2>
                <h2>{city.weather?.[0].description}</h2>
            </div>
                       
         </div>
            
           
            
        </section>
    )
}

export default City