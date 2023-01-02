/*
  Warnings:

  - The primary key for the `guestbook` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_guestbook" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "guestbook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_guestbook" ("body", "created_at", "email", "id", "updated_at", "userId") SELECT "body", "created_at", "email", "id", "updated_at", "userId" FROM "guestbook";
DROP TABLE "guestbook";
ALTER TABLE "new_guestbook" RENAME TO "guestbook";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
