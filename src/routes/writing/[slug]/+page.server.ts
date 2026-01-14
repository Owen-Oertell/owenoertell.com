import contentList from "../writing.yaml";

export function entries() {
  return contentList.map((item: { slug: string }) => ({ slug: item.slug }));
}
