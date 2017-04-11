import React from 'react';
import './styles/TopStories.css';
import { Col, Panel } from 'react-bootstrap';
import Story from './Story';
import ColumnPanelContainer from '../../../components/ColumnPanelContainer';

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
