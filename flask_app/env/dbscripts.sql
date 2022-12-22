DROP TABLE IF EXISTS events;

CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT NOT NULL,
    day TEXT NOT NULL,
    month TEXT NOT NULL,
    year TEXT NOT NULL,
    city TEXT NOT NULL,
    photo_id TEXT NOT NULL,
    ticket FLOAT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
);