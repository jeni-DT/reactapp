import React from 'react'

function Table(PROPD) {
    const List=[{
        Id:1,
        Item:"Pastha",
        Amount:80

   },
   {
    Id:2,
    Item:"French Fries",
    Amount:60

   },
   {
   Id:3,
   Item:"Ice Cream",
   Amount:90

  }
]
const header=["Id","Item","Amount"]
  return (
    // CONDSTATE,SetStat([])
    <div>
        <table className='table'>
            <thead className='table-info'>
            <tr >
            {
              header.map((Names)=>{
                return (
                  <React.Fragment key={Names.id}>
                    <th>{Names}</th>
                   
                  </React.Fragment>
                )
              })
              
            }
          </tr>
            </thead>
            <tbody className='table-dark' >
            {List.map((info)=>{
            return(
              <tr>
                <td>{info.Id}</td>
                <td>{info.Item}</td>
                <td>{info.Amount}</td>
                
                </tr>
            ) 
          })}
            </tbody>
        </table>
    </div>
  )
}

export default Table