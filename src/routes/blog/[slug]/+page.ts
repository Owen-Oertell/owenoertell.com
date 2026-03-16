import posts from "../posts.yaml";

export function entries() {
  return posts.posts.map((p: { slug: string }) => ({ slug: p.slug }));
}
