import React from 'react';
import './ColumnPanelContainer.css';
import { Col, Panel } from 'react-bootstrap';



class ColumnPanelContainer extends React.Component {

  render() {

    return (

      <Panel header={this.props.headerTitle}>

        {this.props.childPanels}
          
      </Panel>  

    );


  }



}



export default ColumnPanelContainer;