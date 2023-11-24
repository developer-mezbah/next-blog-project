import Image from "next/image";
async function getData(){
  const res = await fetch(process.env.BASE_URL+"api/HeroList")
  if(!res.ok){
    throw new Error("Data fething failed!!")
  }
  return res.json()
}
const Hero = async () => {
  const data = await getData()
  return (
    <div className="flex justify-center items-center w-[80%] m-auto mt-10">
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
      <div className="w-full">
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
  );
};

export default Hero;
