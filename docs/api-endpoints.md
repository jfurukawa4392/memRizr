# API Endpoints

## HTML API
### Root
* `GET /`
  - params: none
  - returns: React web app

## JSON API - all below endpoints nested under api namespace
### Users
* `POST api/users`
  - params: username and password nested under user key
  - return: current user if successful signup

### Sessions
* `POST api/session`
  - params: username and password nested under user key
  - return: current user if successful signup
* `DELETE api/session`
  - params: none
  - return: current user if successful logout

### Decks
* `GET api/decks`
  - params: none, implicit currentUser id
  - return: all decks
* `GET api/deck/:id`
  - params: none
  - return: deck with specified id
* `POST api/decks`
  - params: title, author id and subject id nested under deck key
  - return: created deck if successful
* `DELETE api/decks`
  - params: deck id
  - return: deleted deck if successful

### Cards
* `POST api/cards`
  - params: deck id, question, answer nested under card key
  - return: created card if successful
* `DELETE api/cards`
  - params: card id
  - return: deleted card if successful

### Subjects
* `GET api/subjects`
  - params: none
  - return: all subjects
* `GET api/subject/:id`
  - params: id of subject to fetch
  - return: all decks and current learners in the subject
* `POST api/subjects`
  - params: title and category id nested under subject key
  - return: created subject if successful
* `DELETE api/subjects`
  - params: none
  - return: deleted subject if successful
