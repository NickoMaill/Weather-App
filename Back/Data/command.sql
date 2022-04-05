CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(50),
    birth_date JSON NOT NULL,
    address JSON NOT NULL,
    favorites INTEGER[],
    default_weather INTEGER,
    password VARCHAR(1000) NOT NULL,
    profile_picture_path VARCHAR(200) NOT NULL,
    confirmation_code VARCHAR(300),
	created_at JSON NOT NULL
);

CREATE TABLE request_history(
    request_id SERIAL PRIMARY KEY,
    method VARCHAR(50),
    user_id VARCHAR(50),
    request_url VARCHAR(100),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE search_history(
    search_id SERIAL PRIMARY KEY,
    request_id INTEGER,
    user_id VARCHAR(50),
    search_content VARCHAR(50),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT fk_request_id FOREIGN KEY (request_id) REFERENCES request_history(request_id)
);

SELECT * FROM users WHERE users.birth_date ->>'year' = '1976';

INSERT INTO users(
        user_id,
        email,
        first_name
        last_name,
        gender,
        birth_date,
        address,
        password,
        profile_picture_path,
        created_at
    )
VALUES(
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10
)