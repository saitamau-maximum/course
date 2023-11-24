import { CONTENT_INDEX_MATCHER, CONTENT_SECTION_MATCHER } from "@/config";
import { getCollection, type CollectionEntry } from "astro:content";

export class CourseRepository {
  courses: CollectionEntry<"course">[];

  constructor(courses: CollectionEntry<"course">[]) {
    this.courses = courses;
  }

  static async create() {
    const courses = await getCollection("course");
    return new CourseRepository(courses);
  }

  getCourseBySlug(slug: string) {
    return this.courses.find(
      (item) => item.id.replace(CONTENT_INDEX_MATCHER, "$2") === slug
    );
  }

  getSectionsBySlug(slug: string) {
    return this.courses.filter(
      (item) =>
        item.id.replace(CONTENT_SECTION_MATCHER, "$2") === slug &&
        item.id.replace(CONTENT_SECTION_MATCHER, "$3") !== "index"
    );
  }

  getSectionBySlug(courseSlug: string, sectionSlug: string) {
    return this.courses.find(
      (item) =>
        item.id.replace(CONTENT_SECTION_MATCHER, "$2") === courseSlug &&
        item.id.replace(CONTENT_SECTION_MATCHER, "$3") === sectionSlug
    );
  }

  getIndexCourses() {
    return this.courses
      .filter((item) => CONTENT_INDEX_MATCHER.test(item.id))
      .map((item) => ({
        ...item,
        slug: item.id.replace(CONTENT_INDEX_MATCHER, "$2"),
      }));
  }
}
