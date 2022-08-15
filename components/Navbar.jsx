import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

function NavItem({ name, link, setMenu }) {
  return (
    <Link href={link}>
      <div
        className="nav-links lg:rounded-sm overflow-hidden"
        onClick={() => {
          setMenu(false);
        }}
      >
        {name}
      </div>
    </Link>
  );
}
function NavItems({ menu, setMenu }) {
  return (
    <div
      className={`${
        menu ? '' : 'opacity-0 pointer-events-none'
      } bg-zinc-700 absolute right-8 top-16 w-44 flex flex-col gap-6 pl-4 py-4 lg:text-xl text-gray-300 rounded-b-lg transition-all duration-200 lg:opacity-100 uppercase lg:pointer-events-auto tracking-wider lg:flex-row lg:relative lg:p-0 lg:top-0 lg:bg-transparent lg:w-auto lg:rounded-none -z-10 shadow-md lg:shadow-none`}
    >
      <NavItem name="Home" link="/" setMenu={setMenu} />
      <NavItem name="About" link="/#about" setMenu={setMenu} />
      <NavItem name="Events" link="/events" setMenu={setMenu} />
      <NavItem name="Team" link="/team" setMenu={setMenu} />
      {/* <NavItem name="Gallery" link="/gallery" setMenu={setMenu} /> */}
      <NavItem name="Contact" link="/#contact" setMenu={setMenu} />
      
    </div>
  );
}

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar z-50 h-16 w-screen fixed flex items-center lg:justify-around px-4 bg-[#111] top-0 shadow-sm">
      <div className="logo cursor-pointer mt-1">
        <Link href="/">
          <Image src="/logo.png" height={78} width={78} alt="logo" />
        </Link>
      </div>
      <div
        className={`${
          menu ? 'hamburger-menu--active' : ''
        } hamburger-menu absolute right-8 lg:hidden group`}
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <div className="bar-top group-hover:bg-white"></div>
        <div className="bar-middle group-hover:bg-white"></div>
        <div className="bar-bottom group-hover:bg-white"></div>
      </div>
      <NavItems menu={menu} setMenu={setMenu} />
    </nav>
  );
}
