import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import "./TaxReturn.scss"
import corporateImg from "../../assets/images/comingsoon.jpg"
import TaxReturnBasicDetails from './TaxReturnBasicDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { getCookie } from '../../utils/services/cookei'
import { useNavigate } from 'react-router-dom'
import { postApiCall } from '../../utils/services/api.service'
import { tax_profile } from '../../utils/services/taxApi'

function TaxReturnType() {
  const navigate = useNavigate();

  const  [loginUser, setLoginUser] = useState({});

  useEffect(() => {
    const user = getCookie('userData');

    if (user) {
      const userInfo = JSON.parse(user);
      setLoginUser(userInfo);
    } else {
      navigate('/login');
    }
  })

  const taxType = [{
    name: "My self",
    id: "TaxReturnmyself",
    value: "Self",
    class: "returnimg myself",
    component: (userData) => {
      return (<TaxReturnBasicDetails  userData={userData}/>)
    }
  },
  {
    name: "Corporate",
    id: "TaxReturnCorporate",
    value: "Company",
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
    value: "Others",
    class: "returnimg others",
    component: (userData) => {
      return (<TaxReturnBasicDetails userData={userData}/>)
    }
  }
  ]

  const [basicform, setBasicForm] = useState({});
  const [userData, setuserData] = useState({});

  const TaxtypeHandler = (event) => {
    event.preventDefault();
    const profileType = taxType[Number(event.target.value)] 
    const obj = {
      ...tax_profile,
      profile_type: profileType?.value
    }
    postApiCall(`user/create/${loginUser?.user_id}`, obj)
    .then((data) => {
      setBasicForm(profileType);
      setuserData(data);
    })
    .catch(error => {
      console.log(error)
    })
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
          {Object.keys(basicform).length > 0 && basicform.component(userData)}
        </div>
      </div>
    </Container>
  )
}

export default TaxReturnType