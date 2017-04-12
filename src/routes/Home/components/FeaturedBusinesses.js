import React from 'react';
import { Col, Panel, Image, Media } from 'react-bootstrap';
import './styles/FeaturedBusinesses.css';

import ColumnPanelContainer from 'components/ColumnPanelContainer';
import ResponsiveImageContainer from 'components/coreComponents/ResponsiveImageContainer';

class FeaturedBusinesses extends React.Component {

  render() {

    let childPanels = [];

    for(let i = 0; i < this.props.businesses.length; i++) {

      let childPanel = (
                        
                          <Business 
                            imageId={this.props.businesses[i].imageId}
                            image={this.props.businesses[i].image}
                            businessName={this.props.businesses[i].businessName}
                            businessLink={this.props.businesses[i].businessLink}
                            address={this.props.businesses[i].address}
                            phone={this.props.businesses[i].phone}
                            intro={this.props.businesses[i].intro}
                            key={this.props.businesses[i].businessId}
                            businessId={this.props.businesses[i].businessId}
                            phoneNumber={this.props.businesses[i].phoneNumber}
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

export default FeaturedBusinesses;






class Business extends React.Component {

  constructor() {
    super();

    this.handleBusinessClick = this.handleBusinessClick.bind(this);

  }

  handleBusinessClick(businessId) {
    //TODO call service with image Id to get business details?
    // OR if all business details are available, just direct to full business page... 
    //  leaning towards the former since there may be more details than the light version here
    console.log("TODO: " + businessId);
  }

  render() {

    
    let business = null;
    let responsiveImageContainer = null;
    let addressString = "";
    let phoneNumberString = "";

    for (var key in this.props.address) {
      if (this.props.address[key] !== "") {
        addressString = addressString + this.props.address[key] + ", ";
      }
    }

    addressString = addressString.trim();
    if(addressString.charAt(addressString.length-1) === ","){
      addressString = addressString.slice(0, addressString.length-1);
    } 

    if (this.props.phoneNumber && this.props.phoneNumber !== "") {
      phoneNumberString = "Phone: " + this.props.phoneNumber
    }


    if(this.props.image !== null) {
      responsiveImageContainer = (
        <Col xs={12} sm={4} md={4} className={'responsive-image-container'}>
          <Image
            responsive
            src={this.props.image} 
          />
        </Col>
      );
    }

    return (
      
      <Panel>
          
        <Media>

          {responsiveImageContainer}

          <Media.Body>
            <Media.Heading>
              <a className={'business-title'} onClick={() => this.handleBusinessClick(this.props.businessId)}>{this.props.businessName}</a>
            </Media.Heading>
            <p className={'business-caption'}>
              {addressString}
            </p>
            <p className={'business-caption'}>
              {phoneNumberString}
            </p>
            <p>{this.props.intro}</p>
          </Media.Body>

        </Media>
           
      </Panel>  
      
    );
  }

}