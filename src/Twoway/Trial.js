import React from 'react'

 const Trial = () => {
   const datas=[{
     id:1,
     name:"Jeni",
     Age:"22",
     Gender:"female"
   },
  {
    id:2,
     name:"Divesh",
     Age:"12",
     Gender:"male"

  },
  {
    id:3,
     name:"Kowsi",
     Age:"22",
     Gender:"female"

  },
  {
    id:4,
     name:"Mani",
     Age:"23",
     Gender:"male"

  },
  {
    id:5,
     name:"Sathish",
     Age:"22",
     Gender:"male"

  },
  {
    id:6,
     name:"Asha",
     Age:"25",
     Gender:"Female"

  },{
    id:7,
     name:"Kishore",
     Age:"24",
     Gender:"male"

  },
  {
    id:8,
     name:"David",
     Age:"27",
     Gender:"male"

  }]
  const header=["id","name","Age","Gender"]
  return (
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
        <tbody className='table-primary'>
          {datas.map((info)=>{
            return(
              <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.Age}</td>
                <td>{info.Gender}</td>
                </tr>
            ) 
          })}
        </tbody>
       
      </table>
        </div>
  )
}
export default Trial



