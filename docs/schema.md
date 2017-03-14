# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
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
creator_id      | integer   | not null, foreign key

## cardRatings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
card_id         | integer   | not null, foreign key, indexed
rating          | integer   | not null

## categories   
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null

## categoryTaggings  
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
category_id     | integer   | not null, foreign key
subject_id      | integer   | not null, foreign key

## subjectFollows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
subject_id      | integer   | not null, foreign key 
