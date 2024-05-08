/*
  Warnings:

  - Made the column `name` on table `shelters` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `shelters` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `shelters` required. This step will fail if there are existing NULL values in that column.
  - Made the column `address` on table `shelters` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `shelters` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "shelters" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "phoneNumber" SET NOT NULL;
