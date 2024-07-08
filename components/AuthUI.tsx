import { createSupabaseBrowserClient } from "@/lib/client/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthUI = () => {
  const supabase = createSupabaseBrowserClient();
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={["kakao"]}
    />
  );
};

export default AuthUI;
