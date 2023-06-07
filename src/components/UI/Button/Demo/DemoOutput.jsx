import React from 'react';
import MyParagraf from './MyParagraf';

const DemoOutput = (props) => {
  console.log("DemoOutput running");
  return (
    <MyParagraf>
      {props.show ? "This is new!" : ""}
    </MyParagraf>
  )
}

export default React.memo(DemoOutput);
