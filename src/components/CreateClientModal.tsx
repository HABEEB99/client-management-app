"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import uniqid from "uniqid";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { FiLoader } from "react-icons/fi";

import { useModalStore } from "@/store/modalStore";
import CustomButton from "./CustomButton";

enum StatusEnum {
  active = "active",
  inActive = "inActive",
}

enum AssignedStaffEnum {
  shanthriga = "shanthriga",
  abdul = "abdul",
  john = "john",
  nora = "nora",
  kelly = "kelly",
}

interface IFormData {
  name: string;
  contact: string;
  organization: string;
  assignedStaff: AssignedStaffEnum;
  status: StatusEnum;
  avatar: any;
}

const CreateClientModal = () => {
  const [loading, setLoading] = useState(false);
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const { toggleOpenModal } = useModalStore();

  const submitClient: SubmitHandler<IFormData> = async (data) => {
    try {
      setLoading(true);

      const avaterFile = data.avatar?.[0];
      const ID = uniqid();

      //   upload image to supabase bucket

      const { data: avatarData, error: avatarError } =
        await supabaseClient.storage
          .from("avatars")
          .upload(`avatar-${data.name}-${ID}`, avaterFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (avatarError) {
        setLoading(false);
        return toast.error(
          "An error occured while uploading the client avatar"
        );
      }

      const { error: dbError } = await supabaseClient.from("clients").insert({
        name: data.name,
        contact: data.contact,
        organization: data.organization,
        status: data.status,
        assignedStaff: data.assignedStaff,
        avatar: avatarData.path,
      });

      if (dbError) {
        setLoading(false);
        return toast.error("An error occured while creating client");
      }

      router.refresh();
      setLoading(false);
      toast.success("Client created successfully");
      reset();
      toggleOpenModal();
    } catch (error) {
      toast.error("Can't create a client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal">
      <div className="w-full md:w-[30rem] min-h-[10rem] flex flex-col p-3 m-4 space-y-3 bg-gray-800 rounded-md items-center justify-center">
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <FiLoader className="text-7xl text-green-400 animate-spin" />
            <span className="text-2xl animate-pulse text-green-600 font-bold">
              Adding client...
            </span>
          </div>
        ) : (
          <>
            <h2 className="text-icon font-bold text-xl">
              Input Client Details
            </h2>
            <form
              onSubmit={handleSubmit(submitClient)}
              className="w-full flex flex-col space-y-3"
            >
              <div>
                {errors.name && (
                  <span className="text-xs font-bold text-red-600 animate-pulse">
                    {errors.name.type === "required" &&
                      "The Name field can't be empty"}
                    {errors.name.type === "minLength" &&
                      "Name must be more than 4 characters"}
                  </span>
                )}
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true, minLength: 4 })}
                  placeholder="Add a Name"
                  className="w-full h-10 rounded-lg text-gray-500 bg-slate-100 px-2"
                />
              </div>

              <div>
                {errors.contact && (
                  <span className="text-xs font-bold text-red-600 animate-pulse">
                    {errors.contact.type === "required" &&
                      "The contact field can't be empty"}
                    {errors.contact.type === "minLength" &&
                      "contact must be 10 characters"}
                    {errors.contact.type === "maxLength" &&
                      "contact can't exceed 10 characters"}
                  </span>
                )}
                <input
                  id="contact"
                  type="text"
                  {...register("contact", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                  placeholder="Add a contact"
                  className="w-full h-10 rounded-lg text-gray-500 bg-slate-100 px-2"
                />
              </div>

              <div>
                {errors.organization && (
                  <span className="text-xs font-bold text-red-600 animate-pulse">
                    {errors.organization.type === "required" &&
                      "The organization field can't be empty"}
                    {errors.organization.type === "minLength" &&
                      "organization must be more than 4 characters"}
                  </span>
                )}
                <input
                  id="organization"
                  type="text"
                  {...register("organization", {
                    required: true,
                    minLength: 4,
                  })}
                  placeholder="Add a organization"
                  className="w-full h-10 rounded-lg text-gray-500 bg-slate-100 px-2"
                />
              </div>

              <div>
                {errors.assignedStaff && (
                  <span className="text-xs font-bold text-red-600 animate-pulse">
                    {errors.assignedStaff.type === "required" &&
                      "The assignedStaff field can't be empty"}
                  </span>
                )}
                <select
                  id="assignedStaff"
                  {...register("assignedStaff", { required: true })}
                  placeholder="Assign a User"
                  className="w-full h-10 rounded-lg gap-y-3 text-gray-500 bg-slate-100 px-2"
                >
                  <option value="" disabled selected hidden>
                    Assign a staff to client
                  </option>
                  <option value="shanthriga">shanthriga</option>
                  <option value="abdul">abdul</option>
                  <option value="john">john</option>
                  <option value="nora">nora</option>
                  <option value="kelly">kelly</option>
                </select>
              </div>

              <div>
                {errors.status && (
                  <span className="text-xs font-bold text-red-600 animate-pulse">
                    {errors.status.type === "required" &&
                      "The status field can't be empty"}
                  </span>
                )}
                <select
                  id="status"
                  {...register("status", { required: true })}
                  placeholder="Add a status"
                  className="w-full h-10 rounded-lg text-gray-500 bg-slate-100 px-2"
                >
                  <option value="" disabled selected hidden>
                    Select status
                  </option>
                  <option value="active">Active</option>
                  <option value="inActive">InActive</option>
                </select>
              </div>

              <div>
                {errors.avatar && (
                  <span className="text-xs font-bold text-red-600 animate-pulse">
                    {errors.avatar.type === "required" &&
                      "The avatar field can't be empty"}
                    {errors.avatar.type === "minLength" &&
                      "avatar must be more than 4 characters"}
                  </span>
                )}
                <input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  {...register("avatar", { required: true, minLength: 4 })}
                  placeholder="Add a avatar"
                  className="w-full h-10 rounded-lg text-gray-500 bg-slate-100 px-2"
                />
              </div>

              <div className="w-full flex items-center justify-center space-x-3">
                <CustomButton
                  label="Cancel"
                  styles=" bg-red-500 hover:bg-red-700 w-[50%]"
                  clickAction={toggleOpenModal}
                />

                <CustomButton label="Add Client" styles="w-[50%]" />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateClientModal;
