/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `projects` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `has_monit` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "aproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gestor_validate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "has_monit" BOOLEAN NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");
