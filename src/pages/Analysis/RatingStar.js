import React, { Component } from 'react';
import Chart from './Component/Chart';

export class RatignStar extends Component {
 
    
  render() {
    const { nickname } = this.props;
    return (
      <div className="RatingStar">
        <div className="RatingStarInner">
          <div className="RatingLength">
          <h2>{nickname} 님이 평가한 영화들</h2>
          <div>
              <h2>104</h2>
              <p>영화</p>
          </div>
          </div>
          <div className="RatingDistribution">
            <h2>별점 분포</h2>
            <div>
              <Chart />
            </div>
          </div>
        </div>        
      </div>
    )
  }
}

export default RatignStar
