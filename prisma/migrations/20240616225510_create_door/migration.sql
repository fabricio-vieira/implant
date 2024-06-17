-- CreateTable
CREATE TABLE "doors" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "range" INTEGER NOT NULL,
    "exit_control" BOOLEAN NOT NULL,
    "inside" BOOLEAN NOT NULL,
    "project_id" TEXT NOT NULL,

    CONSTRAINT "doors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "doors" ADD CONSTRAINT "doors_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
