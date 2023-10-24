/* svelte docs: A +page.svelte file can have a sibling +page.js 
that exports a load function, the return value of which is available 
to the page via the data prop */
import cheatsheets from "$lib/data/cheatsheets";

export const load = ({ params }) => {
  const cheatsheetForSite = cheatsheets.filter(
    (sheet) => sheet.category === params.slug
  );

  return {
    slug: params.slug,
    sheet: cheatsheetForSite,
  };
};
