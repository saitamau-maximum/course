import { sqliteTable, text, blob, integer } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  imageUri: text("image_uri"),
});

export const session = sqliteTable("user_session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  activeExpires: blob("active_expires", {
    mode: "bigint",
  }).notNull(),
  idleExpires: blob("idle_expires", {
    mode: "bigint",
  }).notNull(),
});

export const key = sqliteTable("user_key", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  hashedPassword: text("hashed_password"),
});

export const course = sqliteTable("course", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  thumbnailUri: text("thumbnail_uri"),
});

export const section = sqliteTable("section", {
  id: text("id").primaryKey(),
  courseId: text("course_id")
    .notNull()
    .references(() => course.id),
  title: text("title").notNull(),
  description: text("description"),
});

export const userToCourse = sqliteTable("user_to_course", {
  userId: integer("user_id")
    .notNull()
    .references(() => user.id),
  courseId: integer("course_id")
    .notNull()
    .references(() => course.id),
});
