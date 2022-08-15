import Image from 'next/image';
import Link from 'next/link';

function Links() {
  return (
    <div className="w-72">
      <div className="font-semibold text-white text-xl relative after:-bottom-2 after:absolute after:bg-blue-500 after:h-[2px] after:w-2/3 w-max after:left-0">
        Useful Links
      </div>
      <div className="flex gap-12">
        <div className="text-gray-400 mt-4 flex flex-col gap-2">
          <div className="cursor-pointer hover:text-white">
            <Link href="/">Home</Link>
          </div>
          <div className="cursor-pointer hover:text-white">
            <Link href="/#about">About</Link>
          </div>
          <div className="cursor-pointer hover:text-white">
            <Link href="/#contact">Contact</Link> Us
          </div>
        </div>
        <div className="text-gray-400 mt-4 flex flex-col gap-2">
          <div className="cursor-pointer hover:text-white">
            <Link href="/events">Events</Link>
          </div>
          <div className="cursor-pointer hover:text-white">
            <Link href="/team">Our Team</Link>
          </div>
          <div className="cursor-pointer hover:text-white">
            <Link href="/gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Follow() {
  return (
    <div className="w-72">
      <div className="font-semibold text-white text-xl relative after:-bottom-2 after:absolute after:bg-blue-500 after:h-[2px] after:w-2/3 w-max after:left-0">
        Follow us
      </div>
      <div className="mt-6 flex gap-4">
        <a href="https://www.instagram.com/iei_civil_bitmesra/?hl=en">
          <Image
            src="/follow/instagram.png"
            height={36}
            width={36}
            alt="instagram"
          />
        </a>
        <a href="https://www.facebook.com/IEI-BIT-Mesra-138812132818580/">
          <Image
            src="/follow/facebook.png"
            height={36}
            width={36}
            alt="facebook"
          />
        </a>
        <a href="https://www.youtube.com/channel/UC8SwZagpibYS4pYBignT0Mg">
          <Image
            src="/follow/youtube.png"
            height={36}
            width={36}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className="h-12 bg-neutral-800 text-gray-400 text-[10px] flex items-center justify-center sm:text-sm w-screen">
      Copyright © 2022, All Rights Reserved{' '}
      <span className="text-blue-500">&nbsp;IEI Civil BIT, Mesra</span>
    </div>
  );
}

function JoinClub() {
  // return (
  //   <div className="w-72">
  //     <div className="font-semibold text-white text-xl relative after:-bottom-2 after:absolute after:bg-blue-500 after:h-[2px] after:w-2/3 w-max after:left-0">
  //       For Updates
  //     </div>
  //     <div className="mt-4 flex gap-2 flex-col md:flex-row">
  //       <input
  //         type="text"
  //         placeholder="Email"
  //         className="outline-none p-2 w-2/3 rounded-sm"
  //       />
  //       <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 p-2 rounded-sm text-white w-24">
  //         Subscribe
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default function Footer() {
  return (
    <footer>
      <div className="w-screen bg-neutral-900 py-12 flex flex-row px-4 justify-around flex-wrap gap-16 relative">
        <Links />
        <JoinClub />
        <Follow />
      </div>
      <Copyright />
    </footer>
  );
}
