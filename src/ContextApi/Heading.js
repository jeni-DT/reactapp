import React from 'react'
import { Navbar,Container ,NavbarBrand,Nav,  NavItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HeadingPge = () => {
  return (
   <Navbar color='dark'className='navbar navbar-expand newbar-dark'>
       <Container>
           <NavbarBrand href='/base'>My Team</NavbarBrand>
           <Nav>
               <NavItem>
                   <Link className='btn btn-primary' to='/adduser'>AddUser</Link>
               </NavItem>
           </Nav>
       </Container>
   </Navbar>
  )
}

export default HeadingPge