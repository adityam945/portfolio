import React, { useState } from 'react';
import { Document } from 'react-pdf';

import ResumePdf from "../../assets/myresume.pdf"

function PdfView(props) {

  
    return (
      <div>
       <iframe src={props.link} style={{minHeight: "85vh", minWidth: "100%"}}/>

      </div>
    );
  }

  export default PdfView