CREATE TABLE ARTICLE(
  ARTICLE_ID INT PRIMARY KEY NOT NULL
  GENERATED ALWAYS AS IDENTITY(START WITH 1,INCREMENT BY 1),
  TITLE VARCHAR(255));