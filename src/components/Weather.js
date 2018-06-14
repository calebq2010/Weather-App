import React from "react";


const Weather = (props) => {
	return (
		<div className = "weather__info">
			{ 
				props.city && props.country && <p className = "weather__key">Location: 
					<span className = "weather__value"> {props.country}, {props.city}</span>
				</p>
			}
			{ 
				props.temperature && <p className = "weather__key">Temperature: 
					<span className = "weather__value"> {props.temperature}</span>
				</p>
			}
			{ 
				props.humidity && <p className = "weather__key">Humidity: 
					<span className = "weather__value"> {props.humidity}</span>
				</p>
			}
			{ 
				props.description && <p className = "weather__key">Conditions: 
					<span className = "weather__value"> {props.description}</span>
				</p>
			}
			{
				props.description === "clear sky" && <p className = "weather__key bigfont">
					<span className = "weather__value"><i className="fas fa-sun "></i></span>
				</p>
			}
			{
				props.description === "scattered clouds" && <p className = "weather__key bigfont">
					<span className = "weather__value"><i className="fas fa-cloud"></i></span>
				</p>
			}
			{
				props.description === "broken clouds" && <p className = "weather__key bigfont">
					<span className = "weather__value"><i className="fas fa-cloud"></i></span>
				</p>
			}
			{
				props.description === "thunderstorm" && <p className = "weather__key bigfont">
					<span className = "weather__value"><i className="fas fa-tint"></i></span>
				</p>
			}
			{ 
				props.error && <p className = "weather__key">{props.error}</p>
			}	
		</div> 	
	);
}

export default Weather;