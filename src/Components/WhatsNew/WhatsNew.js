import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import "./WhatsNew.scss"

const WhatsNew = () => {
  return (
    <Container className='whatsnew'>
        <h4 className='text-center'><b>What's new to taxes this year</b></h4>
        <div>
            <div>
            <h5 className='my-4 text-grey'><b>Covid-19 tax info</b></h5>
            <p className='my-4'>Here’s some info on common ways that COVID-19 may have impacted your tax situation this year:</p>
            <ul>
                <li className='py-3'><b>covid-19 benefit repayment - </b>If you repaid all or part of COVID-19 benefits received in 2020 or 2021, you can now deduct repayments made in 2022 for any year from 2020-2022 without refiling your prior year returns. You should receive a T4E or T4A slip reporting repaid amounts. They can be imported with Autofill my return or entered manually in the Income section.</li>
                <li className='d-inline py-3'><b>Work-from-home expenses - </b> If you had to work from home due to COVID-19 closures in 2022, you can make claims in the Employment Expenses section on forms T777 or T777S, under the same rules introduced in 2020. <Nav.Link className='d-inline theme-color'><span>Learn more</span></Nav.Link> about which expenses you can claim.</li>
            </ul>
            <p className='py-4'>Find out more information on the <Nav.Link className='d-inline theme-color'>Covid-19 Tax info Cenetr</Nav.Link></p>
            <h5 className='my-4 text-grey'><b>Tax law changes</b></h5>
            <p className='my-3'>some federal tax changes this year</p>
            <ul>
                <li className='py-3'>Home accessibility tax credit - The expense limit increased from $10,000 to $20,000.</li>
                <li className='py-3'>First-Time Home Buyers' Tax Credit - For homes purchased on or after Jan. 1, 2022, the home buyers' amount increased from $5,000 to $10,000, for a max credit of $1,500.</li>
                <li className='py-3'>Labour Mobility Deduction: Eligible tradespeople or apprentices who temporarily relocate for work can claim up to $4,000 in eligible transportation, meal, and lodging costs from 2021 and 2022.</li>
                <li className='py-3'>Medical expenses for surrogacy/fertility - Newly eligible expenses include: medical expenses for a surrogate mother or a sperm/ova/embryo donor; costs reimbursed to a surrogate for in vitro fertilization expenses; and fees paid to fertility clinics and donor banks for donor sperm and ova.</li>
                <li className='py-3'>Small business air quality improvement tax credit - Self-employed people or partnerships can claim 25% of qualifying expenses incurred from Sept. 1, 2021 to Dec. 31, 2022 to improve ventilation and air filtration. Individuals may claim a max credit of $2,500 per eligible location and a max of $12,500 across all locations.</li>
            </ul>
        </div>
        </div>
        <hr className='mt-5'></hr>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center btn'><FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
                      back</div>
                    <button className='btn continue-btn'>Continue</button>
         </div>

    </Container>
  )
}

export default WhatsNew