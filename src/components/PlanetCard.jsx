import React from 'react';
import PropTypes from 'prop-types';
import './SolarSystem.style.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const alt = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planet">
        <span class="tooltiptext">{planetName}</span>
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ alt } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
