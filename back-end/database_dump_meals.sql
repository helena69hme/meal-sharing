CREATE DATABASE  IF NOT EXISTS `meal_sharing_db`;
USE `meal_sharing_db`;

DROP TABLE IF EXISTS `meal`;
CREATE TABLE `meal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `max_reservations` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6;

LOCK TABLES `meal` WRITE;

INSERT INTO `meal` VALUES (1,'bla bla bla',3),(2,'bla bla bla',3),(3,'asdasd',7),(4,'benjamins karry',10),(5,'oooooooooo',1);

UNLOCK TABLES;
