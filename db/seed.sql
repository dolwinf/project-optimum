-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: swapz
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (2,'Motors'),(3,'Home and Garden'),(4,'Electronics'),(5,'Sports'),(6,'Liquor'),(7,'Health and Beauty'),(8,'Toy and Hobbies'),(9,'Collectables');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `exchange_flow`
--

LOCK TABLES `exchange_flow` WRITE;
/*!40000 ALTER TABLE `exchange_flow` DISABLE KEYS */;
INSERT INTO `exchange_flow` VALUES (1,4,2);
/*!40000 ALTER TABLE `exchange_flow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (1,1,'https://i.ebayimg.com/images/g/uc0AAOSwd0tdsPSV/s-l1600.jpg','2019-11-07'),(2,1,'https://i.ebayimg.com/images/g/1psAAOSwfeddsPTE/s-l1600.jpg','2019-11-07'),(3,1,'https://i.ebayimg.com/images/g/G7IAAOSwA2hdsPSC/s-l1600.jpg','2019-11-07'),(4,2,'https://i.ebayimg.com/images/g/ST8AAOSwgNZdrnes/s-l1600.jpg','2019-11-07'),(5,2,'https://i.ebayimg.com/images/g/vrAAAOSwFZddrneo/s-l1600.jpg','2019-11-07'),(6,2,'https://i.ebayimg.com/images/g/yhkAAOSwg9RdrneL/s-l1600.jpg','2019-11-07');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,4,'iPhone 9','Almost new iPhone 9 in white with accessories included','available',800.00,'2019-11-07',1),(2,9,'1900 Stamp Collection','50 best condition stamp from 1900s Australia','available',1200.00,'2019-11-05',3),(3,4,'Samsung Note7','Has never caught on fire.','available',200.00,'2019-11-07',2),(4,4,'Hisense TV 48inche','Purchase 2015, rarely used.','available',1500.00,'2019-11-05',2);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `item_listing`
--

LOCK TABLES `item_listing` WRITE;
/*!40000 ALTER TABLE `item_listing` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_listing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `listing`
--

LOCK TABLES `listing` WRITE;
/*!40000 ALTER TABLE `listing` DISABLE KEYS */;
/*!40000 ALTER TABLE `listing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,1,'Pending','2019-11-07');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Mary','Smith','mary@hotmail.com',469555666,'90 Maria Parade, Sydney NSW 2000','90 Maria Parade, Sydney NSW 2000','mary3123'),(2,'David','Chan','david@gmail.com',469544446,'50 Peter St, Sydney NSW 2000','PO Box 501 Beverly Hills, NSW 2210','daviddavidamazing'),(3,'Ken','Taylor','Ken@gmail.com',461244446,'70 Prince Pde, Hornsby NSW 2520','PO Box 12 Hornsby, NSW 2695','dav3232dsmazing');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `wish`
--

LOCK TABLES `wish` WRITE;
/*!40000 ALTER TABLE `wish` DISABLE KEYS */;
INSERT INTO `wish` VALUES (1,2,'Toyota Camry 2001','Active',1),(2,4,'Samsung Note 7','Active',1);
/*!40000 ALTER TABLE `wish` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-07 20:40:41
