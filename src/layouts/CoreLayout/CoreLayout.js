import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './CoreLayout.css'
import '../../styles/core.css'

export const CoreLayout = ({ children }) => (
  <div className='container' style={{ width : '100%'}}>
    <div className='core-layout__viewport'>
      <Header />
      
      <Navbar />
      
      {children}
      
      <Footer />
    </div>      
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
