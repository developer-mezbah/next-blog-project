import Image from "next/image";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");
  if (!res.ok) {
    throw new Error("AllService Data fething failed!!");
  }
  return res.json();
}
const Services = async () => {
  const data = await getData();
  return (
    <div className="w-3/6 m-auto my-20">
      {/* Services Items  */}
      {data &&
        data.map((item) => (
          <div key={item.id} className="flex justify-center items-center my-5 py-5">
            <div className="">
              <div className="w-2/3 space-y-6">
                <span className="text-green-500 text-bold">
                  Lorem ipsum dolor sit amet.
                </span>
                <h1 className="text-5xl">
                  {
                    item.title
                  }
                </h1>
                <p>
                  {item.des}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <div>
                  <Image
                    src={
                      item.image1
                    }
                    width={200}
                    height={200}
                    alt="Services iamges"
                    className="h-auto max-w-full rounded-lg"
                  />
                </div>
                <div>
                  <Image
                    src={
                      item.image2
                    }
                    width={200}
                    height={500}
                    alt="Services iamges"
                    className="h-auto max-w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image
                    src={
                      item.image3
                    }
                    width={200}
                    height={500}
                    alt="Services iamges"
                    className="h-auto max-w-full rounded-lg"
                  />
                </div>
                <div>
                  <Image
                    src={
                      item.image4
                    }
                    width={200}
                    height={200}
                    alt="Services iamges"
                    className="h-auto max-w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Services;
