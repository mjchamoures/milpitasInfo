import React from 'react';
import { Col, Panel, Image, Media } from 'react-bootstrap';
import './styles/TopStories.css';

import ColumnPanelContainer from 'components/ColumnPanelContainer';
import ResponsiveImageContainer from 'components/coreComponents/ResponsiveImageContainer';


class TopStories extends React.Component {

  render() {

    let childPanels = [];

    for(let i = 0; i < this.props.stories.length; i++) {

      let childPanel = (
                        
                          <Story 
                            imageId={this.props.stories[i].imageId}
                            image={this.props.stories[i].image}
                            imageCaption={this.props.stories[i].imageCaption}
                            title={this.props.stories[i].title}
                            author={this.props.stories[i].author}
                            date={this.props.stories[i].date}
                            likes={this.props.stories[i].likes}
                            comments={this.props.stories[i].comments}
                            intro={this.props.stories[i].intro}
                            key={this.props.stories[i].imageId}
                            storyId={this.props.stories[i].storyId}
                          />
                        
                       );
      
      childPanels.push(childPanel);

    }

    return (

      <ColumnPanelContainer 
        headerTitle={this.props.headerTitle} 
        childPanels={childPanels}
      />

    );
  }
}

export default TopStories



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
         colMd={4} 
         onClick={(storyId) => this.handleStoryClick(storyId)}
         storyId={this.props.storyId}
        />
      );
    }

    return (
         
      <Media>

        {responsiveImageContainer}

        <Media.Body>
          <Media.Heading>
            <a className={'story-title'} onClick={() => this.handleStoryClick(this.props.storyId)}>{this.props.title}</a>
          </Media.Heading>
          <p>{this.props.intro}</p>
        </Media.Body>

      </Media>
      
    );
  }
}