import { cookies } from "next/headers";
import { IClient } from "../../typings";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const getClient = async (id: string) => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("clients")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    console.log(error.message);
  }

  return data;
};

export default getClient;
