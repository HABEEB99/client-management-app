"use client";

import useImageLoader from "@/hooks/useImageLoader";
import { IClient } from "../../typings";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface IClientDetailsProp {
  data: IClient;
}

const ClientDetails: React.FC<IClientDetailsProp> = ({ data }) => {
  const avatarUrl = useImageLoader(data);
  return (
    <div className="w-full">
      <div className="relative w-full h-[30rem]  group flex flex-col  rounded-md overflow-hidden gap-x-4 bg-neutral-400 transition ">
        <div className="w-full h-full relative aspect-square rounded-t-md overflow-hidden">
          <Image src={avatarUrl!} alt="avatar" fill className="object-cover" />
        </div>
      </div>

      <div className="p-5 flex flex-col space-y-3">
        <h3>Name: {data.name}</h3>
        <h3>Organization: {data.organization}</h3>
        <h3>Contact: {data.contact}</h3>
        <h3>Assigned Staff: {data.assignedStaff}</h3>
        <h3>
          Status:
          <span
            className={`${
              data.status === "active"
                ? "text-green-500 font-bold text-2xl"
                : "text-red-500 font-bold text-2xl"
            } pl-1`}
          >
            {data.status}
          </span>
        </h3>
        {data.status === "active" ? (
          <CustomButton
            label="Change status to Inactive"
            styles="bg-red-600 w-full md:w-60"
          />
        ) : (
          <CustomButton
            label="Change status to active"
            styles="bg-green-600 w-full md:w-60"
          />
        )}
      </div>
    </div>
  );
};

export default ClientDetails;
