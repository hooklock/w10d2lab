var React = require("react");
var CountriesSelector = require("./CountriesSelector.jsx");
var CountryDisplay = require("./CountryDisplay.jsx");

var CountriesBox = React.createClass({

  getInitialState: function(){
    return {countries: [], displayCountry: null}
  },

  setDisplayCountry: function(country){
    this.setState({displayCountry: country});
  },

  componentDidMount: function(){
    console.log("CDM was called");
    var url = "https://restcountries.eu/rest/v1/all";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      var data = JSON.parse(request.responseText);
      this.setState({countries: data});
    }.bind(this)
    request.send();
  },

  render: function(){
    var displayElement = <h4>No Country Selected</h4>
    if(this.state.displayCountry){
      displayElement = <CountryDisplay country={this.state.displayCountry}/>
  }
    return(
      <div>
        <h4>Countries Box</h4>
      <CountriesSelector
       countries={this.state.countries}
       onSelectCountry={this.setDisplayCountry}/>
     {displayElement}
      </div>
    )
  }
})

module.exports = CountriesBox
