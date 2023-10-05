/* svelte docs: A +page.svelte file can have a sibling +page.js 
that exports a load function, the return value of which is available 
to the page via the data prop */

export const load = ({ params }) => {
  return {
    slug: params.slug,
  };
};
