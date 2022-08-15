import React from 'react'
import { TeamCard } from './Team'

const TechTeam = () => {
  return (
    <div className="container px-4 mb-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <TeamCard
              id="1"
              category="TECH HEAD"
              title="ASHAR SHAKIL"
              image="/team/team18.jpg"
              ihref="https://www.instagram.com/ashar.shakil69/"
              fhref=""
              lhref="https://www.linkedin.com/in/ashar-shakil-710a1a205/"
            />
            <TeamCard
              id="2"
              category="TECH HEAD"
              title="SIDDHANT SRIVASTAVA"
              image="/team/team19.jpg"
              ihref="https://instagram.com/standhid?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/standhid/"
            />
            <TeamCard
              id="3"
              category="WEBSITE HANDLER"
              title="RAM KUMAR TOPPO"
              image="/team/team20.jpg"
              ihref="https://instagram.com/i_am_fif_sn?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/ram-kumar-toppo-bb4465190/"
            />
            <TeamCard
              id="1"
              category="WEBSITE HANDLER"
              title="ATHARVA JAISWAL"
              image="/team/team21.jpg"
              ihref=""
              fhref=""
              lhref="https://www.linkedin.com/in/atharva-jaiswal-229224193/"
            />
          </div>
        </div>
  )
}

export default TechTeam
