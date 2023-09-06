import React, { useState } from 'react'
import {Container, Form } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./GetStarted.scss"
import {faLock, faAngleLeft, faUser, faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons';
function GetStartedForm() {
  const prov=["Alberta","British Columbia", "Manitoba", "New Brunswick", "Newfounded and Labrador", "Nova Scotia ", "Ontario", "Prince Edward island", "Quebec","Saskatchwan","Yukon","Nunavut"];
  const [isWorkYes, setisWorkYes] = useState(false);
  const [isWorkNo, setisWorkNo] = useState(false);
  const [wasEmployed, setwasEmployed] = useState(false);
  const [showT4, setshowT4] = useState(false)
  const [isExp, setisExp] = useState(false);
  const[isSelf, setisSelf] = useState(false);
  const [isUnEmp, setisUnEmp] = useState(false)
  const [isWork, setisWork] = useState(false)
  const [isCasual, setisCasual] = useState(false)
  const [isTraining, setisTraining] = useState(false)
  const [isNoWork, setisNoWork] = useState(false)
  const [isNoCasual, setisNoCasual] = useState(false)
  const [isNoTraining, setisNoTraining] = useState(false)
  const [isScholar,setisScholar]=  useState(false)
  const [isDisability, setisDisability] = useState(false)
  const [isAdvance, setisAdvance] = useState(false)
  const [isOtherIncome, setisOtherIncome] = useState(false)


  const workHandler=(event)=>{
    if(event.target.value === "Yes"){
      setisWorkYes(true)
      setisWorkNo(false)
    }else{
      setisWorkNo(true)
      setisWorkYes(false)
    }
  }
  const workoneHandler=(event)=>{
    if(event.target.checked === true){
      setwasEmployed(true)
    }else{
      setwasEmployed(false)
    }
  }
  const workT4Handler = (event)=>{
    if(event.target.checked === true){
      setshowT4(true)
    }else{
      setshowT4(false)
    }
  }
  const experinceHandler = (event)=>{
    if(event.target.value === "Yes"){
      setisExp(true)
    }else{
      setisExp(false)
    }
  }
  const selfEmployHandler =(event)=>{
    if(event.target.checked === true){
      setisSelf(true)
    }else{
      setisSelf(false)
    }
  }
  const unEmployHandler = (event)=>{
    if(event.target.checked === true){
      setisUnEmp(true)
    }else{
      setisUnEmp(false)
    }
  }
  const workerHandler = (event)=>{
    if(event.target.checked === true){
      setisWork(true)
    }else{
      setisWork(false)
    }
  }
  const casualHandler = (event)=>{
    if(event.target.checked === true){
      setisCasual(true)
    }else{
      setisCasual(false)
    }
  }
  const workTrainingHandler = (event)=>{
    if(event.target.checked === true){
      setisTraining(true)
    }else{
      setisTraining(false)
    }
  }
  const noworkerHandler = (event)=>{
    if(event.target.checked === true){
      setisNoWork(true)
    }else{
      setisNoWork(false)
    }
  }
  const nocasualHandler = (event)=>{
    if(event.target.checked === true){
      setisNoCasual(true)
    }else{
      setisNoCasual(false)
    }
  }
  const noworkTrainingHandler = (event)=>{
    if(event.target.checked === true){
      setisNoTraining(true)
    }else{
      setisNoTraining(false)
    }
  }
   const scholasticHandler  = (event)=>{
    if(event.target.checked === true){
      setisScholar(true)
    }else{
      setisScholar(false)
    }
  }
  const disabilityHandler = (event)=>{
    if(event.target.checked === true){
      setisDisability(true)
    }else{
      setisDisability(false)
    }
  }
  const advanceHandler = (event)=>{
    if(event.target.checked === true){
      setisAdvance(true)
    }else{
      setisAdvance(false)
    }
  } 
  const otherIncomeHandler =  (event)=>{
    if(event.target.value === "Yes"){
      setisOtherIncome(true)
    }else{
      setisOtherIncome(false)
    }
  } 
  return (
   
    <Container>
      <div className='d-flex justfiy-content-center align-items-center'>
        <img src="" className='pro-logo' alt="logo"/>
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
      <div>
        {/* if yes */}
        {isWorkYes && <ul>
          <li>What kind of work? Check all  that apply. How do I know these apply to me?
            <ul>
              <li>
                <Form.Check className="my-3" on onClick={workoneHandler}  label="I was employed (includes commissions from employment)" name="worktype" type="checkbox" id="worktype"/>
                {wasEmployed && <ul>
                    <li>
                      
                         <Form.Check className="my-3" onClick={workT4Handler} label={<p><a href="#" className='pe-1' target='_blank'>T4</a>- Employement Income</p>} name="worktype2" type="checkbox" id="worktype2"/>
                        {showT4 &&
                           <ul>
                           <li>
                           <Form.Check className="my-3"  label={<p>I worked in Quebec and received a Releve 1 slip</p>} name="worktype2-1" type="checkbox" id="worktype2-1"/>
                           </li>
                        </ul>
                        }

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
                       <div onChange={experinceHandler}>
                       <Form.Check 
                        name="expenses"
                        label="Yes"
                        value="Yes"
                        className='my-3'
                        type='radio'
                        id="expenses"
                        />
                         <Form.Check 
                        name="expenses"
                        label="No"
                        value="No"
                        className='my-3'
                        type="radio"
                        id="expenses"
                        />
                       </div>
                        {/* if yes */}
                        {isExp && <ul>
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
                        </ul>}
                        {/* if noo */}
                    </li>
                 </ul>}
              </li>
                            {/* self employe */}
              <li>
                <Form.Check name="selfemploye" onClick={selfEmployHandler}  type="checkbox" label={<div className='d-flex'> I was <a className='px-1'>self employed</a>(freelancer, contracter, independent worker, professional, commiision-based, farming, fishiing)</div>} />
                {isSelf && <ul>
                  <p className='my-3'>Check that any apply</p>
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
                </ul>}
              </li>
                            {/* un employee */}
              <li>
                <Form.Check type="checkbox" onClick={unEmployHandler} className='my-3' label={<div className='d-flex'> I received <a className='px-1' href='#'> unemployment, maternity or paternity leave</a>, CERB or other benifits</div>} />
                {isUnEmp && <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p ><a href='#'  className='pe-1'>TAE</a> - Employement insurance Benifits</p>} name="worktype31" type="checkbox" id="worktype31"/>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>TA4</a> - Pension, retirement, annuity, and Others income -  Including CERB</p>} name="worktype32" type="checkbox" id="worktype32"/>
                    </li>
                 </ul>}
              </li>
                    {/* worker */}
              <li>
              <Form.Check type="checkbox" onClick={workerHandler} className='my-3' label={<div className='d-flex'> I received <a className='px-1' href='#'> workers' compensition benifits </a>or <a className='px-1' href="#"> social assistance</a></div>} />
                 {isWork && <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p ><a href='#'  className='pe-1'>T5007</a> - WCB or social assistance Benifts, Senior supplement</p>} name="worktype2" type="checkbox" id="worktype2"/>
                    </li>
                 </ul>}
              </li>
                    {/* casual */}
              <li>
              <Form.Check type="checkbox" onClick={casualHandler} className='my-3' label={<div className='d-flex'> I received tip or did<a className='px-1' href='#'> casual labour  </a> will not be getting a T4 </div>} />
                 {isCasual && <ul>
                    <li>
                       <p className='my-2'> Even if you did not recieve a T-slip for tip income, you should report it on your tax return <a className="px-1">Learmn more</a></p>
                    </li>
                 </ul>}
              </li>
              {/* training work */}
              <li>
                <Form.Check onClick={workTrainingHandler} className="my-3"  label="I participsted in a work training program" name="worktype5" type="checkbox" id="worktype5"/>
                 {isTraining && <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>T4E</a>- Employment insurence Benifits</p>}  name="worktype6" type="checkbox" id="worktype6"/>
                    </li>
                 </ul>}
              </li>
            </ul>
          </li>
        </ul>}

        {/* if noo */}
        {isWorkNo && <ul>
          <li>Do any of these apply for you?
            <ul>
              <li>
                <Form.Check onClick={noworkerHandler} className="my-3"  label="I recived workers' compensation benifits or social assistance" name="worktype" type="checkbox" id="worktype"/>
                 {isNoWork && <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p><a href="#" className='pe-1'>T5007-WCB</a> or social assistance Benifits, Senior supplement</p>} name="worktype2" type="checkbox" id="worktype2"/>

                    </li>
                 </ul>}
              </li>
              <li>
              <Form.Check onClick={nocasualHandler} type="checkbox" className='my-3' label={<div className='d-flex'> I received <a className='px-1' href='#'> unemployment, maternity or paternity leave</a>, CERB or other benifits</div>} />
                 {isNoCasual && <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                       <Form.Check className="my-3"  label={<p ><a href='#'  className='pe-1'>TAE</a> - Employement insurance Benifits</p>} name="worktype2" type="checkbox" id="worktype2"/>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>TA4</a> - Pension, retirement, annuity, and Others income -  Including CERB</p>} name="worktype4" type="checkbox" id="worktype4"/>
                    </li>
                 </ul>}
              </li>
              <li>
                <Form.Check onClick={noworkTrainingHandler} className="my-3"  label="I participsted in a work training program" name="worktype5" type="checkbox" id="worktype5"/>
                 {isNoTraining && <ul>
                    <li>
                       <p className='my-2'> check any that apply</p>
                         <Form.Check className="my-3"  label={<p ><a href='#' className='pe-1'>T4E</a>- Employment insurence Benifits</p>}  name="worktype6" type="checkbox" id="worktype6"/>
                    </li>
                 </ul>}
              </li>
            </ul>
          </li>
        </ul>}
        </div>
<div>
  <b className='my-3'>Hemanth, did you have <a href='#'>other income</a> not yet mentioned, such as: scholastic, foreign, disability, alimony, child support, death benifits, or Canada workers benefit payments?</b>
 <div onChange={otherIncomeHandler}>
 <Form.Check name='otherIncome' label="Yes" value="Yes" type="radio" className='my-3' id="otherIncomeYes"/>
  <Form.Check name='otherIncome' label="No" value="No" type='radio' className='my-3' id="otherIncomeNo"/>
 </div>
 <div>
 {isOtherIncome &&  <ul>
    Check all that apply
    <li>
    <Form.Check className="my-3" onClick={scholasticHandler}  label={<div>I have <a href="#" >scholastic income</a> </div>} name="scholastic" type="checkbox" id="scholastic"/>
    
    {isScholar && <ul>
      <p>Check all that apply</p>
      <li>
      <Form.Check className="my-3"  label={<p> <a href="#" >T4A -</a> Pension, Retirement, Annuity, and other income (including scholarships and business) </p>} name="scholastic1" type="checkbox" id="scholastic1"/>          
      <Form.Check className="my-3"  label={<p> <a href="#" >T4E -</a> Employment Insurence benfit </p>} name="scholastic2" type="checkbox" id="scholastic2"/>          
      <Form.Check className="my-3"  label={<p> <a href="#" >T4RSP -</a> Registered Retirement saving plan income </p>} name="scholastic3" type="checkbox" id="scholastic3"/>          
      </li>
    </ul>}

    </li>
    <li>
    <Form.Check className="my-3"   label={<div> <a href="#" >Foreign</a> - Income from outside of canada </div>} name="foregin" type="checkbox" id="foregin"/>
    </li>
    <li>
    <Form.Check className="my-3" onClick={disabilityHandler}  label={<div>I have <a href="#" >scholastic income</a> </div>} name="disability" type="checkbox" id="disability"/>

    {isDisability && <ul>
      <p>Check all that apply</p>
      <li>
      <Form.Check className="my-3"  label={<p> <a href="#" >T4A(p) -</a> Canada Pension Plan or Quebec Pension plan benifits </p>} name="scholastic1" type="checkbox" id="scholastic1"/>          
      <Form.Check className="my-3"  label={<p> <a href="#" >T4A -</a> Pension, Retirement, Annuity, and Other income </p>} name="scholastic2" type="checkbox" id="scholastic2"/>          
      </li>
    </ul>}
    </li>
    <li>
    <Form.Check className="my-3"   label={<div> I recieved <a href="#" >Alimony or child support</a> </div>} name="alimony" type="checkbox" id="alimony"/>
    </li>
    <li>
    <Form.Check className="my-3" onClick={advanceHandler}  label={<div>I recieve <a href="#" >advance payments </a> of the Canadian workers benefits </div>} name="advance" type="checkbox" id="advance"/>

    {isAdvance && <ul>
      <p>Check all that apply</p>
      <li>
      <Form.Check className="my-3"  label={<p> <a href="#" >TRC210 -</a> Canada Workers Benifit Advance payments </p>} name="advance1" type="checkbox" id="advance1"/>          
      </li>
      <li>
    <Form.Check className="my-3"   label={<div> I recieved <a href="#" >Other Income</a> not include anywhere else </div>} name="another_income" type="checkbox" id="another_income"/>
    </li>
    </ul>}
    </li>
  </ul>}
 </div>
</div>

<div>
  <b className='my-3'>Hemanth, did you, your spouse/partner, or dependent recieve <a href='#'>Split income</a>? (this does not apply to pension income splitting)</b>
  <Form.Check name='parterIncome' label="Yes" value="Yes" type="radio" className='my-3' id="parterIncomeYes"/>
  <Form.Check name='parterIncome' label="No" value="No" type='radio' className='my-3' id="parterIncomeNo"/>
</div>

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