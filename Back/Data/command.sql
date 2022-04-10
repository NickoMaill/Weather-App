CREATE TABLE users (
    user_id VARCHAR(50) PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(50),
    birth_date JSON NOT NULL,
    address JSON NOT NULL,
    default_weather INTEGER,
    password VARCHAR(1000) NOT NULL,
    profile_picture_path VARCHAR(200) NOT NULL,
	created_at JSON NOT NULL
    CONSTRAINT fk_default_weather FOREIGN KEY (default_weather) REFERENCES favorites(user_id)
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

SELECT * FROM users;
-- SELECT * FROM users WHERE users.birth_date ->>'year' = '1976';