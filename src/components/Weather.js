import React from "react";


const Weather = (props) => {
	let icon;

	switch(props.description){
		case 'clear sky':
			icon = 'fas fa-sun';
		
		case 'scattered clouds':
			icon = 'fas fa-cloud'
			
		case 'broken clouds':
			icon = 'fas fa-cloud';
	
		case 'thunderstorm':
			icon = 'fas fa-tint';

	}
	console.log('props', props);
	if(props.completed)
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
				{ 
					props.error && <p className="weather__key">{props.error}</p>
				}	
			</div> 	
		);

	return (<div></div>)
}

export default Weather;