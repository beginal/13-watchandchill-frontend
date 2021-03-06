import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { GoBack } from '../../components/Buttons';
import './People.scss';

export class People extends Component {
  constructor() {
    super();
    this.state = {
      actor: "",
      films: []
    }
  }

  componentDidMount() {
    this.props.hidden(true);
    fetch('http://localhost:3000/Data/people.json')
    .then(res => res.json())
    .then(res => this.setState({
      actor: res.actor,
      films: res.films,
    }))
    this.props.hidden(true);
  }


  goBack = () => {
    this.props.history.goBack();
  }
  
  render() {
    const { actor, films } = this.state;
    return (
      <div className="People">
        <div>
          <div className="Header">
          <div className="GoBack">
            <GoBack onClick={this.goBack} />
          </div>
          <h2>
            {actor}
          </h2>
          </div>
          <ul>
          {films.map(({title, poster}) => 
            <li>
            <img src={poster} alt={title} />
            <span>{title.length > 6 ? title.slice(0,7) + '...' : title}</span>
            </li>
            )}
            </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(People);
