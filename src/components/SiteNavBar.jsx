"use client";

import Image from "next/image";
import Link from "next/link";

const SiteNavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">
          {/* <img className='h-12' src='atis-assets/logo/atis/atis-mono-black.svg' alt='' width='auto'/> */}
            <Image
              src={"/atis-assets/logo/atis/atis-mono-sign.svg"}
              width={40}
              height={40}
              alt="This is Logo"
            />
            Atis
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-xl">
            <li>
              <Link href="/">Start</Link>
            </li>
            {/* <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-success text-white">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SiteNavBar;
