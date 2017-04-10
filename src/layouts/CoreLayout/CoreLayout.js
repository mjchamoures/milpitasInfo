import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import './CoreLayout.css'
import '../../styles/core.css'

export const CoreLayout = ({ children }) => (
  <div className='container'>
    <Header />
    <Navbar />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
