"use client";
import Image from "next/image";

type Props = {
  params: {
    anime: string;
  };
};

const page = async ({ params }: Props) => {
  const apiString = "https://shikimori.one";
  const { anime } = params;
  const data = await fetch(`https://shikimori.one/api/animes/${anime}`);
  const res = await data.json();

  return (
    <div className="w-full h-full flex">
      <div className="w-full md:w-1/2">
        <div className="py-2">
          <h1 className="text-white text-3xl font-semibold capitalize">
            {res.name}
          </h1>
          <h3 className="text-white text-md  capitalize">{res.english}</h3>
        </div>
        <Image
          src={apiString + res.image.original}
          alt="img"
          width={800}
          height={800}
          className="w-[300px] aspect-auto"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex w-full gap-5 items-center py-4">
          <h1 className="capitalize px-3 py-2 rounded-md bg-green-500">
            {res.status}
          </h1>
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <h1 className="uppercase text-xl font-bold">{res.rating}</h1>
          </div>
          <h1 className="text-2xl">{res.score} ⭐</h1>
        </div>
        <p>{res.description}</p>
      </div>
    </div>
  );
};

export default page;
