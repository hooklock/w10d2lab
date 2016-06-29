var React = require("react");
var CountryBorders = require("./CountryBorders.jsx")

var CountryDisplay = React.createClass({

  // getInitialState: function(){
  //   return {borders: []}
  // },

  render: function() {

    // var borderList = this.props.country.borders.map(function(shortcode){
    //   console.log(country);
    //   return (<p key={country.alpha2Code}>{shortcode}</p>);
    // })


    return(
      <div>
        <h4>{this.props.country.name} </h4>
        <p>Capital: {this.props.country.capital}</p>
        <p>Population: {this.props.country.population}</p>
        <p>Area: {this.props.country.area}km&sup2;</p>
      <CountryBorders borders={this.props.borderingCountries}/>
      </div>
    )
  }

})

module.exports = CountryDisplay;
