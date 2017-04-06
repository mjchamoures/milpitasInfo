import React from 'react'
import MilpitasInfoPageHeader from '../../../public/MilpitasInfoPageHeader.png';
import LocalBusinessDirectoryHeader from '../../../public/LocalBusinessDirectoryHeader.png'
import { Col } from 'react-bootstrap'
import './Header.scss'

export const Header = () => (
  <Col xs={12}>
    <div className="text-center">
      <div className='img-container'>
        <img
            alt='milpitasInfoPageHeader!'
            src={MilpitasInfoPageHeader} 
        />
      </div>

      <div className='img-container'>
      <img 
        alt='LocalBusinessDirectoryHeader!'
        src={LocalBusinessDirectoryHeader} 
      />
      </div>
    </div>
  </Col>
)

export default Header
