import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import supabase from "utils/supabase";

export const loader = async ({}: LoaderArgs) => {
  const { data } = await supabase.from("messages").select();

  return { messages: data ?? [] };
};

export default function Index() {
  const { messages } = useLoaderData<typeof loader>();

  console.log({ messages });
  return <pre>{JSON.stringify(messages, null, 2)}</pre>;
}
