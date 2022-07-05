import axios from 'axios'
import {Button } from 'react-bootstrap'
import React, { useEffect, useReducer } from 'react'

const initialvalue = {
    Loading: true,
    error: "",
    post: {},

};

const reducer = (state, action) => {
    switch (action.type) {
        case "Success":
            return {
                Loading: false,
                post: action.collection,
                error: ""

            }
        case "Failure":
            return {
                Loading: false,
                post: {},
                error: ".....ERROR!....."

            }
        default:
            return state;
    }

}


function Fetch() {
    const [state, dispatch] = useReducer(reducer, initialvalue)
    useEffect(() => {
        axios.get('http://localhost:8000/List')
            .then((request) => {
                dispatch({
                    type: "Success",
                    error: "",
                    collection: request.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "Failure",
                    error: "",
                    post: {}

                });
            })


    }, [])
    const header = ['id','Regno', 'Name', 'Class','mobile', 'Mark','Action1',"Action2"];


    return (
        <div>
            <div>
                <table className='table'>
                    <thead className='table-danger'>
                        <tr >
                            {
                                header.map((Names) => {
                                    return (
                                        <React.Fragment key={Names.id}>
                                            <th>{Names}</th>

                                        </React.Fragment>
                                    )
                                })

                            }
                        </tr>
                    </thead>
                    <tbody className='table-dark'>
                        {state.post.length > 0 && state.post.map((All) => {
                            return (
                                <tr>
                                    <td>{All.id}</td>
                                    <td>{All.regno}</td>
                                    <td>{All.name}</td>
                                    <td>{All.Class}</td>
                                    <td>{All.num}</td>
                                    <td>{All.total}</td>
                                    
                                    
                                    <td><Button variant="primary">Update</Button></td>
                                    <td><Button variant="primary">Delete</Button></td>

                                    
                                </tr>


                            )
                        })}
                    </tbody>
                </table>
                {state.error ? state.error : null}



            </div>


        </div>
    )
}

export default Fetch