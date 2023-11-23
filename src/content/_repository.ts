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

export const getSectionsBySlug = async (courseSlug: string) => {
  const allCourseSections = await getCollection("course");
  const sections = allCourseSections.filter(
    (item) =>
      item.id.replace(CONTENT_SECTION_MATCHER, "$2") === courseSlug &&
      item.id.replace(CONTENT_SECTION_MATCHER, "$3") !== "index"
  );
  return sections;
};

export const getCourseBySlug = async (slug: string) => {
  const allCourseSections = await getCollection("course");
  const course = allCourseSections.find(
    (item) => item.id.replace(CONTENT_INDEX_MATCHER, "$2") === slug
  );
  return course;
};

export const getSectionBySlug = async (
  courseSlug: string,
  sectionSlug: string
) => {
  const allCourseSections = await getCollection("course");
  const section = allCourseSections.find(
    (item) =>
      item.id.replace(CONTENT_SECTION_MATCHER, "$2") === courseSlug &&
      item.id.replace(CONTENT_SECTION_MATCHER, "$3") === sectionSlug
  );
  return section;
};
