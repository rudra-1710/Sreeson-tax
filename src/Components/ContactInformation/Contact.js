import React, { useState } from 'react'
import "./Contact.scss"
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Contact() {
    const [contact_details,setcontact_details] = useState({out_mail:"",country_add:"",care_of:"",street_add:"",suite:"",po_box:"",rr:"",city:"",province:"",postal_code:"",current_mail:"",email_add:"",phone_num:"",pre_lang:"",curr_prov:"",sel_prov:"",change_mail:"",})
    const [isOutside,setisOutside] = useState(false)
    const [isSameProvince, setisSameProvince]= useState(false)
    const[isMailChange,setisMailChange]= useState(false)
    const[islive,setislive]= useState(true)
    const [check,setcheck] = useState(false)
    const [validBtn, setvalidBtn ]= useState(false)
    const provin = ["Alberta","British Columbia", "Manitoba","New Brunswick","Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut","Ontario","Prince Edward Island","Québec","Saskatchewan","Yukon"]
   
    const conLink= useNavigate()
    const country = [ 
        {"name": "Afghanistan", "code": "AF"}, 
        {"name": "land Islands", "code": "AX"}, 
        {"name": "Albania", "code": "AL"}, 
        {"name": "Algeria", "code": "DZ"}, 
        {"name": "American Samoa", "code": "AS"}, 
        {"name": "AndorrA", "code": "AD"}, 
        {"name": "Angola", "code": "AO"}, 
        {"name": "Anguilla", "code": "AI"}, 
        {"name": "Antarctica", "code": "AQ"}, 
        {"name": "Antigua and Barbuda", "code": "AG"}, 
        {"name": "Argentina", "code": "AR"}, 
        {"name": "Armenia", "code": "AM"}, 
        {"name": "Aruba", "code": "AW"}, 
        {"name": "Australia", "code": "AU"}, 
        {"name": "Austria", "code": "AT"}, 
        {"name": "Azerbaijan", "code": "AZ"}, 
        {"name": "Bahamas", "code": "BS"}, 
        {"name": "Bahrain", "code": "BH"}, 
        {"name": "Bangladesh", "code": "BD"}, 
        {"name": "Barbados", "code": "BB"}, 
        {"name": "Belarus", "code": "BY"}, 
        {"name": "Belgium", "code": "BE"}, 
        {"name": "Belize", "code": "BZ"}, 
        {"name": "Benin", "code": "BJ"}, 
        {"name": "Bermuda", "code": "BM"}, 
        {"name": "Bhutan", "code": "BT"}, 
        {"name": "Bolivia", "code": "BO"}, 
        {"name": "Bosnia and Herzegovina", "code": "BA"}, 
        {"name": "Botswana", "code": "BW"}, 
        {"name": "Bouvet Island", "code": "BV"}, 
        {"name": "Brazil", "code": "BR"}, 
        {"name": "British Indian Ocean Territory", "code": "IO"}, 
        {"name": "Brunei Darussalam", "code": "BN"}, 
        {"name": "Bulgaria", "code": "BG"}, 
        {"name": "Burkina Faso", "code": "BF"}, 
        {"name": "Burundi", "code": "BI"}, 
        {"name": "Cambodia", "code": "KH"}, 
        {"name": "Cameroon", "code": "CM"}, 
        {"name": "Canada", "code": "CA"}, 
        {"name": "Cape Verde", "code": "CV"}, 
        {"name": "Cayman Islands", "code": "KY"}, 
        {"name": "Central African Republic", "code": "CF"}, 
        {"name": "Chad", "code": "TD"}, 
        {"name": "Chile", "code": "CL"}, 
        {"name": "China", "code": "CN"}, 
        {"name": "Christmas Island", "code": "CX"}, 
        {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
        {"name": "Colombia", "code": "CO"}, 
        {"name": "Comoros", "code": "KM"}, 
        {"name": "Congo", "code": "CG"}, 
        {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
        {"name": "Cook Islands", "code": "CK"}, 
        {"name": "Costa Rica", "code": "CR"}, 
        {"name": "Cote DIvoire", "code": "CI"}, 
        {"name": "Croatia", "code": "HR"}, 
        {"name": "Cuba", "code": "CU"}, 
        {"name": "Cyprus", "code": "CY"}, 
        {"name": "Czech Republic", "code": "CZ"}, 
        {"name": "Denmark", "code": "DK"}, 
        {"name": "Djibouti", "code": "DJ"}, 
        {"name": "Dominica", "code": "DM"}, 
        {"name": "Dominican Republic", "code": "DO"}, 
        {"name": "Ecuador", "code": "EC"}, 
        {"name": "Egypt", "code": "EG"}, 
        {"name": "El Salvador", "code": "SV"}, 
        {"name": "Equatorial Guinea", "code": "GQ"}, 
        {"name": "Eritrea", "code": "ER"}, 
        {"name": "Estonia", "code": "EE"}, 
        {"name": "Ethiopia", "code": "ET"}, 
        {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
        {"name": "Faroe Islands", "code": "FO"}, 
        {"name": "Fiji", "code": "FJ"}, 
        {"name": "Finland", "code": "FI"}, 
        {"name": "France", "code": "FR"}, 
        {"name": "French Guiana", "code": "GF"}, 
        {"name": "French Polynesia", "code": "PF"}, 
        {"name": "French Southern Territories", "code": "TF"}, 
        {"name": "Gabon", "code": "GA"}, 
        {"name": "Gambia", "code": "GM"}, 
        {"name": "Georgia", "code": "GE"}, 
        {"name": "Germany", "code": "DE"}, 
        {"name": "Ghana", "code": "GH"}, 
        {"name": "Gibraltar", "code": "GI"}, 
        {"name": "Greece", "code": "GR"}, 
        {"name": "Greenland", "code": "GL"}, 
        {"name": "Grenada", "code": "GD"}, 
        {"name": "Guadeloupe", "code": "GP"}, 
        {"name": "Guam", "code": "GU"}, 
        {"name": "Guatemala", "code": "GT"}, 
        {"name": "Guernsey", "code": "GG"}, 
        {"name": "Guinea", "code": "GN"}, 
        {"name": "Guinea-Bissau", "code": "GW"}, 
        {"name": "Guyana", "code": "GY"}, 
        {"name": "Haiti", "code": "HT"}, 
        {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
        {"name": "Holy See (Vatican City State)", "code": "VA"}, 
        {"name": "Honduras", "code": "HN"}, 
        {"name": "Hong Kong", "code": "HK"}, 
        {"name": "Hungary", "code": "HU"}, 
        {"name": "Iceland", "code": "IS"}, 
        {"name": "India", "code": "IN"}, 
        {"name": "Indonesia", "code": "ID"}, 
        {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
        {"name": "Iraq", "code": "IQ"}, 
        {"name": "Ireland", "code": "IE"}, 
        {"name": "Isle of Man", "code": "IM"}, 
        {"name": "Israel", "code": "IL"}, 
        {"name": "Italy", "code": "IT"}, 
        {"name": "Jamaica", "code": "JM"}, 
        {"name": "Japan", "code": "JP"}, 
        {"name": "Jersey", "code": "JE"}, 
        {"name": "Jordan", "code": "JO"}, 
        {"name": "Kazakhstan", "code": "KZ"}, 
        {"name": "Kenya", "code": "KE"}, 
        {"name": "Kiribati", "code": "KI"}, 
        {"name": "Korea, Democratic PeopleS Republic of", "code": "KP"}, 
        {"name": "Korea, Republic of", "code": "KR"}, 
        {"name": "Kuwait", "code": "KW"}, 
        {"name": "Kyrgyzstan", "code": "KG"}, 
        {"name": "Lao PeopleS Democratic Republic", "code": "LA"}, 
        {"name": "Latvia", "code": "LV"}, 
        {"name": "Lebanon", "code": "LB"}, 
        {"name": "Lesotho", "code": "LS"}, 
        {"name": "Liberia", "code": "LR"}, 
        {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
        {"name": "Liechtenstein", "code": "LI"}, 
        {"name": "Lithuania", "code": "LT"}, 
        {"name": "Luxembourg", "code": "LU"}, 
        {"name": "Macao", "code": "MO"}, 
        {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
        {"name": "Madagascar", "code": "MG"}, 
        {"name": "Malawi", "code": "MW"}, 
        {"name": "Malaysia", "code": "MY"}, 
        {"name": "Maldives", "code": "MV"}, 
        {"name": "Mali", "code": "ML"}, 
        {"name": "Malta", "code": "MT"}, 
        {"name": "Marshall Islands", "code": "MH"}, 
        {"name": "Martinique", "code": "MQ"}, 
        {"name": "Mauritania", "code": "MR"}, 
        {"name": "Mauritius", "code": "MU"}, 
        {"name": "Mayotte", "code": "YT"}, 
        {"name": "Mexico", "code": "MX"}, 
        {"name": "Micronesia, Federated States of", "code": "FM"}, 
        {"name": "Moldova, Republic of", "code": "MD"}, 
        {"name": "Monaco", "code": "MC"}, 
        {"name": "Mongolia", "code": "MN"}, 
        {"name": "Montenegro", "code": "ME"},
        {"name": "Montserrat", "code": "MS"},
        {"name": "Morocco", "code": "MA"}, 
        {"name": "Mozambique", "code": "MZ"}, 
        {"name": "Myanmar", "code": "MM"}, 
        {"name": "Namibia", "code": "NA"}, 
        {"name": "Nauru", "code": "NR"}, 
        {"name": "Nepal", "code": "NP"}, 
        {"name": "Netherlands", "code": "NL"}, 
        {"name": "Netherlands Antilles", "code": "AN"}, 
        {"name": "New Caledonia", "code": "NC"}, 
        {"name": "New Zealand", "code": "NZ"}, 
        {"name": "Nicaragua", "code": "NI"}, 
        {"name": "Niger", "code": "NE"}, 
        {"name": "Nigeria", "code": "NG"}, 
        {"name": "Niue", "code": "NU"}, 
        {"name": "Norfolk Island", "code": "NF"}, 
        {"name": "Northern Mariana Islands", "code": "MP"}, 
        {"name": "Norway", "code": "NO"}, 
        {"name": "Oman", "code": "OM"}, 
        {"name": "Pakistan", "code": "PK"}, 
        {"name": "Palau", "code": "PW"}, 
        {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
        {"name": "Panama", "code": "PA"}, 
        {"name": "Papua New Guinea", "code": "PG"}, 
        {"name": "Paraguay", "code": "PY"}, 
        {"name": "Peru", "code": "PE"}, 
        {"name": "Philippines", "code": "PH"}, 
        {"name": "Pitcairn", "code": "PN"}, 
        {"name": "Poland", "code": "PL"}, 
        {"name": "Portugal", "code": "PT"}, 
        {"name": "Puerto Rico", "code": "PR"}, 
        {"name": "Qatar", "code": "QA"}, 
        {"name": "Reunion", "code": "RE"}, 
        {"name": "Romania", "code": "RO"}, 
        {"name": "Russian Federation", "code": "RU"}, 
        {"name": "RWANDA", "code": "RW"}, 
        {"name": "Saint Helena", "code": "SH"}, 
        {"name": "Saint Kitts and Nevis", "code": "KN"}, 
        {"name": "Saint Lucia", "code": "LC"}, 
        {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
        {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
        {"name": "Samoa", "code": "WS"}, 
        {"name": "San Marino", "code": "SM"}, 
        {"name": "Sao Tome and Principe", "code": "ST"}, 
        {"name": "Saudi Arabia", "code": "SA"}, 
        {"name": "Senegal", "code": "SN"}, 
        {"name": "Serbia", "code": "RS"}, 
        {"name": "Seychelles", "code": "SC"}, 
        {"name": "Sierra Leone", "code": "SL"}, 
        {"name": "Singapore", "code": "SG"}, 
        {"name": "Slovakia", "code": "SK"}, 
        {"name": "Slovenia", "code": "SI"}, 
        {"name": "Solomon Islands", "code": "SB"}, 
        {"name": "Somalia", "code": "SO"}, 
        {"name": "South Africa", "code": "ZA"}, 
        {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
        {"name": "Spain", "code": "ES"}, 
        {"name": "Sri Lanka", "code": "LK"}, 
        {"name": "Sudan", "code": "SD"}, 
        {"name": "Suriname", "code": "SR"}, 
        {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
        {"name": "Swaziland", "code": "SZ"}, 
        {"name": "Sweden", "code": "SE"}, 
        {"name": "Switzerland", "code": "CH"}, 
        {"name": "Syrian Arab Republic", "code": "SY"}, 
        {"name": "Taiwan, Province of China", "code": "TW"}, 
        {"name": "Tajikistan", "code": "TJ"}, 
        {"name": "Tanzania, United Republic of", "code": "TZ"}, 
        {"name": "Thailand", "code": "TH"}, 
        {"name": "Timor-Leste", "code": "TL"}, 
        {"name": "Togo", "code": "TG"}, 
        {"name": "Tokelau", "code": "TK"}, 
        {"name": "Tonga", "code": "TO"}, 
        {"name": "Trinidad and Tobago", "code": "TT"}, 
        {"name": "Tunisia", "code": "TN"}, 
        {"name": "Turkey", "code": "TR"}, 
        {"name": "Turkmenistan", "code": "TM"}, 
        {"name": "Turks and Caicos Islands", "code": "TC"}, 
        {"name": "Tuvalu", "code": "TV"}, 
        {"name": "Uganda", "code": "UG"}, 
        {"name": "Ukraine", "code": "UA"}, 
        {"name": "United Arab Emirates", "code": "AE"}, 
        {"name": "United Kingdom", "code": "GB"}, 
        {"name": "United States", "code": "US"}, 
        {"name": "United States Minor Outlying Islands", "code": "UM"}, 
        {"name": "Uruguay", "code": "UY"}, 
        {"name": "Uzbekistan", "code": "UZ"}, 
        {"name": "Vanuatu", "code": "VU"}, 
        {"name": "Venezuela", "code": "VE"}, 
        {"name": "Viet Nam", "code": "VN"}, 
        {"name": "Virgin Islands, British", "code": "VG"}, 
        {"name": "Virgin Islands, U.S.", "code": "VI"}, 
        {"name": "Wallis and Futuna", "code": "WF"}, 
        {"name": "Western Sahara", "code": "EH"}, 
        {"name": "Yemen", "code": "YE"}, 
        {"name": "Zambia", "code": "ZM"}, 
        {"name": "Zimbabwe", "code": "ZW"} 
        ]
    const mailForm = [
        {
            label:"Care of",
            type:"text",
            value:contact_details.care_of,
            name:"care_of"
        },
        {
            label:"Street Address",
            type:"text",
            value:contact_details.street_add,
            name:"street_add"
        },
        {
            label:"Suite/Apt/unit",
            type:"text",
            value:contact_details.suite,
            name:"suite"
        },
        {
            label:"PO Box",
            type:"text",
            value:contact_details.po_box,
            name:"po_box"
        },{
            label:"RR",
            type:"text",
            value:contact_details.rr,
            name:"rr"
        },
        {
            label:"City",
            type:"text",
            value:contact_details.city,
            name:"city"
        },
        {
            label:"Province",
            type:"text",
            value:contact_details.province,
            name:"province"
        },
        {
            label:"Postal Code",
            type:"text",
            value:contact_details.postal_code,
            name:"postal_code"
        },
    ]
    
    const mailHandler=(event)=>{
        if (event.target.value === "Yes"){
            setisOutside(true)
            contact_details.out_mail = "Yes"
        }else{
            setisOutside(false)
            contact_details.out_mail = "No"
        }
    }
    const mailaddress = (event)=>{
        if(event.target.value==="No"){
            setisSameProvince(true)
           contact_details.curr_prov="No"
        }else{
            setisSameProvince(false)
            contact_details.curr_prov="No"
            
        }
    }
    const mailChangeHandler =(event)=>{
        if(event.target.value==="Yes"){
            setisMailChange(true)
            contact_details.change_mail = "Yes"
        }else{
            setisMailChange(false)
            contact_details.change_mail = "No"
        }
    }
    const mailAddressHandler = (event)=>{
        console.log(event.target.checked)
        if (event.target.checked){
            setislive(false)
            setcheck(false)
            contact_details.current_mail= true
        }else {
            setvalidBtn(false)
            setislive(true)
            contact_details.current_mail= true
        }
    }
    const con_details = (event)=>{
        setcontact_details({...contact_details,[event.target.name]:event.target.value})
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation(); 
        }
        setcheck(true)
        setvalidBtn(true)
        console.log(contact_details)
        // setValidated(true);
      };

  return (
    <Container>
        <h5 className='text-center'>Let's get your Contact info</h5>
        <div >
                <form onSubmit={handleSubmit}>
                    <div className='contact-form'>
                    <div>
                <label className='my-2'><p><b>Is your mailing adress outside Canada?</b></p></label><br />
                <select id="mail" name='mail' required className='my-2 date-input-mail' onChange={mailHandler} >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                </select>
            </div>
            <div>
            {isOutside && <p className='my-4'>If your mailing adress is outside of Canada, you won't be abel to file your return using CRA's NETFILE service.</p>}
            </div >
         
                    <label for="country" className='my-2'><p><b>Is your countrying adress outside Canada?</b></p></label><br />
                <select id="country" required  onChange={con_details} name="country_add"  className='my-2 date-input-mail' >
                <option value="" hidden>--select--</option>
                {country.map((prov,index)=>{
                    return(
                        <option value={prov.code}  key={index}>{prov.name}</option>
                    )
                })}
                </select>

            <div>
            <p><b>What's your mailing address?</b></p>
            <Row>
                    {mailForm.map(data=>{
                      return( 
                        <Col>
                             <Form.Group  md="4" className='my-4' onChange={con_details} controlId="validationCustom01" key={data.label}>
                        <Form.Label>
                            <p>{data.label}</p>
                        </Form.Label>
                        <Form.Control required type={data.type} name={data.name} value={data.value} className='my-1 date-input-mail'  />
                    </Form.Group>
                        </Col>
                      )
                    })}
                    
                    </Row>
                    </div>
                   <div className='d-flex align-items-center'>
                   <input type="checkbox" name="mailaddress" id="mailaddress" className='m-1' onClick={mailAddressHandler}/>
                <label for="mailaddress"> <p>The mailing address above is where currently live</p></label>
                   </div>
                    <Row>
                        <Col>
                    <Form.Group  md="4" className='my-4' onChange={con_details} controlId="validationCustom01" >
                        <Form.Label>
                            <p>Hemanth's email adress</p>
                        </Form.Label>
                        <Form.Control required type="email" name="email_add" value={contact_details.email_add} className='my-1 date-input-mail'  />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group  md="4" className='my-4' onChange={con_details} controlId="validationCustom01">
                        <Form.Label>
                            <p>Hemanth's phone number</p>
                        </Form.Label>
                        <Form.Control required type="number" value={contact_details.phone_num} name="phone_num" className='my-1 date-input-mail' />
                    </Form.Group>
                    </Col>
                    
                    </Row>
                    <div><label for="pre_lang"  className='my-2'><p>Preferred language<span className='text-danger'>*</span></p></label><br />
                <select id="pre_lang" required name='pre_lang' onChange={con_details} className='my-2 date-input-mail' >
                 <option value="" hidden>--select--</option>   
                <option value="English">English</option>
                <option value="France" >France</option>
                <option value="Chainess" >Chainess</option>
                </select></div>
               {islive && <div className='my-3' onChange={mailaddress}>
                <p className='mb-2'>Is your current province of residence the same as yours mailing adress above?</p>
                <div className='d-flex align-items-center'>
                <input name="mailaddress" className='m-1' type="radio" value="Yes" id="mailaddressyes" required/> <label for="mailaddressyes">Yes</label><br />
                </div>
                <div className='d-flex align-items-center'>
                <input name="mailaddress" className='m-1' type="radio" value="No" id="mailaddressNo" /> <label for="mailaddressNo">No</label><br />
                </div>
                </div>}
                {isSameProvince && islive &&
                    <div>
                        <label for="territory" className='my-2'><p>Which province/territory do you currectly live?</p></label><br />
                            <select id="territory" required name='sel_prov'  onChange={con_details} className='my-2 date-input-mail' >
                                <option value="" hidden>--Select--</option>
                                {provin.map((name,index)=>{
                                    return(<option key={index} value={name}>{name}</option>)
                                })}
                            </select>
                    </div>
                }
                <div className='my-3' onChange={mailChangeHandler}>
                <p className='mb-2'>Did you change your mail address this year?</p>
                <div className='d-flex align-items-center'>
                <input name="mailchange" className='m-1' type="radio" value="Yes" id="mailchangeyes" required/> <label for="mailchangeyes">Yes</label><br />
                </div>
                <div className='d-flex align-items-center'>
                <input name="mailchange" className='m-1' type="radio" value="No" id="mailchangeNo" /> <label for="mailchangeNo">No</label><br />
                </div>
                </div>
                {isMailChange &&
                    <div>
                       <p>You can proceed using the NETFILE service but, you must notify the CRA regarding the change of mailing adress before you file your return.</p>
                        <p className='my-2'>You can update your info through the CRA's My account service or by calling at <b>1-800-959-8281</b></p>
                    </div>
                }
                </div>
                <button className='btn  position-relative p-2 checkbtn'>
                    <input type='checkbox' name="contactCheck" id='contactCheck' checked={check} className='position-absolute top-0 bottom-0 start-0 z-n1' /> <p className='px-3 '>did you enter all details</p>
                </button>
                <hr className='mt-5'></hr>
                  <div className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center btn back-btn'>
                        <Link>
                        <FontAwesomeIcon icon={faAngleLeft} className='pe-1'/>
                         back
                        </Link>
                    </div>
                    <button className='btn continue-btn' hidden={!validBtn}>continue</button>
                  </div>
                </form>
                </div>
            
    </Container>
  )
}

export default Contact