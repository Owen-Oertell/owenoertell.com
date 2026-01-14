import { d as data } from "../../../../chunks/pub_list.js";
function entries() {
  const allPapers = [
    ...data.papers2025,
    ...data.papers2024,
    ...data.papers2023
  ];
  return allPapers.map((p) => ({ slug: p.slug }));
}
export {
  entries
};
