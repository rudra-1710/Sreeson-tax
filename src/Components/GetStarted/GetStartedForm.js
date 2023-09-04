import React, { useState } from 'react'
import {Container, Form, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./GetStarted.scss"
import {faLock, faAngleLeft, faUser, faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons';
function GetStartedForm() {
  const prov=["Alberta","British Columbia"];
  const [isWorkYes, setisWorkYes] = useState(false);
  const [isWorkNo, setisWorkNo] = useState(false);
  const [wasEmployed, setwasEmployed] = useState(false)
  const workHandler=(event)=>{
    console.log(event.target.value)
    if(event.target.value === "Yes"){
      setisWorkYes(true)
      setisWorkNo(false)
    }else{
      setisWorkNo(true)
      setisWorkYes(false)
    }
  }
  const workoneHandler=(event)=>{
    console.log(event.target.checked)
    if(event.target.checked === true){
      setwasEmployed(true)
    }else{
      setwasEmployed(false)
    }
  }
  return (
   
    <Container>
      <div className='d-flex justfiy-content-center align-items-center'>
        <img src="" className='pro-logo'/>
        <h6 className='my-4'>
          <FontAwesomeIcon icon={faUser} className='pe-3'/>Hemanth, What happend for you in 2022?</h6>
      </div>
      <div>
        <p className='my-3'>
          <FontAwesomeIcon icon={faLock}/>Locked items require an upgrade
        </p>
        <p className='my-3'>Hemanth,
          <b>answer these quations about your tax's situation.</b>
        </p>
        <p className='my-3'><FontAwesomeIcon
          icon={faMoneyCheckDollar}
          style={{
      color: "#129900"
    }}/>
          <b>Income & work releted expenses</b>
        </p>
      </div>
      <Form>
        <b>Hemanth, did you work in 2022?</b>
       <div onChange={workHandler}>
       <Form.Check className="my-3"  label="Yes" value="Yes" name="work" type="radio" id="workYes"/>
        <Form.Check className="my-3"  label="No" value="No" name="work" type="radio" id="workYes"/>
       </div>

        {/* if yes */}
        {isWorkYes && <ul>
          <li>What kind of work? Check all  that apply. How do I know these apply to me?
            <ul>
              <li>
                <Form.Check className="my-3" on onClick={workoneHandler}  label="I was employed (includes commissions from employment)" name="worktype" type="checkbox" id="worktype"/>
                {wasEmployed && <ul>
                    <li>
                      
                         <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>T4</a>- Employement Income</p>} name="worktype2" type="checkbox" id="worktype2"/>
                         <ul>
                            <li>
                            <Form.Check className="my-3"  label={<p>I worked in Quebec and received a Releve 1 slip</p>} name="worktype2-1" type="checkbox" id="worktype2-1"/>
                            </li>
                         </ul>

                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>T4A</a> Pension, Retirement, Annuity, and Others income - including CERB</p>} name="worktype22" type="checkbox" id="worktype22"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>T4A-RCA</a> - Distribution form a retirement compensation arrangement</p>} name="worktype23" type="checkbox" id="worktype23"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>T4PS</a>- Employee Profit Sharing Plan</p>} name="worktype23" type="checkbox" id="worktype23"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>T10</a> - Pension Adjustment Reversal (PAR) or Pension Adjustment Correction (Pac)</p>} name="worktype24" type="checkbox" id="worktype24"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>Foreign</a> - Income from outside of Canada</p>} name="worktype22" type="checkbox" id="worktype22"/>
                    </li>
                    <li>
                        Did youy have expenses related to your employment?
                        <Form.Check 
                        name="expenses"
                        label="Yes"
                        className='my-3'
                        type='radio'
                        id="expenses"
                        />
                         <Form.Check 
                        name="expenses"
                        label="No"
                        className='my-3'
                        type="radio"
                        id="expenses"
                        />
                        {/* if yes */}
                        <ul>
                            What kind of expenses? Check all that apply.
                            <li>
                                <Form.Check className='my-3' type='checkbox' label={<p >I had <a className='ps-1'>employment expenses</a></p>} id="expense1" />
                                <Form.Check className='my-3' type='checkbox' label={<p>I had other employment expenses (legal fee to collect wages, reimbursement of salaries and wage loss replacment premiums)</p>} id="expense2" />
                                <Form.Check className='my-3' type='checkbox' label={<p >I recieve the <a className='ps-1'>GST370 rebate</a> </p>} id="expense3" />
                                <Form.Check className='my-3' type='checkbox' label={<p >I had <a className='px-1'>meal and lodging</a>expenses as a transport employee</p>} id="expense4" />
                                <Form.Check className='my-3' type='checkbox' label={<p >I paid <a className='px-1'>union dues or professional fees</a>that are nopt listed on my T4 slip</p>} id="expense5" />
                            </li>
                            <li>
                              Do any of the following apply?
                            <Form.Check className='my-3' type='checkbox' label={<p >I was member of the<a className='ps-1'>clergy</a></p>} id="expense21" />
                            <Form.Check className='my-3' type='checkbox' label={<p>I recieve income from a Wage-loss replacement plan</p>} id="expense22" />
                            <Form.Check className='my-3' type='checkbox' label={<p >I want to make<a className='ps-1'>optional CPP or QPP contributions</a></p>} id="expense23" />
                            <Form.Check className='my-3' type='checkbox' label={<p >I have shares or stock in my company and have <a className='px-1'>deferred stock option</a>benifts, or paid tax on excess employees profit-sharing plan</p>} id="expense24" />
                            </li>
                            <li></li>
                        </ul>
                        {/* if noo */}
                    </li>
                 </ul>}
              </li>
              <li>
                <Form.Check name="selfemploye"  type="checkbox" label={<div className='d-flex'> I was <a className='px-1'>self employed</a>(freelancer, contracter, independent worker, professional, commiision-based, farming, fishiing)</div>} />
                <ul>
                  <p>Check that any apply</p>
                  <li>
                    <Form.Check className='my-3' name="t4" type="checkbox" id="t4" label={<p > All my self-employment income is reported on a <a href='#' className='px-1'>T4 or T4slip</a><FontAwesomeIcon className='px-1' icon={faLock} /> </p>} />
                    <p className='my-3'>Note: Subcontractors generally have their income reported on these slips.</p>
                    <Form.Check className='my-3' name="selfbusiness" type="checkbox" id="selfbusiness" label={<p > I have <a href='#' className='px-1'>business expenses</a>to claim that are releted to learning self employment income<FontAwesomeIcon className='px-1' icon={faLock} /> </p>} />
                    <p className='my-3'>Enter the province or territory where your business was located. Only enter a province or territory if you had a permanent business set up there.</p>
                    <select className='date-input-province'>
                      <option>--select--</option>
                    {prov.map(data=>{
                     return( <option key={data} value={data}>{data}</option>)
                    })}
                    </select>
                  </li>
                </ul>
              </li>
              <li>
                <Form.Check type="checkbox" className='my-3' label={<div className='d-flex'> I received <a className='px-1' href='#'> unemployment, maternity or paternity leave</a>, CERB or other benifits</div>} />
                <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p ><a href='#'  className='pe-1'>TAE</a> - Employement insurance Benifits</p>} name="worktype31" type="checkbox" id="worktype31"/>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>TA4</a> - Pension, retirement, annuity, and Others income -  Including CERB</p>} name="worktype32" type="checkbox" id="worktype32"/>
                    </li>
                 </ul>
              </li>
              <li>
              <Form.Check type="checkbox" className='my-3' label={<div className='d-flex'> I received <a className='px-1' href='#'> workers' compensition benifits </a>or <a className='px-1' href="#"> social assistance</a></div>} />
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p ><a href='#'  className='pe-1'>T5007</a> - WCB or social assistance Benifts, Senior supplement</p>} name="worktype2" type="checkbox" id="worktype2"/>
                    </li>
                 </ul>
              </li>
              <li>
              <Form.Check type="checkbox" className='my-3' label={<div className='d-flex'> I received tip or did<a className='px-1' href='#'> casual labour  </a> will not be getting a T4 </div>} />
                 <ul>
                    <li>
                       <p className='my-2'> Even if you did not recieve a T-slip for tip income, you should report it on your tax return <a className="px-1">Learmn more</a></p>
                    </li>
                 </ul>
              </li>
              <li>
                <Form.Check className="my-3"  label="I participsted in a work training program" name="worktype5" type="checkbox" id="worktype5"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>T4E</a>- Employment insurence Benifits</p>}  name="worktype6" type="checkbox" id="worktype6"/>
                    </li>
                 </ul>
              </li>
            </ul>
          </li>
        </ul>}

        {/* if noo */}
        {isWorkNo && <ul>
          <li>Do any of these apply for you?
            <ul>
              <li>
                <Form.Check className="my-3"  label="I recived workers' compensation benifits or social assistance" name="worktype" type="checkbox" id="worktype"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>T5007-WCB</a> or social assistance Benifits, Senior supplement</p>} name="worktype2" type="checkbox" id="worktype2"/>

                    </li>
                 </ul>
              </li>
              <li>
              <Form.Check type="checkbox" className='my-3' label={<div className='d-flex'> I received <a className='px-1' href='#'> unemployment, maternity or paternity leave</a>, CERB or other benifits</div>} />
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p ><a href='#'  className='pe-1'>TAE</a> - Employement insurance Benifits</p>} name="worktype2" type="checkbox" id="worktype2"/>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>TA4</a> - Pension, retirement, annuity, and Others income -  Including CERB</p>} name="worktype4" type="checkbox" id="worktype4"/>
                    </li>
                 </ul>
              </li>
              <li>
                <Form.Check className="my-3"  label="I participsted in a work training program" name="worktype5" type="checkbox" id="worktype5"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>T4E</a>- Employment insurence Benifits</p>}  name="worktype6" type="checkbox" id="worktype6"/>
                    </li>
                 </ul>
              </li>
            </ul>
          </li>
        </ul>}
        <hr className='mt-5'></hr>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
            back
          </div>
          <button className='btn continue-btn'>Continue</button>
        </div>
      </Form>
    </Container>
  )
}
export default GetStartedForm