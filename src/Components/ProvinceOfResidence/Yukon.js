import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import yukon from "../../assets/images/yukon.png"
import "./Alberta.scss"
import "./Yukon.scss"

const Yukon = (props) => {
  const [isYukonMove,
    setisYukonMove] = useState(false)
  const [isResideYukon,
    setisResideYukon] = useState(false)
  const [yukonFirst,
    setyukonFirst] = useState(false)
  const [showSelfGovt,
    setshowSelfGovt] = useState(false)

  const yukonFirstName = [
    {
      name: "Carcross/Tagish",
      label: "Ca-Ta"
    }, {
      name: "Champagne & Aishihik",
      label: "Ch&Aisk"
    }, {
      name: "Kluane",
      label: "Kluane"
    }, {
      name: "Kwanlin Dun",
      label: "kwalin"
    }, {
      name: "Little Salmon/Carmacks",
      label: "Lit-salmon"
    }, {
      name: "Nacho Nyak Dun",
      label: "nacho"
    }, {
      name: "Selkirk",
      label: "Selkirk"
    }, {
      name: "Ta'an Kwäch'än",
      label: "taan-kwach"
    }, {
      name: "Teslin Tlingit",
      label: "teslin"
    }, {
      name: "Tr'ondëk Hwëch'in",
      label: "trondek"
    }, {
      name: "Vuntut Gwitchin",
      label: "vuntut"
    }
  ]

  const YukonHandler = (event) => {
    console.log(event.target.value)

    if (event.target.value === "Yes") {
      setisYukonMove(true);
      setisResideYukon(true)
      props.btnHandler(false)
    } else {
      setisYukonMove(false)
      setisResideYukon(true)
      props.btnHandler(false)
    }
  }
  const resideYukonHandler = (event) => {
    console.log(event.target.value)
    if (event.target.value === "Yes") {
      setshowSelfGovt(true)
      props.btnHandler(false)
    } else {
      setshowSelfGovt(false)
      props.btnHandler(true)
    }
  }
  const yukonFirstnationHandler = (event) => {
    if (event.target.value) {
      setyukonFirst(true)
    }
  }
  const yukonAnotherHandler = (event) => {
    if (event.target.value) {
      props.btnHandler(true)
    }
  }

  return (
    <Container className='Yukon alberta'>
      <div className='d-flex justify-content-center mb-1'>
        <div className='territory '></div>
      </div>
      <div>
        <h6 className='text-center'>Did you move anotherprovince/territory in 2022?</h6>
      </div>
      <div className='statusSinle' onChange={YukonHandler}>

        <ul>
          <li><input type="radio" name="yukon" id="YukonYes" value="Yes"/>
            <label for="YukonYes">
              <div className='imgbar single d-flex justify-content-center align-items-center'>
                <p>Yes</p>
              </div>
            </label>
          </li>
          <li><input type="radio" name="yukon" id="YukonNo" value="No"/>
            <label for="YukonNo">
              <div
                className='imgbar married d-flex justify-content-center align-items-center'>
                <p>No</p>
              </div>
            </label>
          </li>
        </ul>
      </div>

      {isYukonMove && <div className='py-4'>
        <h6 className='text-center'>When did you move?</h6>
        <div className='d-flex justify-content-center'>
          <div>
            <label for="Yukondate" className='my-2'>
              <p>An apporximate date is OK</p>
            </label>
            <input type='date' required id="Yukondate" name='Yukondate' className='my-2 date-input'/>
          </div>
        </div>
      </div>}
      {isResideYukon && <div className='py-4'>
        <div className='d-flex justify-content-center mb-1'>
          <div className='country-logo py-2'>
            <img src={yukon} alt="yukon"/>
          </div>
        </div>
        <div>
          <h6 className='text-center'>Did you reside within a self-governing Yukon First
            Nation settlement land on December 31, 2022?</h6>
        </div>
        <div className='statusSinle' onChange={resideYukonHandler}>
          <ul>
            <li><input type="radio" name="resideyukon" id="resideYukonYes" value="Yes"/>
              <label for="resideYukonYes">
                <div className='imgbar single d-flex justify-content-center align-items-center'>
                  <p>Yes</p>
                </div>
              </label>
            </li>
            <li><input type="radio" name="resideyukon" id="resideYukonNo" value="No"/>
              <label for="resideYukonNo">
                <div
                  className='imgbar married d-flex justify-content-center align-items-center'>
                  <p>No</p>
                </div>
              </label>
            </li>
          </ul>
        </div>

      </div>
}

      {showSelfGovt && <div className='d-flex justify-content-center my-4'>
        <div>
        <label for="province" className='my-2'>
          <p>Name of self-governing First Nation</p>
        </label>
        <select
          id="yukon"
          name='yukon'
          className='my-2 date-input-yukon'
          onChange={yukonFirstnationHandler}>
          <option value="" hidden>--select--</option>
          {yukonFirstName.map((nation) => {
            return (
              <option value={nation.label}>{nation.name}</option>
            )
          })}
        </select>
      </div>
      </div>
}

      {yukonFirst &&< div > <div>
        <h6 className='text-center'>Did you a citizen of the self-governing First Nation identified above?</h6>
      </div> < div className = 'statusSinle' onChange = {
        yukonAnotherHandler
      } > <ul>
        <li><input type="radio" name="yukonAnother" id="isYukonCitizenYes" value="Yes"/>
          <label for="isYukonCitizenYes">
            <div className='imgbar single d-flex justify-content-center align-items-center'>
              <p>Yes</p>
            </div>
          </label>
        </li>
        <li><input type="radio" name="yukonAnother" id="isYukonCitizenNo" value="No"/>
          <label for="isYukonCitizenNo">
            <div
              className='imgbar married d-flex justify-content-center align-items-center'>
              <p>No</p>
            </div>
          </label>
        </li>
      </ul> 
      </div>
        </div >
}

    </Container>
  )
}

export default Yukon