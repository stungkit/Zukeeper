import React from 'react';
import useExtensionStore from '../store/useExtensionStore';
import { useStore } from 'zustand';
import './StateDisplay.scss';

export const StateDisplay = () => {
  // grabbing all previous states from our store
  const { previousStates, actionIndex } = useStore(useExtensionStore);
  
  let currState: any
  // determine if there is an non-undefined value for the current state - which should be the last element of the array
  // if yes, grab that value, if no, return an empty array
  if (actionIndex !== null) {
    currState =  previousStates[actionIndex + 1];
  } else {
    currState = previousStates[previousStates.length - 1] ? previousStates[previousStates.length - 1] : []
  }
  const currStateArr: JSX.Element[] = [];

  for (let key in currState){
    const value = JSON.stringify(currState[key]).replaceAll(/,/g, ', ').replaceAll(/:/g, ': ');
    currStateArr.push(<div className="current-state-item" key={key} >{key}: {value}</div>);
  }

  return (
    <>
      <div className="current-state-container">
        {currStateArr}
      </div>
    </>
  );
};
