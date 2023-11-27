"use client"
import Hover3d from "@/utils/hover"
import Image from "next/image"
import { useRef } from "react"


const HeroAnimation = ({data}) => {
    const hero = useRef(null)
    const hoverHero = Hover3d(hero, {
        x: 30,
        y: -40,
        z: 30,
      });
    
      const imageHover = Hover3d(hero, {
        x: 20,
        y: -5,
        z: 11,
      });
  return (
    <div ref={hero} className="flex justify-center items-center w-[80%] m-auto mt-10">
      <div className="w-full space-y-6">
        <p className="text-6xl">
          {data.title} problems{" "}
          <span className="text-[#269669]">problems</span>
        </p>
        <p>
          {data.description}
        </p>
        <div className="flex gap-5">
          <button className="btn btn-outline btn-success">Get started</button>
          <button className="btn btn-success">How it works</button>
        </div>
      </div>
      <div className="w-full" style={{transform: hoverHero.transform}}>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Image
              className="h-[300px] max-w-full rounded-lg object-cover"
              src={data.image1}
              width={500}
              height={300}
              alt="This is banner"
            />
          </div>
          <div>
            <Image
              className="h-[300px] max-w-full rounded-lg object-cover"
              src={data.image2}
              width={500}
              height={300}
              alt="This is banner"
            />
          </div>
          <div>
            <Image
              className="h-[300px] max-w-full rounded-lg object-cover"
              src={data.image3}
              width={500}
              height={300}
              alt="This is banner"
            />
          </div>
          <div>
            <Image
              className="h-[300px] max-w-full rounded-lg object-cover"
              src={data.image4}
              width={500}
              height={300}
              alt="This is banner"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroAnimation