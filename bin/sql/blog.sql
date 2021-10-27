-- -- -- -- -- -- CREATING TABLES -- -- -- -- -- --

CREATE TABLE users (
    id serial,
    name character varing(50),
    surname character varing(50),
    username character varing(50),
    email character varing(50),
    type character varing(50),
    password character varing(50),
);

CREATE TABLE blogs (
    id serial,
    title character varing(50),
    content character varing(50),
);

CREATE TABLE comments (
    id serial,
    user_id int,
    blog_id int,
    content character varing(50),
);

CREATE TABLE savedblogs (
    user_id int,
    blog_id int,
);

CREATE TABLE likedblog (
    user_id int,
    blog_id int,
);

CREATE TABLE dislikedblog (
    user_id int,
    blog_id int,
);

CREATE TABLE userblogs (
    user_id int,
    blog_id int,
);

-- -- -- -- -- -- INSERT INTO TABLES -- -- -- -- -- --

-- INSERT INTO monsters(name, personality)
-- VALUES
-- ('The World', 'aggressive'),
-- ('Star Platinum', 'aggressive'),
-- ('Silver Chariot', 'impatient'),
-- ('Stone Free', 'impatient'),
-- ('Limp Bizkit', 'passive'),
-- ('Killer Queen', 'aggressive'),
-- ('Deadly Queen', 'passionate');

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
