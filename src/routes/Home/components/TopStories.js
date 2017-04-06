import React from 'react';
import './styles/TopStories.scss';
import { Col, Panel } from 'react-bootstrap';
import Story from './Story';

class TopStories extends React.Component {

  render() {

    // this will have a prop of currentSelectedProject...it should map to display selected component and pass it's info on down the children
    // will render a ProjectDescription component and ProjectDemo component
    return (
      <Panel header="Top Milpitas Stories">
          <Col xs={12}>
            <Story />
          </Col>
          <Col xs={12}>
            <Story />
          </Col>
          <Col xs={12}>
            <Story />
          </Col>
          <Col xs={12}>
            <Story />
          </Col>
      </Panel>  
    );
  }
}

export default TopStories
