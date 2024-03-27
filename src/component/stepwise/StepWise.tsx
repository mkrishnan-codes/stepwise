import React from 'react'
import { IStep, ISteps } from './types'
import Step from './Step';

interface Props extends ISteps{
    config:IStep[];
    data:string[];
}

const StepWise = ({config, direction:flexDirection}: Props) => {
  return (
    <div style={{display:"flex", flexDirection}}>
        {
            config.map(
                ({id,...stp})=><Step {...stp} id={id} key={id}/>
            )
        }
    </div>
  )
}

export default StepWise