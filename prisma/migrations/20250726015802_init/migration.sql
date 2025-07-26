-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "price" DECIMAL NOT NULL,
    "start_date" TIMESTAMPTZ(6),
    "end_time" TIMESTAMPTZ(6),
    "category" VARCHAR(100),
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" TEXT NOT NULL,
    "username" VARCHAR(20) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
