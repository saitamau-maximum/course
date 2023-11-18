import { CONTENT_INDEX_MATCHER, CONTENT_SECTION_MATCHER } from "@/config";
import { getCollection } from "astro:content";

export const getIndexCourses = async () => {
  const allSections = await getCollection("course");
  const indexSections = allSections.filter((item) =>
    CONTENT_INDEX_MATCHER.test(item.id)
  );
  return indexSections.map((item) => ({
    ...item,
    slug: item.id.replace(CONTENT_INDEX_MATCHER, "$2"),
  }));
};

export const getCourse = async (slug: string) => {
  const allSections = await getCollection("course");
  const sections = allSections.filter(
    (item) => item.id.replace(CONTENT_SECTION_MATCHER, "$2") === slug
  );
  const orderSortedSections = sections.sort(
    (a, b) => (a.data.order || 0) - (b.data.order || 0)
  );
  return orderSortedSections.map((item) => ({
    ...item,
    slug: item.id.replace(CONTENT_SECTION_MATCHER, "$3"),
  }));
};
