var React = require("react");

var CountryDisplay = React.createClass({

  render: function() {


    return(
      <div>
        <h4>Name: {this.props.country.name} </h4>
        <p> Population: {this.props.country.population}</p>
      
      </div>
    )
  }

})

module.exports = CountryDisplay;
