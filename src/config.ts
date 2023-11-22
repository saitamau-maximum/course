export const CONTENT_INDEX_MATCHER = /(.*\/)?(.*)\/index\.mdx?$/;
export const CONTENT_SECTION_MATCHER = /(.*\/)?(.*)\/(.*)\.mdx?$/;

export const SITE_TITLE = "Maximum Course";

export const CANONICALS = {
  HOME: "/",
  COURSE: "/course",
  COURSE_DETAIL_TOP: (courseSlug: string) => `/course/${courseSlug}`,
  COURSE_DETAIL: (courseSlug: string, sectionSlug: string) =>
    `/course/${courseSlug}/${sectionSlug}`,
  PROFILE: "/profile",
  LOGIN_GITHUB: "/login/github",
};
