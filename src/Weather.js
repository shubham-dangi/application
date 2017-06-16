import React, { Component } from 'react';
import './App.css';

class Weather extends Component 
{
  render() 
  {
  	var mapping = this.props.weather.map(function(data) 
  	{
			return(
					<tr><td>{data.dt_txt}</td><td>{data.main.temp}</td><td>{data.main.pressure}</td><td>{data.main.humidity}</td><td>{data.main.temp_min}</td><td>{data.main.temp_max}</td></tr>
				);
		}.bind(this));

    return (
   
      <div>
      {
        (this.props.tb == true)  //Checking for message status
          ? <div className="dd">  
          	<style>{"table,th,td{border:1px solid black;"}</style>
		      <table >
		      <tr>
		      <td><b>Date</b></td>
		      <td><b>Temperature</b></td>
		      <td><b>Pressure</b></td>
		      <td><b>Humidity</b></td>
		      <td><b>Minimum Temperature</b></td>
		      <td><b>Maximum Temperature</b></td>
		      </tr>
		      <tbody>
		      {mapping}
		      </tbody>
		      </table>

		    </div> 
          : <div></div> 
      } 
      </div>
    );
  }
}

export default Weather;
