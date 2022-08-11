CREATE DATABASE mimi_db;

USE mimi_db;

CREATE TABLE `mimi`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY(`id`)
);