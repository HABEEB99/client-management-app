"use client";

import Image from "next/image";
import { IClient } from "../../typings";
import useImageLoader from "@/hooks/useImageLoader";
import Link from "next/link";

interface IClientProps {
  data: IClient;
}

const Client: React.FC<IClientProps> = ({ data }) => {
  const avatarUrl = useImageLoader(data);
  return (
    <div className="relative w-full md:w-[18rem] lg:w-[15rem] h-[15rem]  group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400 transition ">
      <div className="w-full h-full relative aspect-square rounded-t-md overflow-hidden">
        <Image src={avatarUrl!} alt={data.name} fill className="object-cover" />
      </div>
      <div className="flex items-center justify-between my-2 w-full px-2">
        <h1>{data.name}</h1>
        <Link
          href={`/clients/${data.id}`}
          className="bg-transparent hover:bg-btn rounded-md hover:px-2"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Client;
