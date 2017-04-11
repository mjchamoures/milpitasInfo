import React from 'react';
import { Col, Image} from 'react-bootstrap';
import './ResponsiveImageContainer.css';


export const ResponsiveImageContainer = (props) => (

  <Col xs={props.colXs} sm={props.colSm} md={props.colMd} className={'responsive-image-container'}>
    <Image
      responsive
      src={props.src} 
    />
    <a className={'image-caption'} key={props.storyId} onClick={() => props.onClick(props.storyId)}>
      {props.caption}
    </a>
  </Col>

);


export default ResponsiveImageContainer;