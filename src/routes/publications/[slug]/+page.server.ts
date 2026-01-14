import publications from "../pub_list.yaml";

export function entries() {
  const allPapers = [
    ...publications.papers2025,
    ...publications.papers2024,
    ...publications.papers2023
  ];

  return allPapers.map((p: { slug: string }) => ({ slug: p.slug }));
}
