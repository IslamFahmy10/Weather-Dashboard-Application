



const WeatherData =  (props) => {
    const { city, tomorrow, dayCond, tomCond, afTomCond, afterTomorrow ,ImageSrc } = props.weatherData;


    return (
<div
      className=" sm:p-6  p-3 w-full max-w-screen-lg mx-auto bg-gray-100 mt-1 rounded-lg flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ImageSrc})` }}
    >
      <h1 className="bg-slate-950/50 text-white w-full text-center text-3xl sm:text-4xl font-bold mb:3 sm:mb-6 p-2 sm:p-4 rounded-t-lg">
        {city}
      </h1>
      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-4">
        <div className="bg-white shadow-lg rounded-lg sm:p-4 p-2 flex-1 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Today</h2>
          <img src={dayCond.icon} alt={dayCond.text} className="w-10 sm:w-16 mx-auto mb-2" />
          <p className="text-sm sm:text-lg font-normal">{dayCond.text}</p>
          <p className="text-gray-600 text-sm sm:text-base">Temp: {dayCond.temp}°C</p>
          <p className="text-gray-600 text-sm sm:text-base">Wind: {dayCond.windSpeed} km/h {dayCond.windDirection}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg sm:p-4 p-2  flex-1 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{tomorrow}</h2>
          <img src={tomCond.iconTom} alt={tomCond.textTom} className="w-10 sm:w-16 mx-auto mb-2" />
          <p className="text-sm sm:text-lg font-normal">{tomCond.textTom}</p>
          <p className="text-gray-600 text-sm sm:text-base">High: {tomCond.hTemp}°C</p>
          <p className="text-gray-600 text-sm sm:text-base">Low: {tomCond.mTemp}°C</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg sm:p-4 p-2  flex-1 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{afterTomorrow}</h2>
          <img src={afTomCond.iconAft} alt={afTomCond.textAft} className="w-10 sm:w-16 mx-auto mb-2" />
          <p className="text-sm sm:text-lg font-normal">{afTomCond.textAft}</p>
          <p className="text-gray-600 text-sm sm:text-base">High: {afTomCond.hTempAft}°C</p>
          <p className="text-gray-600 text-sm sm:text-base">Low: {afTomCond.mTempAft}°C</p>
        </div>
      </div>
    </div>
    );
  };
  

export default WeatherData