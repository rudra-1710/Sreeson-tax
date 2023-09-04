import React from 'react'
import {Container, Form, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLock, faAngleLeft, faUser, faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons';
function GetStartedForm() {
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
        <Form.Check className="my-3"  label="Yes" name="work" type="radio" id="workYes"/>
        <Form.Check className="my-3"  label="Yes" name="work" type="radio" id="workYes"/>

        {/* if yes */}
        <ul>
          <li>What kind of work? Check all  that apply. How do I know these apply to me?
            <ul>
              <li>
                <Form.Check className="my-3"  label="I was employed (includes commissions from employment)" name="worktype" type="checkbox" id="worktype"/>
                 <ul>
                    <li>
                      
                         <Form.Check className="my-3"  label={<p className='d-flex '><Nav.Link href="#" className='pe-1'>T4</Nav.Link>- Employement Income</p>} name="worktype2" type="checkbox" id="worktype2"/>
                         <ul>
                            <li>
                            <Form.Check className="my-3"  label={<p className='d-flex '>I worked in Quebec and received a Releve 1 slip</p>} name="worktype2-1" type="checkbox" id="worktype2-1"/>
                            </li>
                         </ul>

                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p className='d-flex '><Nav.Link href="#" className='pe-1'>T4A</Nav.Link> Pension, Retirement, Annuity, and Others income - including CERB</p>} name="worktype22" type="checkbox" id="worktype22"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p className='d-flex '><Nav.Link href="#" className='pe-1'>T4A-RCA</Nav.Link> - Distribution form a retirement compensation arrangement</p>} name="worktype23" type="checkbox" id="worktype23"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p className='d-flex '><Nav.Link href="#" className='pe-1'>T4PS</Nav.Link>- Employee Profit Sharing Plan</p>} name="worktype23" type="checkbox" id="worktype23"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p className='d-flex '><Nav.Link href="#" className='pe-1'>T10</Nav.Link> - Pension Adjustment Reversal (PAR) or Pension Adjustment Correction (Pac)</p>} name="worktype24" type="checkbox" id="worktype24"/>
                    </li>
                    <li>
                    <Form.Check className="my-3"  label={<p className='d-flex '><Nav.Link href="#" className='pe-1'>Foreign</Nav.Link> - Income from outside of Canada</p>} name="worktype22" type="checkbox" id="worktype22"/>
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

                            </li>
                        </ul>
                    </li>
                 </ul>
              </li>
              <li>
                <Form.Check className="my-3"  label="I recived unemployment, maternity or paternity leave, CERB or other benifits" name="worktype3" type="checkbox" id="worktype3"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p className='d-flex'><Nav.Link href='#'  className='pe-1'>TAE</Nav.Link> - Employement insurance Benifits</p>} name="worktype2" type="checkbox" id="worktype2"/>
                         <Form.Check className="my-3"  label={<p className='d-flex'><Nav.Link href='#' className='pe-1'>TA4</Nav.Link> - Pension, retirement, annuity, and Others income -  Including CERB</p>} name="worktype4" type="checkbox" id="worktype4"/>
                    </li>
                 </ul>
              </li>
              <li>
                <Form.Check className="my-3"  label="I participsted in a work training program" name="worktype5" type="checkbox" id="worktype5"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p className='d-flex'><Nav.Link href='#' className='pe-1'>T4E</Nav.Link>- Employment insurence Benifits</p>}  name="worktype6" type="checkbox" id="worktype6"/>
                    </li>
                 </ul>
              </li>
            </ul>
          </li>
        </ul>

        {/* if noo */}
        <ul>
          <li>Do any of these apply for you?
            <ul>
              <li>
                <Form.Check className="my-3"  label="I recived workers' compensation benifits or social assistance" name="worktype" type="checkbox" id="worktype"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p className='d-flex '><Nav.Link href="#" className='pe-1'>T5007-WCB</Nav.Link> or social assistance Benifits, Senior supplement</p>} name="worktype2" type="checkbox" id="worktype2"/>

                    </li>
                 </ul>
              </li>
              <li>
                <Form.Check className="my-3"  label="I recived unemployment, maternity or paternity leave, CERB or other benifits" name="worktype3" type="checkbox" id="worktype3"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p className='d-flex'><Nav.Link href='#'  className='pe-1'>TAE</Nav.Link> - Employement insurance Benifits</p>} name="worktype2" type="checkbox" id="worktype2"/>
                         <Form.Check className="my-3"  label={<p className='d-flex'><Nav.Link href='#' className='pe-1'>TA4</Nav.Link> - Pension, retirement, annuity, and Others income -  Including CERB</p>} name="worktype4" type="checkbox" id="worktype4"/>
                    </li>
                 </ul>
              </li>
              <li>
                <Form.Check className="my-3"  label="I participsted in a work training program" name="worktype5" type="checkbox" id="worktype5"/>
                 <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p className='d-flex'><Nav.Link href='#' className='pe-1'>T4E</Nav.Link>- Employment insurence Benifits</p>}  name="worktype6" type="checkbox" id="worktype6"/>
                    </li>
                 </ul>
              </li>
            </ul>
          </li>
        </ul>
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