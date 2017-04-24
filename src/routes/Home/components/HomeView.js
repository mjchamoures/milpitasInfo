import React from 'react';
import TopStories from './TopStories';
import FeaturedBusinesses from './FeaturedBusinesses';

import './styles/HomeView.css';
import { Col, Panel } from 'react-bootstrap';
import DuckImage from '../assets/Duck.png';
import SwimImage from '../assets/Swim.png';
import DebbieImage from '../assets/Debbie.png';
import AcupunctureImage from '../assets/acupuncture.png';
import PrincipalImage from '../assets/Principal.png';
import MassageImage from '../assets/massage.png';

class HomeView extends React.Component {

  render() {

    // this will have a prop of currentSelectedProject...it should map to display selected component and pass it's info on down the children
    // will render a ProjectDescription component and ProjectDemo component
    return (
      <Col xs={12} className={'pad0'}>
        <Panel className="home-container" >
          <Col sm={12} md={7} className={'pad5'}>
            <TopStories 
              headerTitle={"Top Milpitas Stories"}
              stories={stories}
            />
          </Col>
          <Col sm={12} md={5} className={'pad5'}>
            <FeaturedBusinesses 
              headerTitle={"Featured Businesses"}
              businesses={businesses}
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
      image : PrincipalImage,
      imageCaption : "Milpitas High School Principal Phil Morales.",
      storyId : 1,
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
      storyId : 2,
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
      storyId : 3,
      title : "City to equip 84 cops with body-worn cameras",
      author: "",
      date  : "",
      likes : 0,
      comments : 0,
      intro : ""
  }
  
];

let businesses = [
  {   
      imageId : 1,
      image : DebbieImage,
      businessId : 1,
      businessName : "Debbie Giordano, Owner, Master Brokers- Milpitas, CA.- Realtor, Buy or Sell Your Home",
      businessLink : 'http://google.com',
      address : {
        street : "",
        city : "",
        state : "",
        zip : ""
      },
      phoneNumber : "+1 408 424 4160",
      intro : "Debbie Giordano a Master Brokers Real Estate specialist is here serving the Milpitas community to help you buy or sell your home. Watch our talk show on Milpitas local channel 26. We offer a truck ."
  },
  {   
      imageId : 2,
      image : AcupunctureImage,
      businessId : 2,
      businessName : "Natural Health Center Milpitas Ca- Acupuncture, Chiropractic, Back Pain, Headaches, Massage",
      businessLink : 'http://google.com',
      address : {
        street : "1916 Grand Teton Dr",
        city : "Milpitas",
        state : "CA",
        zip : "95035"
      },
      phoneNumber : "",
      intro : "Natural Health Center is a multi-treatment center specializing in acupuncture, chiropractic, and massage . We treat many problems relating to auto, work and personal injury including, whiplash, low..."
  },
  {   
      imageId : 3,
      image : MassageImage,
      businessId : 3,
      businessName : "A-Care Acupuncture & Health Center Milpitas CA- Massage Reflexology",
      businessLink : 'http://google.com',
      address : {
        street : "155 N maccarthy blvdr",
        city : "Milpitas",
        state : "CA",
        zip : "95035"
      },
      phoneNumber : "+1 408 424 4160",
      intro : "A-Care Acupuncture & Health Center offers pain management, acupuncture and acupressure, massage therapy, foot reflexotherapy, and we help with difficult medical conditions. We gladly accept auto ac..."
  }
  
]
