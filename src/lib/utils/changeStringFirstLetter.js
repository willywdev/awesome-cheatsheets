export default function changeStringFirstLetter(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();
  const slug = string.replace(string.charAt(0), firstLetter);

  return slug;
}
