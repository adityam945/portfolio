import React, { useState } from 'react';
import { Document } from 'react-pdf';

import ResumePdf from "../../assets/ADITYAMADHUSUDHAN_resume.pdf"

function Resume() {

  
    return (
      <div>
       <iframe src={ResumePdf} style={{minHeight: "85vh", minWidth: "100%"}}/>

      </div>
    );
  }

  export default Resume