-- AlterTable
ALTER TABLE "Household" ADD COLUMN "maxAccompanyingGuests" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN "dietaryPreferences" TEXT,
ADD COLUMN "accessibilityRequirements" TEXT;

