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
                            story={this.props.stories[i]}
                            key={this.props.stories[i].imageId}
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
