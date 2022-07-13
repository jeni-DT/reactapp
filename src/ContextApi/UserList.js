import React ,{useContext}from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../ContextCrud/GlobalState'

const UserLists = () => {
    const { users }= useContext(GlobalContext);
    console.log(users)
  return (
    <ListGroup  >
        <ListGroupItem className='d-flex'>
            <strong>User one</strong>
            <div className='ml-auto'>
                <Link className='btn  btn-warning mr-1' to='edituser'>Edit</Link>
                <Button  className='btn btn-danger mr-1'>Delete</Button>

            </div>
        </ListGroupItem>
        <ListGroupItem className='d-flex'>
            <strong>User two</strong>
            <div className='ml-auto'>
                <Link className='btn  btn-warning mr-1' to='edituser'>Edit</Link>
                <Button  className='btn btn-danger mr-1'>Delete</Button>

            </div>
        </ListGroupItem>
    </ListGroup>
  )
}

export default UserLists 