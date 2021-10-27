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
    content character varying(50)
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

CREATE TABLE likedblog (
    user_id int,
    blog_id int
);

CREATE TABLE dislikedblog (
    user_id int,
    blog_id int
);

CREATE TABLE userblogs (
    user_id int,
    blog_id int
);

-- -- -- -- -- -- INSERT INTO TABLES -- -- -- -- -- --


-- INSERT INTO users(username, email, type, password)
-- VALUES
-- ('JPJPJP', 'JPeter@gmail.com', 'Author', '123456789'),
-- ('SPSPSP', 'SParker@gmail.com', 'Author', 'qwerty'),
-- ('PMPMPM', 'PMan@gmail.com', 'Reader', 'ytrewq');

-- -- -- -- -- -- --CREATE TABLE blogs (
-- -- -- -- -- -- --    id serial,
-- -- -- -- -- -- --    title character varying(50),
-- -- -- -- -- -- --    content character varying(50)
-- -- -- -- -- -- --);

-- INSERT INTO blogs(name, surname, username, email, type, password)
-- VALUES
-- ('John', 'Peter', 'JPJPJP', 'JPeter@gmail.com', 'Author', '123456789'),
-- ('Spider', 'Parker', 'SPSPSP', 'SParker@gmail.com', 'Author', 'qwerty'),
-- ('Peter', 'Man', 'PMPMPM', 'PMan@gmail.com', 'Reader', 'ytrewq');

-- CREATE TABLE comments (
--     id serial,
--     user_id int,
--     blog_id int,
--     content character varying(50)
-- );

-- -- -- -- -- -- -- CREATE TABLE savedblogs (
-- -- -- -- -- -- --     user_id int,
-- -- -- -- -- -- --     blog_id int
-- -- -- -- -- -- -- );

-- -- -- -- -- -- -- CREATE TABLE likedblog (
-- -- -- -- -- -- --     user_id int,
-- -- -- -- -- -- --     blog_id int
-- -- -- -- -- -- -- );

-- -- -- -- -- -- -- CREATE TABLE dislikedblog (
-- -- -- -- -- -- --     user_id int,
-- -- -- -- -- -- --     blog_id int
-- -- -- -- -- -- -- );

--  -- -- -- -- -- -- CREATE TABLE userblogs (
--  -- -- -- -- -- --     user_id int,
--  -- -- -- -- -- --     blog_id int
--  -- -- -- -- -- -- );

-- INSERT INTO habitats(name, climate, temperature)
-- VALUES
-- ('desert', 'dry', 100),
-- ('forrest', 'haunted', 70),
-- ('mountain', 'icy', 30);

-- INSERT INTO lives(monster, habitat)
-- VALUES
-- ('The World', 'desert'),
-- ('Star Platinum', 'desert'),
-- ('Silver Chariot', 'desert'),
-- ('Stone Free', 'mountain'),
-- ('Limp Bizkit', 'mountain'),
-- ('Killer queen', 'forrest'),
-- ('Deadly queen', 'forrest');
