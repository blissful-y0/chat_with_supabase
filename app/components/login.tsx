import { useOutletContext } from "@remix-run/react";
import type { SupabaseOutletContext } from "~/root";

function Login() {
  const { supabase } = useOutletContext<SupabaseOutletContext>();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      console.log({ error });
    }
  };

  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };
  return (
    <>
      <button id="login" onClick={handleLogin}>
        로그인
      </button>
      <button onClick={handleLogOut}>로그아웃</button>
    </>
  );
}

export default Login;
