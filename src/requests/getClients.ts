import { cookies } from "next/headers";
import { IClient } from "../../typings";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const getClients = async (): Promise<IClient[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getClients;
