import React from "react";


const Weather = (props) => {
	let icon;

//	switch(props.description){
//		case 'clear sky':
//			icon = 'fas fa-sun';
//			/* falls through */
//		case 'scattered clouds':
//			icon = 'fas fa-cloud'
//			/* falls through */
//		case 'broken clouds':
//			icon = 'fas fa-cloud';
//			/* falls through */
//		case 'thunderstorm':
//			icon = 'fas fa-tint';
//			/* falls through */
//	}

	if(props.description == "clear sky"){
		icon = 'fas fa-sun';
	}else if(props.description == "scattered clouds"){
		icon = 'fas fa-cloud';
	}else if(props.description == "broken clouds"){
		icon = 'fas fa-cloud'
	}else if(props.description == "thunderstorm"){
		icon = 'fas fa-tint';
	}else if(props.description == "few clouds"){
		icon = 'fas fa-cloud';
	}else if(props.description == "shower rain"){
		icon = 'fas fa-tint';
	}else if(props.description == "rain"){
		icon = 'fas fa-tint';
	}else if(props.description == "snow"){
		icon = 'fas fa-snowflake';
	}else if(props.description == "mist"){
		icon = 'fas fa-snowflake';
	}

	if(props.completed === true)
		return (
			<div className="weather__info">

				<p className="weather__key">Location: 
					<span className="weather__value"> {props.country}, {props.city}</span>
				</p>
				<p className="weather__key">Temperature: 
					<span className="weather__value"> {props.temperature}</span>
				</p>
				<p className="weather__key">Humidity: 
					<span className="weather__value"> {props.humidity}</span>
				</p>
				<p className="weather__key">Conditions: 
					<span className="weather__value"> {props.description}</span>
				</p>
					
				<p className="weather__key bigfont">
					<span className="weather__value"><i className={icon}></i></span>
				</p>	
			</div> 	
		);

	if(props.completed === false)
		return (
			<div className = "weather__info">
				{ 
					props.error && <p className="weather__key">{props.error}</p>
				}	
			</div>
	);

	return (<div></div>)
}

export default Weather;