import React from 'react';
import './styles/TopStories.scss';
import { Col, Panel } from 'react-bootstrap';


class Story extends React.Component {

  render() {

    // this will have a prop of currentSelectedProject...it should map to display selected component and pass it's info on down the children
    // will render a ProjectDescription component and ProjectDemo component
    return (
      <Panel>
          <Col xs={12}>
            Hey
          </Col>

          <Col xs={12}>
            You
          </Col>
      </Panel>  
    );
  }
}

export default Story
