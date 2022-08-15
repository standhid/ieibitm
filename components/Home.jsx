import Image from "next/image";
import Contact from "./ContactUs";
import AboutSlider from "./AboutSlider";

const Front = () => {
  return (
    <div className="relative flex flex-col items-center px-8 h-[56rem] justify-center">

      <div className="relative flex justify-center flex-col items-center gap-10">
        <div className="relative h-72 w-72 rounded-full flex justify-center items-center ">
          <div className="absolute w-56 h-56 bg-black rounded-full shadow-md"></div>
          <Image
            src="/logo-home.webp"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative border-[2px] border-[#fff] p-6">
          <div className="md:text-6xl text-4xl text-cyan-600 staatlich font-light p-4 text-center tracking-wider">
            IEI Civil, BIT Mesra
          </div>
        </div>
      </div>

      <div className="relative my-12 text-center text-white px-8 max-w-xl">
        <div className="text-3xl staatlich">
          “Where tradition meets innovation”
        </div>
        <div className="mt-8">
        Since it's always worthwhile to be under construction, en route is some unflinching insights to muse the Civil Engineer within. Join us to cement the know-how with ease. With curiosity as your whet, Carpe Diem. </div>
      </div>
    </div>
  );
};

function WhyUs() {
  return (
    <div className="relative h-max overflow-hidden" id="about">
      <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
        <div className="relative text-justify bg-[#111] text-white p-8 rounded-md md:w-1/2 xl:w-auto">
          <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-blue-800 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            About Us
          </div>
          <div className="relative mt-16 max-w-7xl">
            The Institution of Engineers (India) [IEI] is a statutory body to promote and advance the engineering and technology, established in 1920 and incorporated by Royal Charter in 1935. We are a student's chapter of this esteemed organization and we are located at BIT Mesra, Ranchi, Jharkhand. Our aim is to provide an opportunity for technical growth, soft skills development, and industrial exposure to upcoming civil engineers of our institute. Each year we organize our very own tech-fest, AAROHAN, which is a three-day inter-college technical extravaganza to tempt your inquisitiveness to explore the techie side of you. Since it's always worthwhile to be under construction, en route is some unflinching insights to muse the Civil Engineer within. Join us to cement the know-how with ease.
          </div>
        </div>
        <div className="relative md:w-1/2 w-full flex rounded-md overflow-hidden justify-center items-center">
          <AboutSlider/>
        </div>
      </div>
    </div>
  );
}

const Vision = () => {
  return (
    <div className="relative h-max overflow-hidden">
      <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
        <div className="relative text-justify bg-[#111] text-white p-8 rounded-md max-w-4xl mx-auto">
          <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-blue-800 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            Our Vision
          </div>
          <div className="relative mt-16">
            Our vision is to serve the engineering fraternity with both technical and soft skills essential for a civil engineer to match up to the dogmas of professionals working in this domain and to inculcate the world of research in budding engineers so that they can contribute to the advancement of the nation and humanity.
          </div>
        </div>
      </div>
    </div>
  );
};

function FunNLearn() {
  return (
    <div className="relative h-max overflow-hidden">
    <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
      <div className="relative text-justify text-white p-8 rounded-md max-w-6xl mx-auto">
        <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
        </div>
        <div className="relative flex flex-col items-center md:flex-row gap-20 md:items-stretch w-full">
          <div className="md:w-1/2 bg-black text-white p-20 rounded-md">
          <div className="text-4xl text-white uppercase text-center staatlich relative w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mb-2">
          OUR HISTORY
        </div>
        The Institution of Engineers (India) [IEI] is the biggest multidisciplinary proficient authority of engineers, set up in 1920 with its Headquarters located in Kolkata and embodied under the royal charter on 9th September 1935 by the then His Majesty of King George V. The royal charter adorned the Institution with the obligation to improve the vast development of engineering amongst its members and persons connected to the Establishment. 
The Organization has been administering the engineering fraternity for over a Century with its national and international presence through 125 Centers dissipated all over India, 6 Overseas Chapters and an Organ namely Engineering Staff College of India, Hyderabad. The Institution incorporates (fifteen) engineering disciplines with an organization membership of over 2 lakhs.
    </div>
          <div className='md:w-1/2 bg-black text-white p-20 rounded-md'>
          <div className="text-4xl text-white uppercase text-center staatlich relative w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mb-2">
          WHY CIVIL?
        </div>
        Civil Engineering is a global profession and also a lucrative one. A civil engineer can be involved in diverse spectrum of companies. Being a civil engineer presents with numerous opportunities to work on distinctive projects including roadways, railways, bridges, commercial buildings, residential complexes,airports and even skybreaking skyscrapers. Civil engineers are the architect of any great nation's infrastructure. There is always going to be a need for well skilled and qualified personnel. The profession of civil engineering comprises a myriad of research domains in the worlds of hydraulics, structural analysis, geotechnology and many more. The World resides,innovate and progresses as a community on the creations of Civil Engineering. There is always a pool of opportunities to learn and grow.        
         </div>
        </div>
      </div>
    </div>
  </div>
  )
}

function Sponsor() {
  return (
    <div className="relative h-max overflow-hidden">
      <div className="relative flex py-12 px-6 h-full flex-col gap-4 md:flex-row">
        <div className="relative text-justify bg-[#111] text-white p-8 rounded-md max-w-4xl mx-auto">
          <div className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-blue-800 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            Want to Sponsor Us?
          </div>
          <div className="relative mt-16 flex justify-center">
            <a className="staatlich text-3xl py-4 px-8 bg-blue-500 text-white rounded-md cursor-pointer" href="https://forms.gle/h9c3epKkaGP1GXTP9">Click here</a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <Front />
      <WhyUs />
      <Vision />
      <FunNLearn/>
      <Sponsor />
      <Contact />
    </div>
  );
}
