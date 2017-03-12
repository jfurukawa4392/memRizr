# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## decks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
subject_id      | integer   | not null, foreign key, indexed
author_id       | integer   | not null, foreign key, indexed
title           | string    | not null

## cards
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
deck_id         | integer   | not null, foreign key, indexed
question        | string    | not null
answer          | string    | not null

## subjects
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
category_id     | integer   | not null, foreign key
creator_id      | integer   | not null, foreign key

## cardRatings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
card_id         | integer   | not null, foreign key, indexed
rating          | integer   | not null

## taggings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
deck_id         | integer   | not null, foreign key, indexed
tag_id          | integer   | not null, foreign key, indexed

## tags    
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
