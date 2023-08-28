import React from 'react'
import Helpbar from '../../CommonComponents/Helpbar'
import MaritalStatus from './MaritalStatus'
import "./InterviewHomepage.css"

const InterviewHomepage = () => {
  return (
    <div className='interview-homepage'>
      <div>
      <div >
         <Helpbar />
      </div>
      <div>
        <MaritalStatus />
      </div>
      </div>
      <div className='empty-size'>

      </div>
      <div className='text-center bottom-1 left-0 right-0'>
        <div className='my-5'>
          <p>License Agreement Privacy Statement Cobrowse</p>
          <p>© 2023 Intuit Canada ULC or one of its affiliates. All rights reserved.</p>
        </div>
      </div>
    </div>
    
  )
}

export default InterviewHomepage
