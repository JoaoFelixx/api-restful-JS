CREATE DATABASE users_csp;

USE users_csp;

CREATE TABLE phones (
  phone_id INT NOT NULL,
  phone_numbers VARCHAR(14) UNIQUE NOT NULL,
  
  PRIMARY KEY (phone_id)
);

CREATE TABLE users ( 
  user_id INT AUTO_INCREMENT,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone_id INT NOT NULL,
  
  PRIMARY KEY (user_id),
  FOREIGN KEY (phone_id) REFERENCES phones(phone_id)
);