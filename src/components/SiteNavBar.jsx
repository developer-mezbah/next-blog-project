"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SiteNavBar = () => {
  const currentRoute = usePathname()
  console.log(currentRoute);
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
          <ul className="flex px-1 space-x-3 text-xl">
            <li className="">
              <Link className={currentRoute === "/" ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]" : "py-2 px-4 rounded-xl"} href="/">Start</Link>
            </li>
            <li>
              <Link href="/team" className={currentRoute === "/team" ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]" : "py-2 px-4 rounded-xl"}>Team</Link>
            </li>
            <li>
              <Link className={currentRoute === "/services" ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]" : "py-2 px-4 rounded-xl"} href="/services">Services</Link>
            </li>
            <li>
              <Link className={currentRoute === "/projects" ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]" : "py-2 px-4 rounded-xl"} href="/projects">Projects</Link>
            </li>
            <li>
              <Link className={currentRoute === "/testimonials" ? "py-2 px-4 rounded-xl bg-[#00935F] text-white hover:bg-[#00935f48]" : "py-2 px-4 rounded-xl"} href="/testimonials">Testimonials</Link>
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
