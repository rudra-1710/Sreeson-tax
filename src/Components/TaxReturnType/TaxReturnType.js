import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import "./TaxReturn.scss"
import corporateImg from "../../assets/images/comingsoon.jpg"
import TaxReturnBasicDetails from './TaxReturnBasicDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function TaxReturnType() {

  const taxType = [{
    name: "My self",
    id: "TaxReturnmyself",
    value: "my_self",
    class: "returnimg myself",
    component: () => {
      return (<TaxReturnBasicDetails />)
    }
  },
  {
    name: "Corporate",
    id: "TaxReturnCorporate",
    value: "corporate",
    class: "returnimg corporate",
    component: () => {
      return (
        <div>
          <div className='d-flex justify-content-center my-5'>
            <img src={corporateImg} width="250px" height="auto" alt='corporate' />
          </div>
          <hr className='mt-5'></hr>
          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1' />
              back</div>
            <div className='btn continue-btn'>Continue</div>
          </div>
        </div>)
    }
  },
  {
    name: "Others",
    id: "TaxReturnOthers",
    value: "others",
    class: "returnimg others",
    component: () => {
      return (<TaxReturnBasicDetails />)
    }
  }
  ]

  const [basicform, setBasicForm] = useState({})

  const TaxtypeHandler = (event) => {
    setBasicForm(taxType[Number(event.target.value)])
  }


  return (
    <Container className='tax-return'>
      <h5 className='text-center'>Who are You preparing this return for?</h5>
      <div>
        <ul onChange={TaxtypeHandler}>
          {taxType.map((type, index) => {
            return (<li key={type.value}>
              <input type='radio' name="tax-return" id={type.id} value={index} />
              <label for={type.id}>
                <div className={type.class}></div>
              </label>
              <p>{type.name}</p>
            </li>)
          })}
        </ul>
        <div>
          {Object.keys(basicform).length > 0 && basicform.component()}
        </div>
      </div>
    </Container>
  )
}

export default TaxReturnType