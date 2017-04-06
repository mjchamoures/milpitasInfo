import React from 'react'
import MilpitasInfoPageHeader from '../../../public/MilpitasInfoPageHeader.png';
import LocalBusinessDirectoryHeader from '../../../public/LocalBusinessDirectoryHeader.png'
import { Col } from 'react-bootstrap'
import './Header.scss'

export const Header = () => (
  
  <div className="text-center">
    <img
        alt='milpitasInfoPageHeader!'
        className='milpitasInfoPageHeader'
        src={MilpitasInfoPageHeader} 
    />
    <img 
      alt='LocalBusinessDirectoryHeader!'
      className='localBusinessDirectoryHeader'
      src={LocalBusinessDirectoryHeader} 
    />
    </div>
)

export default Header
