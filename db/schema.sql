CREATE DATABASE mimi_db;

USE mimi_db;

CREATE TABLE `account`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` varchar(40) NOT NULL,
  `password` TEXT NOT NULL,
  PRIMARY KEY(`id`)
);