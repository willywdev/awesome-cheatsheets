/* svelte docs: A +page.svelte file can have a sibling +page.js 
that exports a load function, the return value of which is available 
to the page via the data prop */
import { supabase } from "$lib/supabaseClient.js";

export async function load({ params }) {
  const { data, error } = await supabase.from("cheatsheets").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return {
    cheatsheets: data,
    slug: params.slug,
  };
}
