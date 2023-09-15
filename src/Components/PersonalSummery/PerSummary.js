import React from 'react'
import { Container } from 'react-bootstrap'
import "./PreSummary.scss"



const PerSummary = () => {
  return (
    <Container className='pre-summ py-5'>
        <div className='profile-box py-4'>
        <div className='d-flex justify-content-center  my-3'>
            <div className='profile '></div>
        </div>
        <h5 className='text-center'>Your personal info summary</h5>
        </div>
    </Container>
  )
}

export default PerSummary