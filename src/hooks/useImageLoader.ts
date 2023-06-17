import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { IClient } from "../../typings";

const useImageLoader = (client: IClient) => {
  const supabaseClient = useSupabaseClient();

  if (!client) {
    return null;
  }

  const { data: avatarUrl } = supabaseClient.storage
    .from("avatars")
    .getPublicUrl(client.avatar);

  return avatarUrl.publicUrl;
};

export default useImageLoader;
