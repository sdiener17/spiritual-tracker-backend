CREATE TABLE IF NOT EXISTS Users (
   id serial PRIMARY KEY,
   username VARCHAR(20) UNIQUE NOT NULL,
   is_admin BOOLEAN NOT NULL DEFAULT false
);
-- RAN

CREATE TABLE IF NOT EXISTS ScriptureMemory(
    id serial PRIMARY KEY,
    is_memorized BOOLEAN,
    tag VARCHAR(25) UNIQUE NOT NULL,
    verse VARCHAR(10000) UNIQUE NOT NULL,
    times_correct SMALLINT,
    times_wrong SMALLINT
);
-- RAN

CREATE TABLE IF NOT EXISTS Translations(
    id serial PRIMARY KEY,
    translation VARCHAR(25) NOT NULL
);
-- RAN

CREATE TABLE IF NOT EXISTS ScriptureWriting(
    id serial PRIMARY KEY,
    book VARCHAR(25) NOT NULL,
    chapters_in_book SMALLINT,
    chapters_written SMALLINT,
    date_started DATE,
    date_finished DATE,
    is_complete BOOLEAN NOT NULL DEFAULT false,
    translation_id INT NOT NULL,
    FOREIGN KEY (translation_id)
      REFERENCES Translations (id)
);
-- RAN
alter table ScriptureWriting alter column chapters_written set default 0;
-- RAN

CREATE TABLE IF NOT EXISTS Studies(
    id serial PRIMARY KEY,
    book VARCHAR(25) UNIQUE NOT NULL,
    times_studied SMALLINT
);
-- RAN

CREATE TABLE IF NOT EXISTS InsightCategories(
    id serial PRIMARY KEY,
    category_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Insights(
    id serial PRIMARY KEY,
    insight_date DATE,
    insight TEXT,
    category_id INT NOT NULL,
    FOREIGN KEY (category_id)
      REFERENCES InsightCategories (id)
);
-- RAN

CREATE TABLE IF NOT EXISTS QuietTime(
    id serial PRIMARY KEY,
    quiet_time_date DATE,
    quality SMALLINT,
    did_reading SMALLINT NOT NULL DEFAULT 0,
    did_writing SMALLINT NOT NULL DEFAULT 0,
    did_memory SMALLINT NOT NULL DEFAULT 0,
    did_prayer SMALLINT NOT NULL DEFAULT 0,
    did_walk SMALLINT NOT NULL DEFAULT 0,
    did_mapping SMALLINT NOT NULL DEFAULT 0,
    did_art SMALLINT NOT NULL DEFAULT 0,
    did_meditation SMALLINT NOT NULL DEFAULT 0,
    did_worship SMALLINT NOT NULL DEFAULT 0,
    CHECK (did_reading IN (0, 1, 2) ),
    CHECK (did_writing IN (0, 1, 2) ),
    CHECK (did_memory IN (0, 1, 2) ),
    CHECK (did_prayer IN (0, 1, 2) ),
    CHECK (did_walk IN (0, 1, 2) ),
    CHECK (did_mapping IN (0, 1, 2) ),
    CHECK (did_art IN (0, 1, 2) ),
    CHECK (did_meditation IN (0, 1, 2) ),
    CHECK (did_worship IN (0, 1, 2) )
);
-- RAN