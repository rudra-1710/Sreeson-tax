import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
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

  const handleAlbertChange = (data) => {
    console.log(data, ' on ALbert')
  }

  const provs = [
    {
      key: 'Alberta',
      value: 'Alberta',
      component: () => {
        return (<Alberta changeDt={handleAlbertChange} />)
      }
    },
    {
      key: 'british_columbia',
      value: 'British Columbia',
      component: () => {
        return (<British />)
      }
    },
    {
      key: 'manitoba',
      value: 'Manitoba',
      component: () => {
        return (<Manitoba />)
      }
    },
    {
      key: 'New_Brunswick',
      value: 'New Brunswick',
      component: () => {
        return (<Brunswick />)
      }
    },
    {
      key: 'Newfoundland_and_Labrador',
      value: 'Newfoundland and Labrador',
      component: () => {
        return (<NewfoundLand />)
      }
    },
    {
      key: 'Northwest_Territories',
      value: 'Northwest Territories',
      component: () => {
        return (<Northwest />)
      }
    },
    {
      key: 'Nova_Scotia',
      value: 'Nova Scotia',
      component: () => {
        return (<Nova />)
      }
    },
    {
      key: 'Nunavut',
      value: 'Nunavut',
      component: () => {
        return (<Nunavut />)
      }
    },
    {
      key: 'Ontario',
      value: 'ManitOntariooba',
      component: () => {
        return (<Ontario />)
      }
    },
    {
      key: 'Prince_Edward_Island',
      value: 'Prince Edward Island',
      component: () => {
        return (<Prince />)
      }
    },
    {
      key: 'Quebec',
      value: 'Québec',
      component: () => {
        return (<Quebec />)
      }
    },
    {
      key: 'Saskatchewan',
      value: 'Saskatchewan',
      component: () => {
        return (<Saskatchewan />)
      }
    },
    {
      key: 'Yukon_Territories',
      value: 'Yukon Territories',
      component: () => {
        return (<Yukon />)
      }
    },
    {
      key: 'Non-Resident',
      value: 'Non-Resident',
      component: () => {
        return (<NonResident />)
      }
    },
    {
      key: 'Deemed_resident',
      value: 'Deemed resident',
      component: () => {
        return (<DeemedResident />)
      }
    },
    {
      key: 'Non-Resident_S.216',
      value: 'Non-Resident S.216',
      component: () => {
        return (<NonResidentS216 />)
      }
    },
    {
      key: 'Non-Resident_S.217',
      value: 'Non-Resident S.217',
      component: () => {
        return (<NonResidentS217 />)
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

  return (
<Container>
        <div>
         <h5 className='text-center my-3'>Where did you live on December 31, 2022?</h5>
            <p>
                <Nav.Link href='#' className='text-center'>What if I'm a non-resident or left Canada during the tax year?</Nav.Link>
            </p>
            <div className='d-flex justify-content-center my-4'>
              <div>
                <label for="province" className='my-2'><p>Province/territory:</p></label><br />
                <select id="province" name='province' className='my-2 date-input-province' onChange={provinceHandler} >
                <option value="">--Select --</option>
                  {provs.map((item,index) =>{
                    return (<option key={item.key} value={index}>{item.value}</option>)
                  })}
                </select>
              </div>
            </div>
          </div>  
        <div>
          
         {Object.keys(contrySelector).length >0 && contrySelector?.component()}
          
          
        </div>
</Container>
  )
}

export default Province
