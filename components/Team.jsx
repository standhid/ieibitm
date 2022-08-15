import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventTeam from "./EventTeam";
import CreativeTeam from "./CreativeTeam";
import MediaTeam from "./MediaTeam";
import TechTeam from "./TechTeam";
import SponsorTeam from "./SponsorTeam";

export function Heading({ heading, active }) {
  return (
    <div
      className={`sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r ${
        heading === active || heading === "Core Team"
          ? "text-white"
          : "text-gray-500"
      } after:from-blue-800 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-16`}
    >
      {heading}
    </div>
  );
}

export function TeamCard({ id, category, title, image, ihref, fhref, lhref }) {
  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full border-2 border-gray-200 bg-[#333] text-center border-opacity-60 rounded-lg overflow-hidden">
        <div className="flex justify-center overflow-hidden relative rounded-lg mx-auto ">
          <img
            className="w-full object-cover object-center"
            src={image}
            alt="team"
          />
        </div>
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {title}
          </h1>
        </div>
        <div className=" flex gap-4 justify-center mb-4">
          <a href={ihref}>
            <Image
              src="/follow/instagram.png"
              height={36}
              width={36}
              alt="instagram"
            />
          </a>

          <a href={fhref}>
            <Image
              src="/follow/gmail.png"
              height={36}
              width={36}
              alt="facebook"
            />
          </a>

          <a href={lhref}>
            <Image
              src="/follow/twitter.png"
              height={36}
              width={36}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

const DisplayTeam = ({ active }) => {
  if (active === "Tech Team") {
    return <TechTeam />;
  }
  if (active === "Creative Team") {
    return <CreativeTeam />;
  }
  if (active === "Publicity Team") {
    return <MediaTeam />;
  }
  if (active === "Event Team") {
    return <EventTeam />;
  }
  if (active === "Resource Team") {
    return <SponsorTeam />;
  }
};

const Team = () => {
  const [activeTab, setActiveTab] = useState("Tech Team");
  console.log(activeTab);
  return (
    <div className="relative top-12">
      <Heading heading="Core Team" />
      <div className="text-gray-600 body-font">
        <div className="container px-4 mt-16 mx-auto">
          <div className="flex flex-wrap -m-4">
          <TeamCard
              id="1"
              category="FACULTY ADVISOR"
              title="DR. SUKALYAN CHAKRABORTY"
              image="/team/team7.jpg"
              ihref=""
              fhref=""
              lhref="https://www.linkedin.com/in/sukalyan-chakraborty-79787117/"
            />
            <TeamCard
              id="2"
              category="PRESIDENT"
              title="ANSHU RAJ"
              image="/team/team1.jpg"
              ihref="https://instagram.com/anshuatulya_0904?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/anshu-raj-7176051b6/"
            />
            <TeamCard
              id="3"
              category="JOINT PRESIDENT"
              title="HARSH RAJ"
              image="/team/team2.jpg"
              ihref="https://instagram.com/harsh_rj11?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/harsh-raj-rj17/"
            />
            <TeamCard
              id="1"
              category="GENERAL SECRETARY"
              title="DHRUV PRAKASH CHOUDHARY"
              image="/team/team3.jpg"
              ihref="https://instagram.com/999dhruvvv?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/dhruv-prakash-choudhary-088762205/"
            />
            <TeamCard
              id="2"
              category="JOINT SECRETARY"
              title="MONALISHA MONDAL "
              image="/team/team4.jpg"
              ihref="https://instagram.com/monalishamondal321?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/monalisha-mondal-a0b4a0205/"
            />
            <TeamCard
              id="3"
              category="TREASURER"
              title="AYUSH RAJ"
              image="/team/team5.jpg"
              ihref="https://instagram.com/_ayush.raj07?igshid=YmMyMTA2M2Y="
              fhref=""
              lhref="https://www.linkedin.com/in/ayushraj07/"
            />
            <TeamCard
              id="1"
              category="JOINT TREASURER"
              title="RISHAV KUMAR MAHATO"
              image="/team/team6.jpg"
              ihref="https://www.linkedin.com/in/rishav-kumar-mahato-63a130219/"
              fhref=""
              lhref="https://www.linkedin.com/in/rishav-kumar-mahato-63a130219/"
            />
            
          </div>
        </div>
        <div className="flex justify-center gap-12 px-6 flex-wrap mb-24">
          <button
            className="cursor-pointer"
            onClick={() => setActiveTab("Tech Team")}
          >
            <Heading active={activeTab} heading="Tech Team" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setActiveTab("Creative Team")}
          >
            <Heading active={activeTab} heading="Creative Team" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setActiveTab("Publicity Team")}
          >
            <Heading active={activeTab} heading="Publicity Team" />
          </button>
          <buttton
            className="cursor-pointer"
            onClick={() => setActiveTab("Event Team")}
          >
            <Heading active={activeTab} heading="Event Team" />
          </buttton>
          <buttton
            className="cursor-pointer"
            onClick={() => setActiveTab("Resource Team")}
          >
            <Heading active={activeTab} heading="Resource Team" />
          </buttton>
        </div>
        <DisplayTeam active={activeTab} />
      </div>
    </div>
  );
};

export default Team;
