

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const date=new Date
 const  today={
    day:days[date.getDay()],
    month:months[date.getMonth()],
    year:date.getFullYear(),
    numOfDay:date.getDate()
}


export async function myLocation(){
    const  resp=await fetch(`https://ipinfo.io/json?token=a5f26c53181287`)
    const myLocation=await resp.json()
    const city=myLocation.city
const dataOfWeather=await getApi(city)
    const ImageSrc=await getImage(city.toLowerCase())
    const data={dataOfWeather,ImageSrc}
    console.log(data);
    
    return data
}

export async function  getImage(x){
    if(x.includes(' ')){
       x= x.split(' ')
       x=x.join('-')
    }
    let  message=""
    const resp =await fetch(`https://api.unsplash.com/search/photos?query=${x}&client_id=nf2x3GdtpwV0rBKV2dNyyW5RfC8tVUNZ3BK3KFCAxuM`)
    const img=await resp.json()
    if(!resp.ok){
        message=`there is no data for city image`
        return message
    }
    else{
    const  imgSrc=img.results[0].urls.full
    return imgSrc
    }

    }


const baseUrl = 'http://api.weatherapi.com/v1'

export const getLocation= async(x) =>{

    try{
        const resp= await fetch(`${baseUrl}/search.json?key=4ce0d4a3be3b4122a4a235501231108&q=${x}`)
     if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
    const location =await resp.json()
    console.log(location);
    return location[0].name
    }catch(err){
        console.error('Error fetching location:', err);
        throw err;
    }
     
    

}



export const getApi =async(x) =>{
    console.log(x);
    try{
        const resp=await fetch(`${baseUrl}/forecast.json?key=4ce0d4a3be3b4122a4a235501231108&q=${x}&days=3`)
        if(!resp.ok){
            throw new Error('Network response was not ok')
        }
        const data=await resp.json()
        console.log(data);
        
    const city=data.location.name
    const ImageSrc=await getImage(city.toLowerCase())
    
    

    const dayCond ={
        temp:data.current.temp_c,
        text:data.current.condition.text,
        icon:data.current.condition.icon,
        windSpeed: data.current.wind_kph,
        windDirection:data.current.wind_dir,
        rainChance:data.forecast.forecastday[0].day.daily_chance_of_rain
    }
    let tomorrow= data.forecast.forecastday[1].date
    tomorrow=new Date(tomorrow)
    tomorrow=days[tomorrow.getDay()]
    
  
const tomCond= {
     hTemp:data.forecast.forecastday[1].day.maxtemp_c,
     mTemp:data.forecast.forecastday[1].day.mintemp_c,
     textTom:data.forecast.forecastday[1].day.condition.text,
     iconTom:data.forecast.forecastday[1].day.condition.icon
}
    let afterTomorrow=data.forecast.forecastday[2].date
    afterTomorrow=new Date(afterTomorrow)
    afterTomorrow=days[afterTomorrow.getDay()]
    
 const afTomCond={
     hTempAft:data.forecast.forecastday[2].day.maxtemp_c,
     mTempAft:data.forecast.forecastday[2].day.mintemp_c,
     textAft:data.forecast.forecastday[2].day.condition.text,
     iconAft:data.forecast.forecastday[2].day.condition.icon
 }

const  acquiredData={city,tomorrow,dayCond,tomCond,afTomCond,afterTomorrow,ImageSrc}
return acquiredData
    }
    catch(err){
        console.error('Error fetching location:', err);
        throw err
    }
    finally{
        console.log("every thing is done!");
        
    }
    
    
}
