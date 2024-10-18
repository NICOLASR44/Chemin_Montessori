-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: chemin_montessori
-- ------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE="+00:00" */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE="NO_AUTO_VALUE_ON_ZERO" */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_post`
--

DROP TABLE IF EXISTS `blog_post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `published_date` timestamp NULL DEFAULT NULL,
  `updated_date` timestamp NULL DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `blog_post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_post`
--

LOCK TABLES `blog_post` WRITE;
/*!40000 ALTER TABLE `blog_post` DISABLE KEYS */;
INSERT INTO `blog_post` VALUES (1,"Encourager l'indépendance et l'apprentissage par l'exploration","# Encourager l'indépendance et l'apprentissage par l'exploration\n\nLa méthode Montessori est une approche éducative qui encourage les enfants à apprendre par des activités autodirigées, l'apprentissage pratique et le jeu collaboratif. Développée par le Dr Maria Montessori au début du 20e siècle, cette méthode se concentre sur le développement de l'indépendance, de la curiosité et du goût pour l'apprentissage chez les enfants dès leur plus jeune âge.\n\n## Les principes clés de la méthode Montessori\n\nUn apprentissage centré sur l'enfant : La méthode Montessori considère l'enfant comme un acteur actif de son apprentissage. Plutôt que de suivre un programme rigide, les environnements Montessori sont conçus pour permettre aux enfants d'explorer et d'apprendre à leur propre rythme.\n\nAutonomie et liberté : Les enfants sont encouragés à choisir les activités qu'ils souhaitent faire. Cette liberté favorise leur autonomie et renforce leur confiance en eux. L'idée est que l'enfant apprend mieux lorsqu'il est motivé par ses propres intérêts.\n\nDes matériaux pédagogiques adaptés : Les salles de classe Montessori sont remplies de matériels spécifiques qui stimulent l'exploration sensorielle et intellectuelle. Ces matériaux permettent aux enfants de comprendre des concepts abstraits à travers des manipulations concrètes.\n\nUn rôle d'observateur pour l'enseignant : L'enseignant dans une classe Montessori adopte un rôle d'accompagnateur. Son travail consiste à observer les besoins de chaque enfant et à lui proposer les outils et les activités nécessaires pour progresser.\n\n## Les bénéfices de la méthode Montessori\n\nDéveloppement de la confiance en soi : En permettant aux enfants de prendre des décisions et de résoudre des problèmes par eux-mêmes, la méthode renforce leur estime de soi.\nRespect du rythme de l'enfant : Chaque enfant progresse à son propre rythme, ce qui évite la pression liée aux performances et favorise un apprentissage en profondeur.\nApprentissage pratique : Les activités Montessori permettent aux enfants de toucher, de manipuler et d'expérimenter, rendant l'apprentissage concret et tangible.\n\n## Conclusion\n\nLa méthode Montessori offre une approche unique et efficace pour accompagner le développement des enfants. En les laissant évoluer à leur propre rythme dans un environnement riche et stimulant, elle favorise l'acquisition de compétences essentielles pour leur avenir, telles que l'indépendance, la curiosité et l'amour de l'apprentissage.","2024-09-13 10:00:00","2024-09-13 08:21:44",1,"/images/blog/img-card-slaze.jpeg"),(2,"L'apprentissage par l'autonomie","# L'apprentissage par l'autonomie\n\nLa méthode Montessori est une approche éducative fondée sur l'autonomie, l'exploration et le respect du rythme de chaque enfant. Créée par Maria Montessori au début du XXe siècle, cette méthode a révolutionné l'éducation en mettant l'enfant au cœur du processus d'apprentissage.\n\n## Les fondements de la méthode Montessori\n\nL'autonomie de l'enfant : L'un des principes fondamentaux de la méthode Montessori est de permettre aux enfants de devenir autonomes. Les salles de classe sont organisées de manière à ce que les enfants puissent choisir librement les activités qu'ils souhaitent réaliser, favorisant ainsi leur capacité à prendre des décisions et à apprendre de leurs propres expériences.\n\nUn environnement préparé : Dans une classe Montessori, tout est pensé pour encourager l'exploration et l'apprentissage. Les matériaux pédagogiques sont disposés de manière accessible pour que les enfants puissent les utiliser quand ils le souhaitent. Chaque activité a un objectif clair et permet à l'enfant de développer ses compétences tout en travaillant à son propre rythme.\n\nLe rôle de l'enseignant : Dans une approche Montessori, l'enseignant a un rôle d'accompagnateur et d'observateur. Il guide les enfants dans leur apprentissage sans les diriger, leur laissant la liberté de découvrir par eux-mêmes. L'enseignant est là pour fournir du soutien quand c'est nécessaire et pour s'assurer que chaque enfant progresse selon ses capacités.\n\n## Les avantages pour les enfants\n\nDéveloppement de l'autodiscipline : En ayant la liberté de choisir leurs activités, les enfants apprennent à gérer leur propre temps et à développer une autodiscipline qui leur sera utile tout au long de leur vie.\n\nApprentissage basé sur l'intérêt personnel : Les enfants sont naturellement curieux, et la méthode Montessori tire parti de cette curiosité en leur permettant d'explorer les sujets qui les intéressent. Cela rend l'apprentissage plus engageant et efficace.\n\nRenforcement des compétences sociales : Les enfants apprennent à travailler en groupe et à collaborer avec leurs camarades, développant ainsi des compétences sociales importantes telles que la communication et la coopération.\n\n## Conclusion\n\nLa méthode Montessori offre une approche éducative complète qui permet à chaque enfant de grandir et de se développer selon son propre rythme et ses propres intérêts. En favorisant l'autonomie, la curiosité et la responsabilité, elle donne aux enfants les bases nécessaires pour devenir des adultes confiants et épanouis.","2024-09-13 10:30:00","2024-09-13 08:23:43",1,"/images/blog/drawingchilds.jpeg");
/*!40000 ALTER TABLE `blog_post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `user_id` int NOT NULL,
  `workshop_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`workshop_id`),
  KEY `workshop_id` (`workshop_id`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`workshop_id`) REFERENCES `workshop` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,3),(1,6),(1,14);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `workshop_id` int NOT NULL,
  `order_date` timestamp NOT NULL,
  `order_total_amount` decimal(5,2) NOT NULL,
  `order_number` varchar(255) NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`),
  KEY `workshop_id` (`workshop_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`workshop_id`) REFERENCES `workshop` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` (user_id, workshop_id, order_date, order_total_amount, order_number) VALUES
(1, 1, "2024-09-20 14:30:00", 99.99, "ORD-202409201430-001"),
(1, 3, "2024-09-22 10:00:00", 49.99, "ORD-202409221000-002"),
(2, 2, "2024-09-21 09:15:00", 75.50, "ORD-202409210915-003"),
(2, 4, "2024-09-23 11:45:00", 60.00, "ORD-202409231145-004"),
(3, 1, "2024-09-24 08:30:00", 120.00, "ORD-202409240830-005"),
(3, 5, "2024-09-25 16:00:00", 85.00, "ORD-202409251600-006"),
(4, 3, "2024-09-26 13:20:00", 49.99, "ORD-202409261320-007"),
(4, 2, "2024-09-27 17:50:00", 99.99, "ORD-202409271750-008"),
(5, 6, "2024-09-28 12:00:00", 150.00, "ORD-202409281200-009"),
(5, 7, "2024-09-29 14:30:00", 200.00, "ORD-202409291430-010"),
(6, 8, "2024-09-20 09:00:00", 99.99, "ORD-202409200900-011"),
(6, 9, "2024-09-21 14:30:00", 120.00, "ORD-202409211430-012"),
(7, 10, "2024-09-22 11:45:00", 60.50, "ORD-202409221145-013"),
(7, 11, "2024-09-23 15:00:00", 85.75, "ORD-202409231500-014"),
(8, 12, "2024-09-24 08:15:00", 99.99, "ORD-202409240815-015"),
(8, 13, "2024-09-25 13:45:00", 50.00, "ORD-202409251345-016"),
(9, 14, "2024-09-26 12:30:00", 75.00, "ORD-202409261230-017"),
(9, 15, "2024-09-27 16:20:00", 110.00, "ORD-202409271620-018"),
(10, 16, "2024-09-28 10:00:00", 99.99, "ORD-202409281000-019"),
(10, 1, "2024-09-29 14:00:00", 45.50, "ORD-202409291400-020");
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resource` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `price_ht` decimal(5,2) DEFAULT NULL,
  `transcript_pdf` text,
  `file_zip` text,
  `workshop_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `workshop_id` (`workshop_id`),
  CONSTRAINT `resource_ibfk_1` FOREIGN KEY (`workshop_id`) REFERENCES `workshop` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resource`
--

LOCK TABLES `resource` WRITE;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO resource (title, description, price_ht, transcript_pdf, file_zip, workshop_id) VALUES
("Ressource pour Atelier Montessori débutants", "Ressource complémentaire pour les débutants en méthode Montessori", 0.00, "/files/pdfs/transcript1.pdf", "/files/zips/file1.zip", 1),
("Ressource pour Apprendre l’autonomie", "Ressource sur l’autonomie des enfants selon Montessori", 0.00, "/files/pdfs/transcript2.pdf", "/files/zips/file2.zip", 2),
("Ressource pour Montessori 0-3 ans", "Ressource sur la méthode Montessori pour les bébés et tout-petits", 0.00, "/files/pdfs/transcript3.pdf", "/files/zips/file3.zip", 3),
("Ressource pour Éducation sensorielle", "Ressource pour développer les sens avec Montessori", 0.00, "/files/pdfs/transcript4.pdf", "/files/zips/file4.zip", 4),
("Ressource pour Environnement Montessori à la maison", "Ressource sur l’aménagement de la maison selon Montessori", 0.00, "/files/pdfs/transcript5.pdf", "/files/zips/file5.zip", 5),
("Ressource pour Montessori et la créativité", "Ressource pour encourager la créativité avec Montessori", 0.00, "/files/pdfs/transcript6.pdf", "/files/zips/file6.zip", 6),
("Ressource pour Développer l’autonomie avec Montessori", "Ressource sur l’autonomie des enfants avec Montessori", 0.00, "/files/pdfs/transcript7.pdf", "/files/zips/file7.zip", 7),
("Ressource pour Montessori enfants à besoins spécifiques", "Ressource sur l’adaptation de Montessori pour enfants avec besoins spéciaux", 0.00, "/files/pdfs/transcript8.pdf", "/files/zips/file8.zip", 8),
("Ressource pour Atelier pratique Montessori enseignants", "Ressource pour les professionnels de l’éducation Montessori", 0.00, "/files/pdfs/transcript9.pdf", "/files/zips/file9.zip", 9),
("Ressource pour Mathématiques avec Montessori", "Ressource sur l’apprentissage des mathématiques avec Montessori", 0.00, "/files/pdfs/transcript10.pdf", "/files/zips/file10.zip", 10),
("Ressource pour Montessori adolescents", "Ressource sur l’utilisation de Montessori pour adolescents", 0.00, "/files/pdfs/transcript11.pdf", "/files/zips/file11.zip", 11),
("Ressource pour Discipline positive avec Montessori", "Ressource sur la discipline positive avec Montessori", 0.00, "/files/pdfs/transcript12.pdf", "/files/zips/file12.zip", 12),
("Ressource pour Le langage et Montessori", "Ressource sur l’apprentissage du langage avec Montessori", 0.00, "/files/pdfs/transcript13.pdf", "/files/zips/file13.zip", 13),
("Ressource pour Atelier Montessori en ligne", "Ressource en ligne pour les parents intéressés par Montessori", 0.00, "/files/pdfs/transcript14.pdf", "/files/zips/file14.zip", 14),
("Ressource pour Gestion du stress avec Montessori", "Ressource sur la gestion du stress des enfants avec Montessori", 0.00, "/files/pdfs/transcript15.pdf", "/files/zips/file15.zip", 15),
("Ressource pour Montessori pour familles nombreuses", "Ressource sur l’utilisation de Montessori dans les grandes familles", 0.00, "/files/pdfs/transcript16.pdf", "/files/zips/file16.zip", 16);
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(200) NOT NULL,
  `user_id` int NOT NULL,
  `workshop_id` int NOT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `workshop_id` (`workshop_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `review_ibfk_2` FOREIGN KEY (`workshop_id`) REFERENCES `workshop` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=118 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,"Très bonne introduction à la méthode Montessori. Je recommande !",2,1,1),(2,"Contenu clair et précis, parfait pour les débutants.",3,1,1),(3,"C’est intéressant, mais j’aurais aimé plus d’exemples pratiques.",4,1,1),(4,"Une explication très détaillée des principes Montessori.",5,1,1),(5,"Bonne présentation, mais un peu longue.",6,1,1),(6,"J’ai bien apprécié cette introduction à Montessori.",7,1,1),(7,"Excellent contenu pour favoriser l’autonomie des enfants.",2,2,1),(8,"J’ai mis en pratique ces conseils et ça fonctionne bien.",8,2,1),(9,"Un bon atelier, même si certaines parties manquent de profondeur.",9,2,1),(10,"Très utile pour apprendre à responsabiliser les enfants.",3,2,1),(11,"Les activités suggérées sont vraiment adaptées à l’enfant.",4,2,1),(12,"Bon contenu, mais j’aurais aimé plus d’exemples concrets.",5,2,1),(13,"Super vidéo pour comprendre comment appliquer Montessori dès le plus jeune âge.",6,3,1),(14,"Une excellente introduction aux tout-petits !",7,3,1),(15,"Bien, mais certains points auraient pu être davantage détaillés.",8,3,1),(16,"Mon bébé adore ces activités, merci !",9,3,1),(17,"Le contenu est très bien expliqué, je recommande.",2,3,1),(18,"Bon atelier, mais peut-être un peu trop théorique.",3,3,1),(19,"Les explications sont très claires et accessibles.",4,4,1),(20,"Une vidéo riche en enseignements pour développer les sens.",5,4,1),(21,"J’aurais aimé voir plus de démonstrations pratiques.",6,4,1),(22,"Vraiment intéressant, j’ai appris beaucoup de choses !",7,4,1),(23,"Très bon contenu pour comprendre les bases de l’éducation sensorielle.",8,4,1),(24,"La présentation est bien faite, mais un peu longue à mon goût.",9,4,1),(25,"J’ai pu mettre en place un coin Montessori à la maison, merci !",2,5,1),(26,"Une vidéo très pratique pour organiser l’espace à la maison.",3,5,1),(27,"Bon contenu, mais j’aurais aimé plus de conseils concrets.",4,5,1),(28,"Les astuces pour aménager une chambre Montessori sont excellentes.",5,5,1),(29,"Très utile, j’ai pu appliquer plusieurs conseils chez moi.",6,5,1),(30,"Quelques parties sont redondantes, mais globalement intéressant.",7,5,1),(31,"Cette vidéo a vraiment stimulé la créativité de mes enfants.",8,6,1),(32,"Les activités créatives suggérées sont faciles à mettre en place.",9,6,1),(33,"Bon contenu, mais j’aurais aimé voir plus d’exemples d’activités.",2,6,1),(34,"Super idées d’activités créatives à faire à la maison.",3,6,1),(35,"Mon enfant a adoré faire ces activités !",4,6,1),(36,"C’est intéressant, mais certaines parties manquent d’exemples concrets.",5,6,1),(37,"Une belle approche de la discipline avec Montessori.",2,12,1),(38,"La vidéo explique bien les bases de la discipline positive.",3,12,1),(39,"Un peu trop théorique à mon goût, mais intéressant.",4,12,1),(40,"Très utile pour comprendre comment appliquer la discipline positive.",5,12,1),(41,"J’ai appris beaucoup sur la gestion des conflits avec les enfants.",6,12,1),(42,"Bon contenu, mais parfois répétitif.",7,12,1),(43,"La discipline positive fonctionne vraiment bien avec mes enfants.",8,12,1),(44,"Les exemples concrets sont vraiment pratiques.",9,12,1),(45,"Intéressant, mais un peu long sur certains passages.",2,12,1),(46,"Je recommande cette vidéo pour tous les parents.",3,12,1),(47,"Très enrichissant pour appliquer la discipline Montessori à la maison.",4,12,1),(48,"Certains concepts sont un peu difficiles à appliquer.",5,12,1),(49,"Super vidéo pour développer le langage chez les enfants.",6,13,1),(50,"Les conseils sont simples à appliquer et efficaces.",7,13,1),(51,"Bien, mais j’aurais aimé plus d’exemples pratiques.",8,13,1),(52,"Les activités Montessori pour le langage sont excellentes.",9,13,1),(53,"J’ai appris de nouvelles méthodes pour stimuler le langage de mes enfants.",2,13,1),(54,"Vidéo intéressante mais un peu longue.",3,13,1),(55,"Très utile pour comprendre l’importance des objets dans l’apprentissage.",4,13,1),(56,"Bonne explication, j’ai hâte de tester les activités.",5,13,1),(57,"Le contenu est bon, mais il manque un peu de pratique.",6,13,1),(58,"Excellent pour les parents qui débutent avec Montessori.",7,14,1),(59,"Cette vidéo a répondu à beaucoup de mes questions.",8,14,1),(60,"Intéressant, mais un peu trop général.",9,14,1),(61,"Les fondamentaux sont bien expliqués, merci !",2,14,1),(62,"J’ai pu appliquer plusieurs conseils avec mes enfants.",3,14,1),(63,"Vidéo un peu longue, mais le contenu est intéressant.",4,14,1),(64,"Très pratique pour répondre aux questions des parents.",5,14,1),(65,"J’ai appris plein de nouvelles choses sur Montessori.",6,14,1),(66,"Contenu clair mais manque un peu d’exemples.",7,14,1),(67,"Les erreurs à éviter sont bien expliquées.",8,14,1),(68,"Une vidéo indispensable pour les parents débutants.",9,14,1),(69,"Bon contenu, mais quelques passages sont redondants.",2,14,1),(70,"Très bonne vidéo pour aider les enfants à se relaxer.",3,15,1),(71,"Les techniques Montessori pour la gestion du stress sont très efficaces.",4,15,1),(72,"J’aurais aimé plus d’exemples d’activités pratiques.",5,15,1),(73,"Les outils pour la relaxation sont très bien expliqués.",6,15,1),(74,"Contenu très enrichissant, merci !",7,15,1),(75,"Certains concepts sont un peu trop théoriques.",8,15,1),(76,"Les activités apaisantes fonctionnent très bien avec mes enfants.",9,15,1),(77,"Une vidéo très intéressante pour aider les enfants à gérer leur stress.",2,15,1),(78,"J’aurais préféré plus de démonstrations pratiques.",3,15,1),(79,"Très utile pour organiser une maison Montessori avec plusieurs enfants.",4,16,1),(80,"Le contenu est pratique et bien expliqué.",5,16,1),(81,"J’aurais aimé plus d’exemples d’aménagement.",6,16,1),(82,"Les activités pour les fratries sont excellentes.",7,16,1),(83,"Mes enfants adorent ces activités Montessori.",8,16,1),(84,"Quelques répétitions dans la présentation, mais globalement bon.",9,16,1),(85,"Les conseils pour gérer les conflits entre enfants sont très utiles.",2,16,1),(86,"Excellente vidéo pour gérer une famille nombreuse avec Montessori.",3,16,1),(87,"Vidéo intéressante, mais j’aurais aimé plus d’exemples concrets.",4,16,1),(88,"Les techniques pour encourager la coopération sont bien expliquées.",5,16,1),(89,"Mes enfants coopèrent beaucoup mieux après avoir appliqué ces conseils.",6,16,1),(90,"Certains conseils sont bons, mais globalement un peu répétitifs.",7,16,1),(91,"Atelier incroyable, j'ai beaucoup appris ! Le formateur était clair et les ressources utiles.",1,7,1),(92,"Très bonne expérience, je recommande pour les débutants comme pour les plus avancés.",2,7,1),(93,"J'ai adoré les vidéos, elles m'ont permis de mieux comprendre certains concepts complexes.",3,7,1),(94,"Contenu de qualité, mais quelques points mériteraient d'être approfondis.",4,8,1),(95,"Excellente pédagogie, le formateur a bien pris le temps d'expliquer chaque étape.",5,8,1),(96,"L'atelier a répondu à toutes mes attentes, vraiment top.",6,8,1),(97,"J'ai trouvé l'atelier un peu trop basique pour mon niveau.",7,9,1),(98,"Les exercices pratiques étaient bien pensés et m'ont permis de progresser rapidement.",8,9,1),(99,"Atelier très bien structuré, je le recommanderais à mes collègues.",9,9,1),(112,"Le format en ligne est pratique, mais j'aurais aimé plus d'interaction en direct.",5,10,1),(113,"Très bon contenu, j'ai particulièrement apprécié les vidéos explicatives.",6,10,1),(114,"Atelier complet, parfait pour approfondir mes connaissances.",7,10,1),(115,"J'ai appris énormément de nouvelles choses, je suis très satisfait.",8,11,1),(116,"Les supports de cours étaient clairs et très bien faits.",9,11,1),(117,"Le formateur est très compétent, atelier très enrichissant.",4,11,1);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `forget_password` varchar(255) DEFAULT NULL,
  `avatar` text,
  `created_on` timestamp NULL DEFAULT NULL,
  `updated_on` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `status` enum("active","inactive","banned","admin") NOT NULL,
  `newsletter` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,"Sophie","Martin","smartin","admin@chemin-montessori.fr","adminpassword",NULL,"/images/avatar/w1.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"admin",0),(2,"Jean","Dupont","jdupont","jdupont@gmail.com","password123",NULL,"/images/avatar/m1.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",1),(3,"Marie","Martin","mmartin","mmartin@yahoo.fr","password123",NULL,"/images/avatar/w2.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",0),(4,"Pierre","Durand","pdurand","pdurand@hotmail.com","password123",NULL,"/images/avatar/m2.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",1),(5,"Sophie","André","sandre","sandre@gmail.com","password123",NULL,"/images/avatar/w3.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",1),(6,"Lucas","Moreau","lmoreau","lmoreau@example.com","password123",NULL,"/images/avatar/m3.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",1),(7,"Claire","Dubois","cdubois","cdubois@example.com","password123",NULL,"/images/avatar/w4.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",0),(8,"Antoine","Bernard","abernard","abernard@example.com","password123",NULL,"/images/avatar/m4.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",0),(9,"Camille","Roux","croux","croux@example.com","password123",NULL,"/images/avatar/w5.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",1),(10,"Julien","Girard","jgirard","jgirard@example.com","password123",NULL,"/images/avatar/m5.jpg","2024-09-09 13:07:09","2024-09-09 13:07:09",1,"active",0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` text,
  `source` text NOT NULL,
  `duration` int DEFAULT NULL,
  `image` text,
  `workshop_id` int NOT NULL,
  `section` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `workshop_id` (`workshop_id`),
  CONSTRAINT `video_ibfk_1` FOREIGN KEY (`workshop_id`) REFERENCES `workshop` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,"Introduction à la méthode Montessori","Présentation des bases de la méthode Montessori pour débutants.","intro_montessori.mp4",12,"/images/workshop/w1-1.webp",1,1),(2,"Les principes fondamentaux","Une explication des principes de base de la méthode Montessori.","principes_montessori.mp4",15,"/images/workshop/w1-2.webp",1,2),(3,"Encourager l’autonomie","Comment favoriser l’autonomie de l’enfant selon Montessori.","autonomie_montessori.mp4",18,"/images/workshop/w2-1.webp",2,1),(4,"Activités pour développer l’autonomie","Des exemples d’activités Montessori pour encourager l’autonomie.","activites_autonomie.mp4",22,"/images/workshop/w2-2.webp",2,2),(5,"Montessori pour les bébés","Introduction à l’application de la méthode Montessori chez les bébés.","montessori_bebes.mp4",20,"/images/workshop/w3-1.webp",3,1),(6,"Activités sensorielles pour les tout-petits","Comment stimuler les sens des tout-petits avec Montessori.","activites_sensorielle_03ans.mp4",25,"/images/workshop/w3-2.webp",3,2),(7,"L’importance de l’environnement","Adapter l’environnement des bébés et jeunes enfants selon Montessori.","environnement_bebes.mp4",15,"/images/workshop/w3-3.webp",3,3),(8,"Développer les sens grâce à Montessori","Comment utiliser Montessori pour stimuler les sens des enfants.","developper_sens_montessori.mp4",16,"/images/workshop/w4-1.webp",4,1),(9,"Matériel Montessori pour l’éducation sensorielle","Présentation du matériel sensoriel Montessori.","materiel_sensoriel.mp4",20,"/images/workshop/w4-2.webp",4,2),(10,"Aménager une chambre Montessori","Conseils pour aménager une chambre adaptée à Montessori.","chambre_montessori.mp4",24,"/images/workshop/w5-1.webp",5,1),(11,"Matériel Montessori à domicile","Quels matériaux utiliser pour appliquer Montessori à la maison.","materiel_maison.mp4",18,"/images/workshop/w5-2.webp",5,2),(12,"Encourager l’indépendance à la maison","Techniques pour encourager l’indépendance de votre enfant à la maison.","independance_maison.mp4",17,"/images/workshop/w5-3.webp",5,3),(13,"Exemples pratiques pour l’aménagement","Des exemples concrets d’aménagement Montessori à domicile.","exemples_pratiques_maison.mp4",22,"/images/workshop/w5-4.webp",5,4),(14,"Créer un espace d’apprentissage","Comment organiser un espace d’apprentissage adapté aux enfants.","espace_apprentissage.mp4",20,"/images/workshop/w5-5.webp",5,5),(15,"Favoriser la créativité des enfants","Les techniques Montessori pour encourager la créativité.","creativite_montessori.mp4",21,"/images/workshop/w6-1.webp",6,1),(16,"Activités créatives avec Montessori","Des exemples d’activités pour stimuler la créativité.","activites_creatives.mp4",19,"/images/workshop/w6-2.webp",6,2),(17,"L’art et Montessori","Comment intégrer l’art dans l’apprentissage Montessori.","art_montessori.mp4",24,"/images/workshop/w6-3.webp",6,3),(18,"Développement personnel à travers la créativité","Utiliser la créativité pour le développement personnel.","developpement_personnel_creativite.mp4",18,"/images/workshop/w6-4.webp",6,4),(19,"Développer l’autonomie chez l’enfant","Comment appliquer la méthode Montessori pour renforcer l’autonomie.","autonomie_enfant.mp4",23,"/images/workshop/w7-1.webp",7,1),(20,"Activités pratiques pour l’autonomie","Présentation d’activités pratiques favorisant l’autonomie.","activites_pratiques.mp4",26,"/images/workshop/w7-2.webp",7,2),(21,"Les erreurs courantes à éviter","Ce qu’il faut éviter pour encourager correctement l’autonomie.","erreurs_autonomie.mp4",15,"/images/workshop/w7-3.webp",7,3),(22,"Apprendre à se gérer seul","Comment aider l’enfant à apprendre à se gérer par lui-même.","se_gere_seul.mp4",22,"/images/workshop/w7-4.webp",7,4),(23,"Exemples concrets d’autonomie","Des exemples de réussites en autonomie chez les enfants.","exemples_autonomie.mp4",20,"/images/workshop/w7-5.webp",7,5),(24,"Adapter Montessori aux besoins spécifiques","Comment adapter la méthode Montessori aux enfants ayant des besoins particuliers.","adaptation_besoins_specifiques.mp4",20,"/images/workshop/w8-1.webp",8,1),(25,"Études de cas","Exemples d’adaptation Montessori pour des enfants à besoins spécifiques.","etudes_cas.mp4",25,"/images/workshop/w8-2.webp",8,2),(26,"Stratégies d’adaptation","Stratégies concrètes pour adapter l’environnement Montessori.","strategies_adaptation.mp4",18,"/images/workshop/w8-3.webp",8,3),(27,"Soutenir les familles d’enfants à besoins spécifiques","Comment soutenir les familles et les enfants avec Montessori.","soutien_famille.mp4",27,"/images/workshop/w8-4.webp",8,4),(28,"Montessori dans une classe","Appliquer la méthode Montessori dans une salle de classe.","montessori_classe.mp4",30,"/images/workshop/w9-1.webp",9,1),(29,"Exemples pratiques pour les enseignants","Des exemples concrets pour les enseignants souhaitant utiliser Montessori.","exemples_pratiques.mp4",28,"/images/workshop/w9-2.webp",9,2),(30,"Organiser l’espace de classe","Comment organiser l’espace de la classe selon Montessori.","organisation_classe.mp4",18,"/images/workshop/w9-3.webp",9,3),(31,"Méthodes avancées Montessori","Des méthodes avancées pour appliquer Montessori en classe.","methodes_avancees.mp4",24,"/images/workshop/w9-4.webp",9,4),(32,"Évaluation des enfants avec Montessori","Comment évaluer les enfants en utilisant la méthode Montessori.","evaluation_montessori.mp4",22,"/images/workshop/w9-5.webp",9,5),(33,"Introduction aux mathématiques avec Montessori","Présentation des principes Montessori pour l’apprentissage des mathématiques.","maths_montessori.mp4",24,"/images/workshop/w10-1.webp",10,1),(34,"Les outils mathématiques Montessori","Présentation des outils Montessori pour enseigner les mathématiques.","outils_maths.mp4",22,"/images/workshop/w10-2.webp",10,2),(35,"Exercices pratiques","Exemples d’exercices pratiques pour les mathématiques Montessori.","exercices_maths.mp4",27,"/images/workshop/w10-3.webp",10,3),(36,"Résoudre des problèmes mathématiques","Techniques Montessori pour résoudre des problèmes mathématiques.","problemes_maths.mp4",19,"/images/workshop/w10-4.webp",10,4),(37,"Appliquer Montessori pour les adolescents","Adapter la méthode Montessori pour les adolescents.","montessori_adolescents.mp4",28,"/images/workshop/w11-1.webp",11,1),(38,"Favoriser la responsabilité chez les adolescents","Techniques pour encourager la responsabilité et l’indépendance.","responsabilite_adolescents.mp4",25,"/images/workshop/w11-2.webp",11,2),(39,"Encourager la pensée critique","Comment développer la pensée critique chez les adolescents avec Montessori.","pensee_critique.mp4",20,"/images/workshop/w11-3.webp",11,3),(40,"Gestion des émotions chez les adolescents","Utiliser Montessori pour aider les adolescents à gérer leurs émotions.","gestion_emo_adolescents.mp4",23,"/images/workshop/w11-4.webp",11,4),(41,"La discipline positive expliquée","Les bases de la discipline positive avec Montessori.","discipline_positive.mp4",18,"/images/workshop/w12-1.webp",12,1),(42,"Techniques de discipline Montessori","Techniques pratiques de discipline positive.","techniques_discipline.mp4",20,"/images/workshop/w12-2.webp",12,2),(43,"Gérer les conflits avec la discipline positive","Apprendre à gérer les conflits avec les principes Montessori.","conflits_discipline.mp4",22,"/images/workshop/w12-3.webp",12,3),(44,"Exemples concrets de discipline positive","Des exemples pratiques de discipline positive appliquée.","exemples_discipline.mp4",24,"/images/workshop/w12-4.webp",12,4),(45,"Développement du langage avec Montessori","Utiliser Montessori pour stimuler le développement du langage.","langage_montessori.mp4",19,"/images/workshop/w13-1.webp",13,1),(46,"Activités linguistiques Montessori","Des activités Montessori spécifiques au développement du langage.","activites_linguistiques.mp4",21,"/images/workshop/w13-2.webp",13,2),(47,"Exercices pratiques pour le langage","Exemples d’exercices Montessori pour améliorer les compétences linguistiques.","exercices_langage.mp4",24,"/images/workshop/w13-3.webp",13,3),(48,"Utilisation des objets pour le développement du langage","Utiliser des objets Montessori pour encourager le langage.","objets_langage.mp4",22,"/images/workshop/w13-4.webp",13,4),(49,"Introduction à Montessori pour les parents","Un guide pour les parents débutants avec Montessori.","montessori_parents_intro.mp4",22,"/images/workshop/w14-1.webp",14,1),(50,"Les fondamentaux de Montessori à la maison","Les principes clés de la méthode Montessori à appliquer à domicile.","fondamentaux_parents.mp4",26,"/images/workshop/w14-2.webp",14,2),(51,"Questions fréquentes des parents","Réponses aux questions fréquentes posées par les parents sur Montessori.","faq_parents.mp4",17,"/images/workshop/w14-3.webp",14,3),(52,"Les erreurs à éviter en tant que parent","Conseils pour éviter les erreurs courantes lorsque les parents appliquent Montessori à la maison.","erreurs_parents.mp4",21,"/images/workshop/w14-4.webp",14,4),(53,"Appliquer Montessori à la vie quotidienne","Comment intégrer les principes Montessori dans la vie quotidienne.","montessori_quotidien.mp4",24,"/images/workshop/w14-5.webp",14,5),(54,"Gérer le stress des enfants avec Montessori","Techniques Montessori pour gérer le stress des enfants.","gestion_stress_montessori.mp4",20,"/images/workshop/w15-1.webp",15,1),(55,"Apprendre aux enfants à se relaxer","Des activités Montessori pour aider les enfants à se relaxer.","relaxation_montessori.mp4",23,"/images/workshop/w15-2.webp",15,2),(56,"Outils pratiques pour la relaxation","Présentation des outils Montessori pour la gestion du stress.","outils_relaxation.mp4",19,"/images/workshop/w15-3.webp",15,3),(57,"Exemples d’activités apaisantes","Exemples d’activités Montessori favorisant le calme et la concentration.","activites_apaisantes.mp4",22,"/images/workshop/w15-4.webp",15,4),(58,"Organiser une maison Montessori avec plusieurs enfants","Conseils pour appliquer Montessori dans une famille nombreuse.","organisation_famille_nombreuse.mp4",27,"/images/workshop/w16-1.webp",16,1),(59,"Activités Montessori pour frères et sœurs","Des activités adaptées pour plusieurs enfants avec la méthode Montessori.","activites_famille_nombreuse.mp4",24,"/images/workshop/w16-2.webp",16,2),(60,"Gestion des conflits entre frères et sœurs","Comment gérer les conflits entre frères et sœurs en utilisant Montessori.","conflits_fratrie.mp4",20,"/images/workshop/w16-3.webp",16,3),(61,"Encourager la coopération entre les enfants","Techniques Montessori pour encourager la coopération entre les enfants.","cooperation_freres.mp4",22,"/images/workshop/w16-4.webp",16,4);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workshop`
--

DROP TABLE IF EXISTS `workshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workshop` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price_ht` decimal(5,2) NOT NULL,
  `tva` decimal(5,2) NOT NULL DEFAULT 20.00,
  `description` text NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workshop`
--

LOCK TABLES `workshop` WRITE;
/*!40000 ALTER TABLE `workshop` DISABLE KEYS */;
INSERT INTO `workshop` VALUES (1,"Atelier Montessori pour débutants",0.00,0.00,"Découvrir les bases de la méthode Montessori.","/images/workshop/w1-1.webp"),(2,"Apprendre l’autonomie à votre enfant",0.00,0.00,"L’autonomie des enfants selon la méthode Montessori.","/images/workshop/w2-1.webp"),(3,"Montessori pour les 0-3 ans",0.00,0.00,"Appliquer la méthode Montessori aux bébés et tout-petits.","/images/workshop/w3-1.webp"),(4,"Éducation sensorielle selon Montessori",0.00,0.00,"Comprendre comment la méthode Montessori développe les sens.","/images/workshop/w4-1.webp"),(5,"Créer un environnement Montessori à la maison",50.00,20.00,"Comment aménager une maison adaptée à la méthode Montessori.","/images/workshop/w5-1.webp"),(6,"Montessori et la créativité",45.00,20.00,"Utiliser la méthode Montessori pour favoriser la créativité des enfants.","/images/workshop/w6-1.webp"),(7,"Développer l’autonomie avec Montessori",60.00,20.00,"Favoriser l’autonomie des enfants.","/images/workshop/w7-1.webp"),(8,"Montessori pour les enfants à besoins spécifiques",70.00,20.00,"Comment adapter Montessori aux enfants ayant des besoins particuliers.","/images/workshop/w8-1.webp"),(9,"Atelier pratique Montessori pour les enseignants",100.00,20.00,"Atelier pratique pour les professionnels de l’éducation.","/images/workshop/w9-1.webp"),(10,"Les mathématiques avec Montessori",80.00,20.00,"Utiliser la méthode Montessori pour apprendre les mathématiques.","/images/workshop/w10-1.webp"),(11,"Montessori pour les adolescents",90.00,20.00,"Appliquer Montessori pour les adolescents en développement.","/images/workshop/w11-1.webp"),(12,"La discipline positive avec Montessori",55.00,20.00,"Apprendre la discipline positive en se basant sur Montessori.","/images/workshop/w12-1.webp"),(13,"Le langage et Montessori",85.00,20.00,"Apprendre à utiliser la méthode Montessori pour le développement du langage.","/images/workshop/w13-1.webp"),(14,"Atelier Montessori en ligne pour les parents",75.00,20.00,"Un atelier en ligne pour les parents souhaitant découvrir Montessori.","/images/workshop/w14-1.webp"),(15,"Gestion du stress avec Montessori",65.00,20.00,"Comment la méthode Montessori aide à la gestion du stress chez les enfants.","/images/workshop/w15-1.webp"),(16,"Montessori pour les familles nombreuses",95.00,20.00,"Appliquer la méthode Montessori dans une famille avec plusieurs enfants.","/images/workshop/w16-1.webp");
/*!40000 ALTER TABLE `workshop` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-25