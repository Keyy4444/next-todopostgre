-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "isEdit" BOOLEAN NOT NULL,
    "isComplete" BOOLEAN NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);
