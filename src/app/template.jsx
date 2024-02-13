'use client';
import React, { useEffect } from 'react'

const Template = ({children}) => {

    useEffect(() => {
      require("preline/dist/preline.js");
    }, []);
    

  return (
    <>{children}</>
  )
}

export default Template