/*
  Warnings:

  - The `skills` column on the `Profile` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "skills",
ADD COLUMN     "skills" VARCHAR(255)[];

-- CreateTable
CREATE TABLE "Hobby" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "mediaUrl" VARCHAR(255),
    "mediaType" VARCHAR(255),
    "description" VARCHAR(255),
    "profileId" TEXT,

    CONSTRAINT "Hobby_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hobby" ADD CONSTRAINT "Hobby_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
