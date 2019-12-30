import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Widgets from 'fusioncharts/fusioncharts.widgets';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

// Create the JSON object to store the chart configurations
const chartConfigs = {
    type: 'angulargauge', // The gauge type
    width: '450', // Width of the gauge
    height: '250', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
    // Chart Configuration
      "chart": {
          "caption": "Nordstrom's Customer Satisfaction Score for 2017",
          "lowerLimit": "0",
          "upperLimit": "100",
          "showValue": "1",
          "numberSuffix": "%",
          "theme": "fusion",
          "showToolTip": "0"
      },
      // Chart Data
      "colorRange": {
          "color": [{
              "minValue": "0",
              "maxValue": "50",
              "code": "#F2726F"
          }, {
              "minValue": "50",
              "maxValue": "75",
              "code": "#FFC533"
          }, {
              "minValue": "75",
              "maxValue": "100",
              "code": "#62B58F"
          }]
      },
      "dials": {
          "dial": [{
              "value": "81"
          }]
      }
  }
};

class App extends Component {

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sample Fusion Charts Gauge React App</h1>
      </header>
      <ReactFC {...chartConfigs}/>
    </div>
  );
  }
}

export default App;
