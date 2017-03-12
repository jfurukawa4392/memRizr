# API Endpoints

## HTML API
### Root
* `GET /` - returns React web app

## JSON API - all below endpoints nested under api namespace
### Users
* `POST api/users` - returns current user if successful signup

### Sessions
* `POST api/session` - returns current user if successful login
* `DELETE api/session` - returns current user if successful logout

### Decks
* `POST api/decks` - returns created deck if successful
* `DELETE api/decks` - returns deleted deck if successful

### Cards
* `POST api/cards` - returns created card if successful
* `DELETE api/cards` - returns deleted card if successful

### Subjects
* `POST api/subjects` - returns created subject if successful
* `DELETE api/subjects` - returns deleted subject if successful
