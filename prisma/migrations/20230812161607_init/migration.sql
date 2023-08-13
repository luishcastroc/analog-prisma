-- CreateTable
CREATE TABLE "Note" (
    "id" STRING NOT NULL,
    "note" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
