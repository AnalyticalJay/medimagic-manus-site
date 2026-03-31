CREATE TABLE `consultationTimeSlots` (
	`id` int AUTO_INCREMENT NOT NULL,
	`submissionId` int NOT NULL,
	`date` varchar(255) NOT NULL,
	`startTime` varchar(255) NOT NULL,
	`endTime` varchar(255) NOT NULL,
	`isBooked` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `consultationTimeSlots_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `onlineConsultationSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`serviceType` varchar(255) NOT NULL,
	`specificService` varchar(255),
	`briefDescription` text NOT NULL,
	`urgency` enum('low','medium','high') NOT NULL DEFAULT 'medium',
	`preferredContactMethod` enum('email','phone','both') NOT NULL DEFAULT 'email',
	`status` enum('pending','approved','rejected','scheduled','completed') NOT NULL DEFAULT 'pending',
	`adminNotes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `onlineConsultationSubmissions_id` PRIMARY KEY(`id`)
);
