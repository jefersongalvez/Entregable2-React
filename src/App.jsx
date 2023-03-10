import axios from "axios"
import { useEffect, useState } from "react"
import Wheater from "./components/Wheater"
import './App.css'


function App() {

  const [coor, setCoor] = useState()
  const [wheater, setWheater] = useState()
  const [temper, setTemper] = useState(true)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const success = coord => {
      const obj = {
        lat: coord.coords.latitude,
        lon: coord.coords.longitude
      }
      setCoor(obj)
    }
    navigator.geolocation.getCurrentPosition(success)


  }, [])

  useEffect(() => {
    if (coor) {
      const api = `2e5885106d62b56c136b2381bfad9ea4`
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coor.lat}&lon=${coor.lon}&appid=${api}`
      axios.get(url)
        .then(res => setWheater(res.data))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

  }, [coor])

  const handleclick = () => {
    setTemper(!temper)


  }
  console.log(wheater)
  return (
    <div className="App">
      {loading ?
        <h1>LOADING ...</h1>
        :
        <Wheater wheater={wheater} temper={temper} handleclick={handleclick} />
      }

    </div>
  )
}

export default App
