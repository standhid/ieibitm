import React from 'react'
import { TeamCard } from './Team'
const SponsorTeam = () => {
  return (
    <div className="container px-4 mb-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <TeamCard
              id="1"
              category="VICE PRESIDENT(FINANCE)"
              title="SATYAM SINGH"
              image="/team/team37.jpg"
              ihref="https://instagram.com/_itz_satyam_singh?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref=""
            />
            <TeamCard
              id="1"
              category="LOGISTICS HEAD"
              title="ASHUTOSH KUMAR"
              image="/team/team38.jpg"
              ihref="https://instagram.com/ashutosh._.garg?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/ashutosh-kumar-345764205"
            />
            <TeamCard
              id="1"
              category="RESOURCE HEAD"
              title="ATRI AMRIT SHARAN"
              image="/team/team39.jpg"
              ihref="https://instagram.com/atri_2811?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://linkedin.com/in/atri-amrit-sharan-b02013229/"
            />
            <TeamCard
              id="1"
              category="RESOURCE HEAD"
              title="VINIT VERMA"
              image="/team/team40.jpg"
              ihref="https://instagram.com/vinit.verma02?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/vinit-verma-a8365b209/"
            />
          </div>
        </div>
  )
}

export default SponsorTeam
