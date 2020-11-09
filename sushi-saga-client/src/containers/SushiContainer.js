import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushis.map (sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} eaten={props.eaten}/>)
        }
        <MoreButton moreSushis={props.moreSushis}/>
      </div>
    </Fragment>
  )
}
export default SushiContainer