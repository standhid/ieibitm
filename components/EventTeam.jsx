import React from 'react'
import { TeamCard } from './Team'
const EventTeam = () => {
  return (
    <div className="container px-4 mb-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <TeamCard
              id="1"
              category="VICE PRESIDENT(EVENTS)"
              title="ASHISH NAND"
              image="/team/team8.jpg"
              ihref=""
              fhref=""
              lhref="https://www.linkedin.com/in/ashish-nand-03b77b1b6/"
            />
            <TeamCard
              id="2"
              category="EVENT HEAD"
              title="AMIT KUMAR"
              image="/team/team9.jpg"
              ihref="https://instagram.com/livin_coollll?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref=""
            />
            <TeamCard
              id="3"
              category="EVENT HEAD"
              title="AMAN JAKHAR"
              image="/team/team10.jpg"
              ihref="https://instagram.com/amanjakhar26?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/aman-jakhar-06b4a2205/"
            />
            
          </div>
        </div>
  )
}

export default EventTeam
