CREATE DATABASE users_csp;

USE users_csp;

CREATE TABLE phones (
  phone_id VARCHAR(255),
  phone_number VARCHAR(18) UNIQUE NOT NULL,
  
  PRIMARY KEY (phone_id)
);

CREATE TABLE users ( 
  user_id VARCHAR(255) ,
  first_name VARCHAR(15) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone_id VARCHAR(255),
  
  PRIMARY KEY (user_id),
  FOREIGN KEY (phone_id) REFERENCES phones(phone_id)
);