import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";

export const organizations = pgTable("organization", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  industry: text("industry"),
  googleBusinessProfileUrl: text("googleBusinessProfileUrl"),
  timezone: text("timezone").default("Europe/Paris"),
  ownerId: text("ownerId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow(),
});
