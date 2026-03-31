CREATE TABLE `availability` (
	`id` int AUTO_INCREMENT NOT NULL,
	`date` varchar(255) NOT NULL,
	`timeSlot` varchar(255) NOT NULL,
	`isAvailable` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `availability_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`serviceType` varchar(255) NOT NULL,
	`consultationType` enum('in-person','online') NOT NULL DEFAULT 'online',
	`preferredDate` varchar(255) NOT NULL,
	`preferredTime` varchar(255) NOT NULL,
	`message` text,
	`status` enum('pending','confirmed','cancelled','completed') NOT NULL DEFAULT 'pending',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
