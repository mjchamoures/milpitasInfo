import React from 'react';
import './styles/HomeView.scss';
import TopStories from './TopStories'
import { Col, Panel } from 'react-bootstrap';
import DuckImage from '../assets/Duck.png';
import SwimImage from '../assets/Swim.png';

class HomeView extends React.Component {

  render() {

    // this will have a prop of currentSelectedProject...it should map to display selected component and pass it's info on down the children
    // will render a ProjectDescription component and ProjectDemo component
    return (
      <Col xs={12}>
        <Panel className="home-container">
          <Col sm={12} md={6}>
            <TopStories 
              headerTitle={"Top Milpitas Stories"}
              stories={stories}
            />
          </Col>
          <Col sm={12} md={6}>
            <TopStories 
              headerTitle={"Featured Businesses"}
              stories={stories}
            />
          </Col>
        </Panel>
      </Col>
    );
  }
}

export default HomeView;

// need to get these from the store instead or something, or some service call, if it's going to become dynamic
let stories = [
  {   
      imageId : 1,
      image : DuckImage,
      imageCaption : "Milpitas High School Principal Phil Morales.",
      title : "Milpitas High School principal announces his resignation",
      author: "ALIYAH MOHAMMED",
      date  : "Apr 05, 2017",
      likes : 0,
      comments : 0,
      intro : "Citing unspecified personal and professional reasons, Milpitas High School Principal Phil Morales today announced he is resigning his post."
  },
  {   
      imageId : 2,
      image : SwimImage,
      imageCaption : "",
      title : "MHS swimmers sink Santa Clara",
      author: "",
      date  : "Apr 03, 2017",
      likes : 0,
      comments : 0,
      intro : "With a 135-35 win over visiting Santa Clara on March 24, the Milpitas High boys varsity swim team improved to 3-0 on the season."
  },
  {   
      imageId : 3,
      image : null,
      imageCaption : "",
      title : "City to equip 84 cops with body-worn cameras",
      author: "",
      date  : "",
      likes : 0,
      comments : 0,
      intro : ""
  }
  
]
