import React, { useEffect, useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./Province.scss"
import Alberta from './Alberta';
import British from './British';
import Manitoba from './Manitoba';
import Brunswick from './Brunswick';
import NewfoundLand from './NewfoundLand';
import Northwest from './Northwest';
import Nova from './Nova';
import Nunavut from './Nanavut';
import Ontario from './Ontario';
import Prince from './Prince';
import Quebec from './Quebec';
import Saskatchewan from './Saskatchewan';
import Yukon from './Yukon';
import NonResident from './NonResident';
import DeemedResident from './DeemedResident';
import NonResidentS216 from './NonResidentS216';
import NonResidentS217 from './NonResidentS217';

const Province = () => {

  // useEffect(()=>{
  //   setvalidBtn(false)
  // })
  const [validBtn,setvalidBtn] = useState(false)
  const handleAlbertChange = (data) => {
    console.log(data, ' on ALbert')
  }
  const btnstate = (data)=>{
    setvalidBtn(data)
    console.log(data)
  }

  const provs = [
    {
      key: 'Alberta',
      value: 'Alberta',
      component: () => {
        return (<Alberta changeDt={handleAlbertChange} btnHandler={btnstate} />)
      }
    },
    {
      key: 'british_columbia',
      value: 'British Columbia',
      component: () => {
        return (<British btnHandler={btnstate}/>)
      }
    },
    {
      key: 'manitoba',
      value: 'Manitoba',
      component: () => {
        return (<Manitoba btnHandler={btnstate}/>)
      }
    },
    {
      key: 'New_Brunswick',
      value: 'New Brunswick',
      component: () => {
        return (<Brunswick btnHandler={btnstate} />)
      }
    },
    {
      key: 'Newfoundland_and_Labrador',
      value: 'Newfoundland and Labrador',
      component: () => {
        return (<NewfoundLand btnHandler={btnstate}/>)
      }
    },
    {
      key: 'Northwest_Territories',
      value: 'Northwest Territories',
      component: () => {
        return (<Northwest btnHandler={btnstate} />)
      }
    },
    {
      key: 'Nova_Scotia',
      value: 'Nova Scotia',
      component: () => {
        return (<Nova btnHandler={btnstate} />)
      }
    },
    {
      key: 'Nunavut',
      value: 'Nunavut',
      component: () => {
        return (<Nunavut btnHandler={btnstate}/>)
      }
    },
    {
      key: 'Ontario',
      value: 'Ontario',
      component: () => {
        return (<Ontario btnHandler={btnstate} />)
      }
    },
    {
      key: 'Prince_Edward_Island',
      value: 'Prince Edward Island',
      component: () => {
        return (<Prince btnHandler={btnstate} />)
      }
    },
    {
      key: 'Quebec',
      value: 'Québec',
      component: () => {
        return (<Quebec btnHandler={btnstate} />)
      }
    },
    {
      key: 'Saskatchewan',
      value: 'Saskatchewan',
      component: () => {
        return (<Saskatchewan btnHandler={btnstate} />)
      }
    },
    {
      key: 'Yukon_Territories',
      value: 'Yukon Territories',
      component: () => {
        return (<Yukon btnHandler={btnstate} />)
      }
    },
    {
      key: 'Non-Resident',
      value: 'Non-Resident',
      component: () => {
        return (<NonResident btnHandler={btnstate}/>)
      }
    },
    {
      key: 'Deemed_resident',
      value: 'Deemed resident',
      component: () => {
        return (<DeemedResident btnHandler={btnstate} />)
      }
    },
    {
      key: 'Non-Resident_S.216',
      value: 'Non-Resident S.216',
      component: () => {
        return (<NonResidentS216 btnHandler={btnstate} />)
      }
    },
    {
      key: 'Non-Resident_S.217',
      value: 'Non-Resident S.217',
      component: () => {
        return (<NonResidentS217 btnHandler={btnstate} />)
      }
    },
  ]

  const [contrySelector, setContrySelector] = useState({});

  const provinceHandler = (event)=>{
    console.log(event.target.value);
    const index = Number(event.target.value);
    setContrySelector(provs[index]);
    console.log(contrySelector);
    console.log(Object.keys(contrySelector))
  }
  const territoryHandler = (event)=>{
    event.preventDefault()
    console.log(event)
  }
  return (
<Container className='py-5'>
        <form onSubmit={territoryHandler}>
         <h5 className='text-center my-3'>Where did you live on December 31, 2022?</h5>
            <p>
                <Nav.Link href='#' className='text-center'>What if I'm a non-resident or left Canada during the tax year?</Nav.Link>
            </p>
            <div className='d-flex justify-content-center my-4'>
              <div>
                <label for="province" className='my-2'><p>Province/territory:</p></label><br />
                <select id="province" name='province' className='my-2 date-input-province' onChange={provinceHandler} >
                <option value="" hidden>--Select --</option>
                  {provs.map((item,index) =>{
                    return (<option key={item.key} value={index}>{item.value}</option>)
                  })}
                </select>
              </div>
            </div>

         {Object.keys(contrySelector).length >0 && contrySelector?.component()}
          
         <hr className='mt-5'></hr>
         <div className='d-flex justify-content-between'>
           <div className='d-flex align-items-center btn'>
              <FontAwesomeIcon icon={faAngleLeft} className='pe-1'/> back
            </div>
            <button className='btn continue-btn' disabled={!validBtn}  >Continue</button>
          </div> 
        </form>
</Container>
  )
}

export default Province
