CREATE TABLE users (
    id INTEGER,
    email VARCHAR(50),
    name VARCHAR(50),
    password VARCHAR(300),
    surname VARCHAR(50),
    gender VARCHAR(50),
    birth_date JSON,
    adress JSON,
	created_at JSON
);

SELECT * FROM users WHERE users.birth_date ->>'year' = '1976';

INSERT INTO users(
        user_id,
        user_name,
        surname,
        gender,
        birth_day,
        birth_month,
        birth_year,
        number_adress,
        street_adress,
        district_name,
        city,
        email,
        user_password,
        profile_picture
    )
VALUES(
    45679,
    'Nicolas',
    'Maillols',
    'male',
    02,
    12,
    1995,
    01,
    'rue Pierre Louÿs',
    '75016',
    'Paris',
    'nicomaillols@gmail.com',
    'Borabora2011@',
    'gfrgsvqvfqfvsfgv'
)