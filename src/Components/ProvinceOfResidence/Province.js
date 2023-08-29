import React from 'react'
import Helpbar from '../CommonComponents/Helpbar'
import { Container, Nav } from 'react-bootstrap';
import "./Province.scss"

const Province = () => {
  return (
<Container>
        <Helpbar />
        <div>
            <h5 className='text-center my-3'>Where did you live on December 31, 2022?</h5>
            <p>
                <Nav.Link href='#' className='text-center'>What if I'm a non-resident or left Canada during the tax year?</Nav.Link>
            </p>
            <div className='d-flex justify-content-center my-4'>
                <div>
            <label for="province" className='my-2'><p>Province/territory:</p></label><br />
             <select id="province" name='province' className='my-2 date-input-province' >
               <option value="select">--select--</option>
               <option value="Alberta">Alberta</option>
               <option value="British Columbia">British Columbia</option>
               <option value="Manitoba">Manitoba</option>
               <option value="New Brunswick">New Brunswick</option>
               <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
               <option value="Northwest Territories">Northwest Territories</option>
               <option value="Nova Scotia">Nova Scotia</option>
               <option value="Nunavut">Nunavut</option>
               <option value="Ontario">Ontario</option>
               <option value="Prince Edward Island">Prince Edward Island</option>
               <option value="Québec">Québec</option>
               <option value="Saskatchewan">Saskatchewan</option>
               <option value="Yukon Territories">Yukon Territories</option>
               <option value="Non-Resident">Non-Resident</option>
               <option value="Deemed resident">Deemed resident</option>
               <option value="Non-Resident S.216">Non-Resident S.216</option>
               <option value="Non-Resident S.216">Non-Resident S.216</option>
             </select>
            </div>
            </div>
        </div>
</Container>
  )
}

export default Province
