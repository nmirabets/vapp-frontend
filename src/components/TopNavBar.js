import React from 'react';

function TopNavBar(props) {
  
  const { RightComponent, LeftComponent } = props;

  function onClickRight() {
    props.onClickRight()
  }

  function onClickLeft() {
    props.onClickLeft()
  }
  // fixed top-0 inset-x-0  
  return (
    <div className="bg-white">
      <div className= "fixed inset-x-0 flex h-15 py-2 items-center justify-center border-gray-600 border border-b-1 bg-primary bg-opacity-20">
        <LeftComponent title={props.leftTitle} className="flex w-1/4 m-4" onClick={onClickLeft} />
        <h1 className="flex justify-center flex-grow w-1/2 text-2xl font-extralight" >{props.mainTitle}</h1>
        <RightComponent title={props.rightTitle} className="flex w-1/4 justify-end m-4 " onClick={onClickRight} />
      </div>
    </div>
  );
}

export default TopNavBar;
