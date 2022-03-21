CREATE TABLE users (
    id INTEGER,
    name VARCHAR(50),
    surname VARCHAR(50),
    gender VARCHAR(50),
    birth_date JSON,
    adress JSON,
    email VARCHAR(50),
    password VARCHAR(300),
	created_at JSON
);
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