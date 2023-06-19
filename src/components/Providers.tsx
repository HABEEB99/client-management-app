"use client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "../../types_db";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  );
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <ThemeProvider attribute="class">
        <Toaster />
        {children}
      </ThemeProvider>
    </SessionContextProvider>
  );
};

export default Providers;
