/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "skills" VARCHAR(255),
    "resume" VARCHAR(255),

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
