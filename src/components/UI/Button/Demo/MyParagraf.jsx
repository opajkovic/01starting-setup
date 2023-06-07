import React from 'react'

const MyParagraf = (props) => {
    console.log("MyParagraf running");
  return (
    <p>
      {props.children}
    </p>
  )
}

export default MyParagraf
