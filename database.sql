create TABLE person(
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255),
  surname VARCHAR(255)
);

create TABLE post(
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255),
  content text,
  user_id bigint REFERENCES person (id)
);
