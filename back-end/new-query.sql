
CREATE TABLE `meal` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text,
  `location` varchar(20) DEFAULT NULL,
  `meal_time` datetime NOT NULL,
  `max_reservations` int(11) NOT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `meal` (`id`, `title`, `description`, `location`, `meal_time`, `max_reservations`, `price`, `created_date`, `image_url`) VALUES
(1, 'Delicious Pasta Night', 'Join us for a delightful evening of pasta dishes!', '123 Main Street', '2024-05-05 18:00:00', 10, '20.99', '2024-05-02', 'https://charmingvibes4u.com/wp-content/uploads/2022/02/Top-yummy-things-to-try-in-Rome.png'),
(2, 'BBQ Bonanza', 'Come enjoy a BBQ feast with friends and family.', '456 Elm Street', '2024-05-07 16:00:00', 15, '25.50', '2024-04-30', 'https://www.momentslog.com/wp-content/uploads/2024/04/05d67a1cbfeec87d74c47866ae5014e3.jpeg'),
(3, 'Vegetarian Delights', 'Explore a variety of delicious vegetarian dishes.', '789 Oak Street', '2024-05-10 19:00:00', 12, '18.75', '2024-04-28', 'https://bing.com/th?id=OSK.4280f7f43816e28074d5bd79ae765512'),
(4, 'Sushi Night', 'Experience the flavors of Japan with our sushi menu.', '321 Maple Avenue', '2024-05-12 20:00:00', 8, '30.00', '2024-04-26', 'https://www.actupeople.fr/wp-content/uploads/2023/10/degustation-de-vos-sushis-maison.jpg'),
(5, 'Taco Tuesday Fiesta', 'Join us for a festive evening filled with tacos and fun!', '567 Pine Street', '2024-05-15 17:30:00', 20, '12.99', '2024-05-01', 'https://www.shared.com/content/images/2017/04/04-21-17-Copycat-Avocado-Egg-Roll-760x760-no-logo_GH_content_650px.jpg'),
(6, 'Italian Cuisine Extravaganza', 'Indulge in a variety of authentic Italian dishes.', '432 Cedar Lane', '2024-05-18 18:30:00', 15, '22.50', '2024-04-29', 'https://res.cloudinary.com/dyyjph6kx/image/upload/v1516266931/iyv7ewnqlredb84m881v.jpg'),
(7, 'Greek Feast', 'Experience the taste of Greece with our flavorful dishes.', '876 Birch Road', '2024-05-20 19:00:00', 10, '28.75', '2024-04-27', 'https://www.shape.com/thmb/SPEhrru5nArhQ1s0_DmznnOpEhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/mediterranean-diet-snacks_0-6147399e488941a9826a0344bee82878.jpg'),
(8, 'Mexican Fiesta Night', 'Spice up your evening with our delicious Mexican cuisine.', '987 Walnut Street', '2024-05-22 18:00:00', 18, '15.50', '2024-05-03', 'https://www.uaestylemagazine.com/wp-content/uploads/2017/08/Mexican-Fiesta-1-1024x700.jpg'),
(9, 'Healthy Eating Workshop', 'Learn how to cook nutritious meals that are both delicious and healthy.', '654 Elmwood Avenue', '2024-05-25 17:00:00', 15, '0.00', '2024-04-25', 'https://img.freepik.com/free-photo/top-view-tomatoes-with-garlic-veggies_23-2148622411.jpg?w=360&t=st=1697276192~exp=1697276792~hmac=d084c351b243e37fb71c2d9b13a42572dd9b10f4945d00e30d015be404875e81'),
(10, 'Seafood Extravaganza', 'Indulge in a variety of fresh seafood delicacies.', '234 Oakwood Drive', '2024-05-28 19:30:00', 12, '35.99', '2024-04-24', 'https://shabbychicboho.com/wp-content/uploads/2023/08/Top-7-Ways-To-Enjoy-Corn-1.png'),
(11, 'Family BBQ Picnic', 'Enjoy a day out with the family with our BBQ picnic.', '789 Cedar Avenue', '2024-05-30 12:00:00', 25, '10.00', '2024-04-23', 'https://www.fmi.org/images/default-source/blog-images/meat-grilling-at-party.tmb-large-350-.jpeg?Culture=en&sfvrsn=eac67c85_1'),
(12, 'Asian Fusion Night', 'Experience a fusion of flavors from various Asian cuisines.', '345 Maple Drive', '2024-06-02 18:30:00', 15, '24.50', '2024-04-22', 'https://images.getbento.com/accounts/9fd39bb2635447e91cf50f8a1bd52804/media/images/9520121016275_l.jpg?w=1200&fit=crop&auto=compress,format&crop=focalpoint&fp-x=0.5&fp-y=0.5'),
(13, 'Mediterranean Delights', 'Savor the taste of the Mediterranean with our special dishes.', '876 Birch Road', '2024-06-05 19:00:00', 10, '28.75', '2024-04-21', 'https://nomadparadise.com/wp-content/uploads/2020/05/mediterranean-food-007-1024x640.jpg'),
(14, 'Farm-to-Table Experience', 'Enjoy fresh, locally-sourced ingredients in our farm-to-table menu.', '567 Pine Street', '2024-06-08 17:30:00', 20, '30.99', '2024-04-20', 'https://th.bing.com/th/id/OIP.ap7gg-ftZWbhZmpWa0codwHaFV?rs=1&pid=ImgDetMain'),
(15, 'Steak Night', 'Savor the finest cuts of steak cooked to perfection.', '321 Maple Avenue', '2024-06-11 20:00:00', 8, '40.00', '2024-04-19', 'https://meateatingmilitaryman.com/wp-content/uploads/2023/09/smoked-deer-roast-728x728.jpg'),
(16, 'Vegetarian Buffet', 'Indulge in a wide array of vegetarian dishes in our buffet.', '654 Elmwood Avenue', '2024-06-14 17:00:00', 15, '20.00', '2024-04-18', 'https://image-tc.galaxy.tf/wijpeg-465fr1rf0qaewidxxe1f4dl7g/file.jpg'),
(17, 'Pizza Party', 'Join us for a fun-filled pizza party with your favorite toppings.', '234 Oakwood Drive', '2024-06-17 19:30:00', 12, '15.99', '2024-04-17', 'https://images.creativemarket.com/0.1.0/ps/6470125/1820/1214/m1/fpnw/wm1/i80hbla2s6wsmd6jaaoeipipz7uvnmxydfidhnsvkwdivvi92u99nvchp3dq19ey-.jpg?1559306650&s=4cfcd1613939f0bbdb3f2b068aa8a6fe'),
(18, 'Homestyle Comfort Food', 'Experience the warmth of homestyle comfort food in every bite.', '789 Cedar Avenue', '2024-06-20 12:00:00', 25, '18.50', '2024-04-16', 'https://img.freepik.com/premium-photo/picture-mutton-biryani_871710-37978.jpg'),
(19, 'Sushi Making Workshop', 'Learn the art of making sushi from our expert chefs.', '345 Maple Drive', '2024-06-23 18:30:00', 15, '0.00', '2024-04-15', 'https://thumbs.dreamstime.com/b/japanese-food-served-table-large-set-sushi-rolls-noodles-traditional-rice-udon-dark-background-top-view-asian-chinese-195419426.jpg'),
(20, 'Gourmet Burger Night', 'Indulge in gourmet burgers crafted with premium ingredients.', '987 Walnut Street', '2024-06-26 18:00:00', 18, '22.50', '2024-04-14', 'https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg');

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `number_of_guests` int(11) NOT NULL,
  `meal_id` int(11) DEFAULT NULL,
  `meal_title` varchar(50) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `contact_phonenumber` varchar(10) DEFAULT NULL,
  `contact_name` varchar(20) DEFAULT NULL,
  `contact_email` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `reservation` (`id`, `number_of_guests`, `meal_id`, `meal_title`, `created_date`, `contact_phonenumber`, `contact_name`, `contact_email`) VALUES
(1, 2, 1, 'Delicious Pasta Night', '2024-05-04', '1234567890', 'John Doe', 'john@example.com'),
(2, 4, 2, 'BBQ Bonanza', '2024-05-06', '2345678901', 'Jane Smith', 'jane@example.com'),
(3, 3, 3, 'Vegetarian Delights', '2024-05-09', '3456789012', 'Alice Johnson', 'alice@example.com'),
(4, 2, 4, 'Sushi Night', '2024-05-11', '4567890123', 'Bob Brown', 'bob@example.com'),
(5, 5, 5, 'Taco Tuesday Fiesta', '2024-05-14', '5678901234', 'Emily Davis', 'emily@example.com'),
(6, 2, 6, 'Italian Cuisine Extravaganza', '2024-05-17', '6789012345', 'Mike Wilson', 'mike@example.com'),
(7, 3, 7, 'Greek Feast', '2024-05-19', '7890123456', 'Sarah Miller', 'sarah@example.com'),
(8, 2, 8, 'Mexican Fiesta Night', '2024-05-21', '8901234567', 'Chris Martinez', 'chris@example.com'),
(9, 1, 9, 'Healthy Eating Workshop', '2024-05-24', '9012345678', 'Anna Lee', 'anna@example.com'),
(10, 4, 10, 'Seafood Extravaganza', '2024-05-27', '0123456789', 'David Taylor', 'david@example.com'),
(11, 2, 11, 'Family BBQ Picnic', '2024-05-29', '1234567890', 'Olivia Garcia', 'olivia@example.com'),
(12, 3, 12, 'Asian Fusion Night', '2024-06-01', '2345678901', 'Michael Hernandez', 'michael@example.com'),
(13, 2, 13, 'Mediterranean Delights', '2024-06-04', '3456789012', 'Emma Wilson', 'emma@example.com'),
(14, 5, 14, 'Farm-to-Table Experience', '2024-06-07', '4567890123', 'Daniel Anderson', 'daniel@example.com'),
(15, 2, 15, 'Steak Night', '2024-06-10', '5678901234', 'Sophia Martinez', 'sophia@example.com'),
(16, 3, 16, 'Vegetarian Buffet', '2024-06-13', '6789012345', 'James Brown', 'james@example.com'),
(17, 2, 17, 'Pizza Party', '2024-06-16', '7890123456', 'Lily Johnson', 'lily@example.com'),
(18, 1, 18, 'Homestyle Comfort Food', '2024-06-19', '8901234567', 'Benjamin Davis', 'benjamin@example.com'),
(19, 4, 19, 'Sushi Making Workshop', '2024-06-22', '9012345678', 'Ava Taylor', 'ava@example.com'),
(20, 2, 20, 'Gourmet Burger Night', '2024-06-25', '0123456789', 'Lucas Lee', 'lucas@example.com');

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  `description` text,
  `meal_id` int(11) DEFAULT NULL,
  `stars` int(11) DEFAULT NULL,
  `created_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `review` (`id`, `title`, `description`, `meal_id`, `stars`, `created_date`) VALUES
(1, NULL, 'Absolutely loved the pasta dishes! Will definitely come back for more.', 1, 5, '2024-05-07'),
(2, NULL, 'The BBQ feast was fantastic! Great flavors and generous portions.', 2, 4, '2024-05-09'),
(3, NULL, 'Amazing variety of vegetarian dishes. Each one was delicious!', 3, 5, '2024-05-12'),
(4, NULL, 'Top-notch sushi! Fresh and flavorful, just like in Japan.', 4, 5, '2024-05-14'),
(5, NULL, 'Had a blast at the taco party! Tacos were delicious and so much fun!', 5, 4, '2024-05-17'),
(6, NULL, 'Authentic Italian flavors at their best! Loved every bite.', 6, 5, '2024-05-20'),
(7, NULL, 'Delicious Greek dishes! Transported me straight to Greece.', 7, 4, '2024-05-22'),
(8, NULL, 'Spicy and flavorful Mexican cuisine! Perfect for a fiesta night.', 8, 5, '2024-05-24'),
(9, NULL, 'Learned so much at the workshop! Excited to cook nutritious meals.', 9, 5, '2024-05-27'),
(10, NULL, 'Fresh and tasty seafood! A seafood lover\'s paradise.', 10, 4, '2024-05-30'),
(11, NULL, 'Had a wonderful time at the BBQ picnic! Delicious food and great atmosphere.', 11, 5, '2024-06-01'),
(12, NULL, 'Fusion of flavors was amazing! Loved the blend of Asian cuisines.', 12, 4, '2024-06-04'),
(13, NULL, 'Savored every bite of the Mediterranean dishes! Wonderful flavors.', 13, 5, '2024-06-07'),
(14, NULL, 'Fresh and flavorful farm-to-table menu! Loved the local ingredients.', 14, 5, '2024-06-10'),
(15, NULL, 'Steak cooked to perfection! Best steak I\'ve had in a long time.', 15, 5, '2024-06-13'),
(16, NULL, 'Great variety of vegetarian dishes at the buffet! Delicious and satisfying.', 16, 4, '2024-06-16'),
(17, NULL, 'Pizza party was so much fun! Tasty pizzas with all the toppings.', 17, 5, '2024-06-19'),
(18, NULL, 'Comfort food at its best! Warm and delicious, just like home-cooked.', 18, 4, '2024-06-22'),
(19, NULL, 'Had a great time at the sushi making workshop! Learned a lot and had fun.', 19, 5, '2024-06-25'),
(20, NULL, 'Indulged in gourmet burgers! Delicious and made with premium ingredients.', 20, 5, '2024-06-28');

ALTER TABLE `meal`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservation_fk_meal_id` (`meal_id`);

ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_fk_meal_id` (`meal_id`);

ALTER TABLE `meal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_fk_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `review`
  ADD CONSTRAINT `review_fk_meal_id` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
  