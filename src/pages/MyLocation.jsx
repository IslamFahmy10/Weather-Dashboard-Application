import { useEffect,useState } from "react";
import { myLocation } from "../API/FetchingAPIs";

const MyLocation = () => {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        // Define an async function inside useEffect
        const fetchData = async () => {
          try {
            const data = await myLocation();
            setWeatherData(data);
          } catch (error) {
            console.error("Error fetching location data:", error);
          }
        };
    
        fetchData(); 
      }, []); 

      if (!weatherData) {
    return <div>Loading...</div>; 
    }

   


    const { dataOfWeather, ImageSrc } = weatherData;
    const { city, tomorrow, dayCond, tomCond, afTomCond, afterTomorrow } = dataOfWeather
  return (
    <div className="p-5 h-screen bg-gray-100   flex flex-col items-center bg-cover bg-center" style={{backgroundImage:`url(${ImageSrc})`}}>
        
        <h1 className="text-4xl font-bold mb-6">{city}</h1>
        <div className="flex space-x-4"> 
        
  
          <div className="bg-white shadow-lg rounded-lg p-4 w-60 text-center">
            <h2 className="text-xl font-semibold mb-2">Today</h2>
            <img src={dayCond.icon} alt={dayCond.text} className="w-16 mx-auto mb-2" />
            <p className="text-lg font-medium">{dayCond.text}</p>
            <p className="text-gray-600">Temp: {dayCond.temp}°C</p>
            <p className="text-gray-600">Wind: {dayCond.windSpeed} km/h {dayCond.windDirection}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 w-60 text-center">
            <h2 className="text-xl font-semibold mb-2">{tomorrow}</h2>
            <img src={tomCond.iconTom} alt={tomCond.textTom} className="w-16 mx-auto mb-2" />
            <p className="text-lg font-medium">{tomCond.textTom}</p>
            <p className="text-gray-600">High: {tomCond.hTemp}°C</p>
            <p className="text-gray-600">Low: {tomCond.mTemp}°C</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-4 w-60 text-center">
            <h2 className="text-xl font-semibold mb-2">{afterTomorrow}</h2>
            <img src={afTomCond.iconAft} alt={afTomCond.textAft} className="w-16 mx-auto mb-2" />
            <p className="text-lg font-medium">{afTomCond.textAft}</p>
            <p className="text-gray-600">High: {afTomCond.hTempAft}°C</p>
            <p className="text-gray-600">Low: {afTomCond.mTempAft}°C</p>
          </div>
        </div>
      </div> 
    );
 
}

export default MyLocation