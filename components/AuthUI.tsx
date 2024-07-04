import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthUI = () => {
  const supabase = createClient(
    "https://ylndszogqxkjuqifxpjp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsbmRzem9ncXhranVxaWZ4cGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNTI2MDgsImV4cCI6MjAzMjYyODYwOH0.2U3NMbuzlfjERY4psHSD_Qn-xb5lYvAEY1PL52xVLMo"
  );
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={["kakao"]}
    />
  );
};

export default AuthUI;
