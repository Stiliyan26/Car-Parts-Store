/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");
