DROP DATABASE IF EXISTS movies;

CREATE DATABASE IF NOT EXISTS movies;

USE movies;

CREATE TABLE IF NOT EXISTS movie(
  movie_id VARCHAR(9) NOT NULL,
  title VARCHAR(100),
  release_year varchar(4),
  rating DECIMAL(2,1),
  img VARCHAR(255),
  PRIMARY KEY(movie_id)
);

insert into movie
values
	("tt0075148", "Rocky", 1976, 8.1, "https://http2.mlstatic.com/D_NQ_NP_698742-MLA46741993466_072021-V.jpg"),
    ("tt072784", "Batman", 2005, 8.3, "https://i.pinimg.com/736x/64/ab/8b/64ab8b3540078b8286b46b089762384f.jpg");
