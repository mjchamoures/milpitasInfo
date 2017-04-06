import React from 'react';
import './styles/TopStories.scss';
import { Col, Panel, Image, Media } from 'react-bootstrap';


class Story extends React.Component {

  render() {

    
    let story = null;

    return (
      
        <Panel>
          
          <Media>
          
            <Col xs={6} sm={4} md={4}>
              <Image
                responsive
                src={this.props.story.image} 
              />
            </Col>

            <Media.Body>
              <Media.Heading>{this.props.story.title}</Media.Heading>
              <p>{this.props.story.intro}</p>
            </Media.Body>

          </Media>
           
      </Panel>  
      
    );
  }
}

export default Story


