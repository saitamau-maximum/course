import { CONTENT_INDEX_MATCHER } from "@/config";
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
