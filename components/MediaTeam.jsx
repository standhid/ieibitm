import React from 'react'
import { TeamCard } from './Team'

const MediaTeam = () => {
  return (
    <div className="container px-4 mb-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <TeamCard
              id="1"
              category="VICE PRESIDENT(PUBLICITY)"
              title="SUDHIR RANA"
              image="/team/team22.jpg"
              ihref="https://instagram.com/sudhir.raina.129?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/sudhir-rana-a8a242193/"
            />
            <TeamCard
              id="2"
              category="PUBLICITY HEAD"
              title="JAY AGARWAL"
              image="/team/team23.jpg"
              ihref="https://instagram.com/jhakash__jay?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/jay-agarwal-574763205/"
            />
            <TeamCard
              id="3"
              category="PUBLICITY HEAD"
              title="ANIKET MITTAL"
              image="/team/team24.jpg"
              ihref="https://instagram.com/mittal5141?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/aniket-mittal-48ba20205/"
            />
          </div>
        </div>
  )
}

export default MediaTeam
