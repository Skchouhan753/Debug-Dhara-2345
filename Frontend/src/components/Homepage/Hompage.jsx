import React from 'react'
import OurPhilosophy from './OurPhilospy'
import TalkWithExpert from './TalkWithExpert'
import QA from './QA'
import DailyPlan from './DailyPlan'
import Network from './Network'
import GetResult from './GetResult'

function Hompage() {
  return (
    <div>
        <GetResult/>
        <DailyPlan/>
        <OurPhilosophy/>
        <Network/>
        <QA/>
        <TalkWithExpert/>

    </div>
  )
}

export default Hompage