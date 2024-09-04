
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate =useNavigate()

  useEffect(() => {
 
    const storedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setHistory(storedHistory);
  }, []);
  const clearHistory = () => {

    localStorage.removeItem('searchHistory');
    setHistory([])};

    const onCityClick =(city)=>{
      navigate('/',{state : {city}})

    }
  return(
    <div className="flex flex-col items-center justify-center space-y-4 mt-2">
      {history.length > 0 ? (
        history.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 w-3/4 text-center" 
          onClick={() => onCityClick(item.city)}>
            <h2 className="text-xl font-semibold mb-2">{item.city}</h2>
            <img src={item.imageUrl} alt={item.city} className="w-full h-32 object-cover mb-2" />
          </div>
        ))
      ) : (
        <p className="text-gray-500">No search history available.</p>
      )}
      {history.length > 0 && (
        <button
          onClick={clearHistory}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Clear History
        </button>
      )}
    </div>
  );
};

export default SearchHistory;
