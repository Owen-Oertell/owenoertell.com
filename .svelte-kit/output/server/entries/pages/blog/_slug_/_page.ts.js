import { d as data } from "../../../../chunks/posts.js";
function entries() {
  return data.posts.map((p) => ({ slug: p.slug }));
}
export {
  entries
};
