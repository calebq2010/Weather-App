import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ed882851547d8bc58bf411164c27d93d";

class App extends React.Component {

  state = {

    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    weatherfont: undefined,
    error: undefined,
    completed: undefined

  }

  //function that is going to use the weather API 
  getWeather = async (e) => {
    //this prevents the default behaivor to not reload page
    e.preventDefault();

    //these are the values from the two input fields for city and country
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //async call using the javascript fetch api to reach out and pull the data
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&APPID=${API_KEY}`);
    //converting to JSON format and assigning it to data variable 
    const data = await api_call.json(); 
    // checks to make sure users enters valid city and country values and if not will alert them to do so
    if(city && country) {
      console.log(data);

      //this pulls the data from the API we created on like 33
      this.setState({ 
        //rounds up the temp if it is a descimal value
        temperature: Math.round(data.main.temp),
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        weatherfont: data.cod,
        error: "",
        completed: true

      });

    }else{
      //this pulls the data from the API we created on like 33
      this.setState({ 

        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values!",
        completed: true
      });

    }
  }

  render (){
    return (
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                   <Form getWeather={this.getWeather} />

                    <Weather 
                    completed={this.state.completed}
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    weatherfont={this.state.weatherfont}
                    error={this.state.error}

                    />

                </div>
             </div>
           </div>
         </div>
       </div>
      </div>
    );
  }
};


export default App;