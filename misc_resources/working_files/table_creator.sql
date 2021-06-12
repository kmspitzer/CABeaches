-- Note FLOAT values for latitude, longitude
CREATE TABLE beaches (
	id SERIAL PRIMARY KEY,
	region VARCHAR,
	county VARCHAR,
	area VARCHAR,
	beach_name VARCHAR,
	beach_url VARCHAR,
	address VARCHAR,
	city VARCHAR,
	state VARCHAR,
	zip VARCHAR,
	latitude FLOAT,
	longitude FLOAT,
	park_name VARCHAR,
	owner VARCHAR,
	owner_url VARCHAR,
	activities VARCHAR,
	amenities VARCHAR,
	pet_policy VARCHAR,
	pets_allowed VARCHAR,
	fees VARCHAR,
	free_parking VARCHAR,
	phone VARCHAR,
	other_names VARCHAR
);

-- Note DATE values for grade_updated, grade_created
-- Note FLOAT values for latitude, longitude
CREATE TABLE grade_data (
	id SERIAL PRIMARY KEY,
	json_id INT,
	name1 VARCHAR,
	latitude FLOAT,
	longitude FLOAT,
	address VARCHAR,
	city VARCHAR,
	county VARCHAR,
	state VARCHAR,
	zip VARCHAR,
	active VARCHAR,
	grade_updated DATE,
	dry_grade VARCHAR,
	wet_grade VARCHAR,
	annual_summer_dry VARCHAR,
	annual_year_wet VARCHAR,
	annual_winter_dry VARCHAR,
	annual_year VARCHAR,
	grade_created DATE
);
