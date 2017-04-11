import React from 'react';
import './styles/TopStories.css';
import './styles/Story.css';
import ResponsiveImageContainer from 'components/coreComponents/ResponsiveImageContainer';
import { Col, Panel, Image, Media } from 'react-bootstrap';


class Story extends React.Component {

  constructor() {
    super();

    this.handleStoryClick = this.handleStoryClick.bind(this);
  }

  handleStoryClick(storyId) {
    //TODO call service with image Id to get story details?
    // OR if all story details are available, just direct to full story page... 
    //  leaning towards the former since there may be more details than the light version here
    console.log("TODO: " + storyId);
  }

  render() {

    
    let story = null;
    let responsiveImageContainer = null;

    if(this.props.image !== null) {
      responsiveImageContainer = (
        <ResponsiveImageContainer
         src={this.props.image} 
         caption={this.props.imageCaption}
         colXs={12} 
         colSm={4} 
         colMd={12} 
         onClick={(storyId) => this.handleStoryClick(storyId)}
         storyId={this.props.storyId}
        />
      );
    }

    return (
      
        <Panel>
          
          <Media>

            {responsiveImageContainer}

            <Media.Body>
              <Media.Heading>
                <a className={'story-title'} onClick={() => this.handleStoryClick(this.props.storyId)}>{this.props.title}</a>
              </Media.Heading>
              <p>{this.props.intro}</p>
            </Media.Body>

          </Media>
           
      </Panel>  
      
    );
  }
}

export default Story


