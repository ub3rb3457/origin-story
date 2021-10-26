-- -- -- -- -- -- CREATING TABLES -- -- -- -- -- --

CREATE TABLE users (
    id serial,
    name character varing(50),
    surname character varing(50),
    email character varing(50),
    password character varing(50),
);

CREATE TABLE blogs (
    id serial,
    title character varing(50),
    content character varing(50),
);

CREATE TABLE comments (
    id serial,
    content character varing(50),
);

CREATE TABLE savedblogs (
    user_id int,
    blog_id int,
);

CREATE TABLE userblog (
    user_id int,
    blog_id int,
);

-- CREATE TABLE monsters (
--     id serial,
--     name character varying(50),
--     personality character varying(50)
-- );

-- CREATE TABLE habitats (
--     id serial,
--     name character varying(50),
--     climate character varying(50),
--     temperature int
-- );

-- CREATE TABLE lives (
--     monster character varying(50),
--     habitat character varying(50)
-- );

-- -- -- -- -- -- INSERT INTO TABLES -- -- -- -- -- --

INSERT INTO monsters(name, personality)
VALUES
('The World', 'aggressive'),
('Star Platinum', 'aggressive'),
('Silver Chariot', 'impatient'),
('Stone Free', 'impatient'),
('Limp Bizkit', 'passive'),
('Killer Queen', 'aggressive'),
('Deadly Queen', 'passionate');

INSERT INTO habitats(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forrest', 'haunted', 70),
('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat)
VALUES
('The World', 'desert'),
('Star Platinum', 'desert'),
('Silver Chariot', 'desert'),
('Stone Free', 'mountain'),
('Limp Bizkit', 'mountain'),
('Killer queen', 'forrest'),
('Deadly queen', 'forrest');
