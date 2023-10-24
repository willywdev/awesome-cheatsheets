import { writable } from "svelte/store";

const slug = writable(null);

slug.subscribe((value) => {
  console.log(value);
});

slug.set(1);
