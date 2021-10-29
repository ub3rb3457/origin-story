-- -- -- -- -- -- CREATING TABLES -- -- -- -- -- --

-- for a user

CREATE TABLE users (
    id serial,
    username character varying(50),
    email character varying(50),
    password character varying(15)
);

-- for a blog

CREATE TABLE blogs (
    id serial,
    title character varying(100),
    content character varying(1000)
);

-- for the comments of a blog

CREATE TABLE comments (
    id serial,
    user_id int,
    blog_id int,
    content character varying(200)
);

-- for link between the user and the blog they saved

CREATE TABLE savedblogs (
    user_id int,
    blog_id int
);

-- for link between the author and their blog

CREATE TABLE authorblogs (
    user_id int,
    blog_id int
);

-- for like and dislike

CREATE TABLE ldblogs (
    user_id int,
    blog_id int,
    type character varying(10)
)

-- -- -- -- -- -- INSERT INTO TABLES -- -- -- -- -- --


INSERT INTO users(username, email, password)
VALUES
('JPJPJP', 'JPeter@gmail.com', '123456789'),
('SPSPSP', 'SParker@gmail.com', 'qwerty'),
('PMPMPM', 'PMan@gmail.com', 'ytrewq');

INSERT INTO blogs(title, content)
VALUES
('The beach', 'Finally at the beach ready to pppaaaarrrrttttyyyy!!'),
('Local loto game update', 'There has been a winner for the 10 thousand Rand airtime, and his name is Thabo!'),
('Thabo update', 'The local loto winner Thabo has been disapointed in his win.');

INSERT INTO comments(user_id, blog_id, content)
VALUES
(1, 1, 'Can i join?'),
(2, 2, 'That is so nice!!!!'),
(3, 3, '!XD!XD!XD!XD!XD!');

INSERT INTO savedblogs(user_id, blog_id)
VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 1);

INSERT INTO ldblogs(user_id, blog_id)
VALUES
(1, 2, "like"),
(1, 3, "dislike"),
(2, 1, "like"),
(2, 3, "dislike"),
(3, 1, "like"),
(3, 2, "dislike");

INSERT INTO authorblogs(user_id, blog_id)
VALUES
(1, 1),
(2, 2),
(2, 3);
