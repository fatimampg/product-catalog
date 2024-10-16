CREATE TABLE `wishlists_to_products` (
	`wishlistId` text NOT NULL,
	`productId` text NOT NULL,
	FOREIGN KEY (`wishlistId`) REFERENCES `wishlists`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `wishlistProducts`;--> statement-breakpoint
ALTER TABLE `wishlists` ADD `createdById` text NOT NULL;--> statement-breakpoint
ALTER TABLE `wishlists` DROP COLUMN `userId`;