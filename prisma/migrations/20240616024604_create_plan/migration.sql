-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "plan_id" TEXT;

-- CreateTable
CREATE TABLE "plans" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "license_cost" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "plans_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;
