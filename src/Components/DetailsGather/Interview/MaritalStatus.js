import React, { useState } from 'react';

import "./MaritalStatus.css"
import { Container } from 'react-bootstrap';
import StatusSingle from './StatusSingle';
import StatusMarried from './StatusMarried';
import StatusLivin from "./StatusLivin";
import StatusWidowed from './StatusWidowed';
import StatusDivorced from "./StatusDivorced";
import StatusSeparated from "./StatusSeparated"

const MaritalStatus = () => {

  const statusName = [
    {name:"singel",
      key:"singel",
      compound: ()=>{
        return(<StatusSingle />)
      }
    },
    {name:"married",
      key:"married",
      compound: ()=>{
        return(<StatusMarried />)
      }
    },
    {name:"livin",
      key:"livin",
      compound: ()=>{
        return(<StatusLivin />)
      }
    },
    {name:"widowed",
      key:"widowed",
      compound: ()=>{
        return(<StatusWidowed />)
      }
    },
    {name:"divorce",
      key:"divorce",
      compound: ()=>{
        return(<StatusDivorced />)
      }
    },
    {name:"separated",
      key:"separated",
      compound: ()=>{
        return(<StatusSeparated />)
      }
    }
  ]

  const statusSelection = [
    {
      name:"Singel",
      class:"img single",
      id:"cb1"
    },
    {
      name:"Married",
      class:"img married",
      id:"cb2"
    },
    {
      name:"Livin Relation",
      class:"img livin",
      id:"cb3"
    },
    {
      name:"Widowed",
      class:"img widow",
      id:"cb4"
    },
    {
      name:"Divorce",
      class:"img divorce",
      id:"cb5"
    },
    {
      name:"Separated",
      class:"img separated",
      id:"cb6"
    }
  ]

  const [status,setStatus] = useState({})

  const statusHandler = (event)=>{
    console.log(event.target.value)
    setStatus(statusName[Number(event.target.value)])
  
  }
  return (
    <Container >
    <div>
        <div className='text-center'>
            <h5>What was your marital status on December 31, 2022</h5>
        </div>
        <div  className='text-center '>
          <p className='theme-color d-inline'>What marital status do I choose?</p>
        </div>
        <div className='status' onChange={statusHandler}>
        <ul>
          {statusSelection.map((type,index)=>{
            return(
              <li key={type.id}>
                <input type="radio" name="statustype" id={type.id} value={index} />
                <label for={type.id}>
                  <div className={type.class}></div>
                </label>
                <p>{type.name}</p>
              </li>
            )
          })}
</ul>
        </div>
    </div>
    <div>
      {Object.keys(status).length>0 && status?.compound()}
    </div>
    </Container>
  )
}

export default MaritalStatus
