CREATE TABLE `product` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`price` integer NOT NULL,
	`category` text NOT NULL,
	`description` text,
	`image` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `wishlist` (
	`id` text PRIMARY KEY NOT NULL,
	`userId` text NOT NULL,
	`productId` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `wishlistProducts` (
	`id` text PRIMARY KEY NOT NULL,
	`wishlistId` text NOT NULL,
	`productId` text NOT NULL
);
