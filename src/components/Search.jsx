
import  { Component } from 'react';
import withRouter from './withRouter'; 
import { getApi } from '../API/FetchingAPIs';
import WeatherData from './WeatherData';
import background from '../assets/background.jpg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      error: null,
      city: this.props.location.state?.city || '',
    };
  }

  componentDidMount() {
    const { city } = this.state;
    if (city) {
      this.handleSubmit(); // Trigger search if city is provided
    }
  }

  handleSubmit = async () => {
    const { city } = this.state;
    try {
      const searched = await getApi(city);
      this.setState({ weather: searched, error: null });
      const cityData = {
        city: searched.city,
        imageUrl: searched.ImageSrc,
      };
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
      searchHistory.push(cityData);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (err) {
      this.setState({ error: 'City not found or network error', weather: null });
      console.log('error ya basha');
    } finally {
      console.log('all is good');
    }
  };

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    this.handleSubmit();
  };

  render() {
    const { weather, error, city } = this.state;

    return (
        <div
        className="flex flex-col items-center justify-center  h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className=" py-5 font-bold text-2xl sm:text-5xl text-center">Which city are you looking for?</h1>
        <form
          onSubmit={this.handleSubmitForm}
          className="sm:w-full max-w-md bg-gray-200/40 sm:p-6 sm:mb-2 rounded-md mx-4 sm:mx-1 sm:mx-auto"
        >
          <div className="mb-4">
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={this.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white text-black placeholder-gray-500"
            />
            {error && <div className="my-3 text-red-500">{error}</div>}
          </div>
          <div className="flex flex-col items-center justify-center">
            <button
              className="w-full sm:w-1/4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>

        {weather && <WeatherData weatherData={weather} />}
      </div>
    );
  }
}

export default withRouter(Search);