-- Drop burgers_db database if it exists
DROP DATABASE IF EXISTS burgers_db;

-- Create burgers_db database and select it for use
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create burgers table
CREATE TABLE burgers
(
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR (30),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);