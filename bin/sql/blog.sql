-- -- -- -- -- -- CREATING TABLES -- -- -- -- -- --

CREATE TABLE users (
    id serial,
    username character varying(50),
    email character varying(50),
    type character varying(50),
    password character varying(50)
);

CREATE TABLE blogs (
    id serial,
    title character varying(50),
    content character varying(200)
);

CREATE TABLE comments (
    id serial,
    user_id int,
    blog_id int,
    content character varying(50)
);

CREATE TABLE savedblogs (
    user_id int,
    blog_id int
);

CREATE TABLE likedblogs (
    user_id int,
    blog_id int
);

CREATE TABLE dislikedblogs (
    user_id int,
    blog_id int
);

CREATE TABLE authorblogs (
    user_id int,
    blog_id int
);

-- -- -- -- -- -- INSERT INTO TABLES -- -- -- -- -- --


INSERT INTO users(username, email, type, password)
VALUES
('JPJPJP', 'JPeter@gmail.com', 'Author', '123456789'),
('SPSPSP', 'SParker@gmail.com', 'Author', 'qwerty'),
('PMPMPM', 'PMan@gmail.com', 'Reader', 'ytrewq');

INSERT INTO blogs(title, content)
VALUES
('The beach', 'Finally at the beach ready to pppaaaarrrrttttyyyy!!'),
('Local loto game update', 'There has been a winner for the 10 thousand Rand airtime, and his name is Thabo!'),
('Thabo update', 'The local loto winner Thabo has been disapointed in his win.');

INSERT INTO comments(user_id, blog_id, content)
VALUES
('1', '1', 'Can i join?'),
('2', '2', 'That is so nice!!!!'),
('3', '3', '!XD!XD!XD!XD!XD!');

INSERT INTO savedblogs(user_id, blog_id)
VALUES
('1', '2'),
('1', '3'),
('2', '1'),
('3', '1');

INSERT INTO likedblogs(user_id, blog_id)
VALUES
('1', '2'),
('2', '1'),
('3', '1');

INSERT INTO dislikedblogs(user_id, blog_id)
VALUES
('1', '3'),
('2', '3'),
('3', '2');

INSERT INTO authorblogs(user_id, blog_id)
VALUES
('1', '1'),
('2', '2'),
('2', '3');
