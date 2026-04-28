import React from 'react'
import {ClipLoader} from "react-spinners";

export default function Loader() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#ff9900'
    }}>
      <ClipLoader />
    </div>
  )
}
