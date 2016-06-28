var React = require("react");

var CountryDisplay = React.createClass({

  render: function() {


    return(
      <div>
        <h4>Name: {this.props.country.name} </h4>
        <p>Capital: {this.props.country.capital}</p>
        <p> Population: {this.props.country.population}</p>
        <p> Area: {this.props.country.area}km&sup2;</p>

      </div>
    )
  }

})

module.exports = CountryDisplay;
