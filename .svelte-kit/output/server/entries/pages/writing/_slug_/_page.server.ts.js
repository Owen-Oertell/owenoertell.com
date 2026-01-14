import { d as data } from "../../../../chunks/writing.js";
function entries() {
  return data.map((item) => ({ slug: item.slug }));
}
export {
  entries
};
