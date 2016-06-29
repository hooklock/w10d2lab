var React = require("react");

var CountryBorders = React.createClass({

  render: function(){

    var borderItems = this.props.borders.map(function(border){
      return(
        <div key={border.alpha3Code}>
          <h4> {border.name} </h4>
          <p>Capital: {border.capital}</p>
          <p>Population: {border.population}</p>

        </div>
      )
    })

    return (
      <div>
        <h4>Bordering Countries</h4>
        {borderItems}
      </div>
    )
  }
})

module.exports=CountryBorders;
