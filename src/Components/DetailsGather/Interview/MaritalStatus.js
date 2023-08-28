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

  const [singel,setSingel]= useState(false);
  const [married,setmarried]= useState(false);
  const [livin,setlivin]= useState(false);
  const [widowed,setwidowed]= useState(false);
  const [divorced,setdivorced]= useState(false);
  const [separated,setseparated]= useState(false);


  const statusHandler = (event)=>{
    console.log(event.target.value)
    if(event.target.value === "singel"){
      setSingel(true)
      setmarried(false);
      setlivin(false)
      setwidowed(false)
      setdivorced(false)
      setseparated(false)
    }else if(event.target.value === "married"){
      setSingel(false)
      setmarried(true);
      setlivin(false)
      setwidowed(false)
      setdivorced(false)
      setseparated(false)
    }else if(event.target.value === "livin"){
      setSingel(false)
      setmarried(false);
      setlivin(true)
      setwidowed(false)
      setdivorced(false)
      setseparated(false)
    }else if(event.target.value === "widowed"){
      setSingel(false)
      setmarried(false);
      setlivin(false)
      setwidowed(true)
      setdivorced(false)
      setseparated(false)
    }else if(event.target.value === "divorce"){
      setSingel(false)
      setmarried(false);
      setlivin(false)
      setwidowed(false)
      setdivorced(true)
      setseparated(false)
    }else if(event.target.value === "separated"){
      setSingel(false)
      setmarried(false);
      setlivin(false)
      setwidowed(false)
      setdivorced(false)
      setseparated(true)
    }
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

    <li><input type="radio" name="test" id="cb1" value="singel" />
    <label for="cb1">
        <div className='img single'></div>
    </label>
    <p>Singel</p>
  </li>

  <li><input type="radio" name="test" id="cb2" value="married" />
    <label for="cb2"><div className='img married'></div></label>
    <p>Married</p>
  </li>
  <li><input type="radio" name="test" id="cb3" value="livin" />
    <label for="cb3">
    <div className='img livin'></div>
    </label>
    <p>Livin Relation</p>
  </li>
  
  <li><input type="radio" name="test" id="cb4" value="widowed" />
    <label for="cb4">
    <div className='img widow'></div>
    </label>
    <p>Widowed</p>
  </li>
  
  <li><input type="radio" name="test" id="cb5" value="divorce" />
    <label for="cb5">
    <div className='img divorce'></div>
    </label>
    <p>Divorce</p>
  </li>
  <li><input type="radio" name="test" id="cb6" value="separated" />
    <label for="cb6">
    <div className='img separated'></div>
    </label>
    <p>separated</p>
  </li>
  
</ul>
        </div>
    </div>
    <div>
      {singel &&<StatusSingle />}
      {married &&<StatusMarried />}
      {livin && <StatusLivin />}
      {widowed && <StatusWidowed />}
      {divorced && <StatusDivorced />}
      {separated && <StatusSeparated />}
    </div>
    </Container>
  )
}

export default MaritalStatus
