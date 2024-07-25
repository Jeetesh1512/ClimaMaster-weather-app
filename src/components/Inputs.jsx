import { useState } from "react";
import {BiSearch, BiCurrentLocation} from "react-icons/bi";

const Inputs = ({setQuery,setUnits}) => {
  const [city,setCity] = useState('')

  const handleSearchClick = ()=>{
    if(city!=="") setQuery({q:city});
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };


  const handleLocation = () =>
  {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        const {latitude,longitude} = position.coords
        setQuery({lat:latitude, lon:longitude})
      })
    }
  }


  return (
    <div className='flex flex-row justify-center'>
        <div className="flex flex-row w-3/4 items-center justify-center my-6">
            <input
            value={city}
            onChange={(e)=>setCity(e.currentTarget.value)}
            type="text" placeholder="search city..." className="text-gray-700 text-xl p-2 w-full shadow-xl h-11 capitalize focus:outline-none rounded-md"/>
            <BiSearch type="submit" size={35} className="cursor-pointer transition ease-out hover:scale-125 ml-2 " onClick={handleSearchClick} />
            <BiCurrentLocation size={35} className="cursor-pointer transition ease-out hover:scale-125 ml-2 mr-2" onClick={handleLocation} onKeyDown={handleKeyPress} tabIndex={0}/>

            <div className="flex flex-row w-1/4 items-center justify-center">
                <button className="text-2xl  font-medium transition ease-out hover:scale-125"
                onClick={()=>setUnits("metric")}>
                °C
                </button>
                <p className="text-2xl font-medium mx-1">|</p>
                <button className="text-2xl font-medium transition ease-out hover:scale-125" onClick={()=>setUnits("imperial")}>
                °F
                </button>
            </div>
        </div> 
      
    </div>
  )
}

export default Inputs
