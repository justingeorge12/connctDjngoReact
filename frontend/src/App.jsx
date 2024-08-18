import { useEffect, useState } from "react"
import Carlist from "./components/Carlist"
import Loader from "./components/Loader"

function App() {

  const [car, setCar] = useState([])
  const [carName, setCarName] = useState('')
  const [releaseYear, setReleaseYear] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCar()
  }, [])

  const fetchCar = async () => {
    setLoading(true)
    try{
      const response = await fetch('http://127.0.0.1:8000/api/car/');
      const data = await response.json()
      setCar(data)
      setLoading(false)
    }
    catch(err){
      console.log(err)
      setLoading(false)
    }
  }


  const addCar = async () => {
    const carData = {
      carName : carName,
      release_year: releaseYear
    }
    try{ 
        const response = await fetch('http://127.0.0.1:8000/api/car/create/', {
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(carData)
        });

        const data = await response.json()
        setCar((prev) => [...prev, data])
        console.log(data)
      }
    catch(err){
      console.log(err)
    }
  }




  return (
    <>
    <div className="bg-black-100 h-12 flex justify-center">
      <h1 className="p-3 text-white text-2xl">Laxury Cars</h1>
    </div>

     <div className="h-screen items-center flex flex-col justify-center "> <br />
          <input onChange={(e) => setCarName(e.target.value)} className="border-black" type="text" placeholder="Car name" /> <br />
          <input onChange={(e) => setReleaseYear(e.target.value)} type="text" placeholder="release year" /><br />
          <p>{loading ? <Loader /> : ''} </p>
          <button onClick={addCar} className="bg-rose-600 text-white px-6"> Add car </button>
          {car.map((data) => (
            <Carlist key={data.id} data={data} />
          ))}
     </div>
    </>
  )
}

export default App
