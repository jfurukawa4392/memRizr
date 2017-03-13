## Live Demo:

## Minimum Viable Product
memRizr is a web application to help you study and learn using SRS. It should, at a minimum, allow for the smooth navigation to and execution of the following features/characteristics:

1. User authentication including signup/login/demo login
2. Production README
3. Heroku hosting
4. Deck creation/deletion
5. Deck studying
6. Categories and Tagging
7. Deck content search

## Design Documentation
* [Wireframes](wireframes)
* [Components](component-hierarchy.md)
* [API endpoints](api-endpoints.md)
* [DB schema](schema.md)
* [Sample State](sample-state.md)


## Implementation Timeline
###Phase 1: Backend setup and Front End User Authentication (2 days)

* New Rails project
* User model/migration
* Back end auth
* Webpack & react/redux modules
* APIUtil to interact with the API
* User signup/signin components
* Style signup/signin components
* Splash page for after login
* Seed users

###Phase 2: Decks & Cards (3 days)
* Deck & Card model
* Seed database
* Decks/Cards Controllers (create, destroy)
* JBuilder views for decks, cards
* Style decks components

###Phase 3: Tags/Categories (Subjects) (2 days)
* Subject Model
* Category Model
* Subject components and redux loops
* Style subject components

###Phase 4: Study Decks (2 days)
* CardRating model
* DeckStudyContainer
* Style progress sidebar and card/reveal buttons

###Phase 5: Search (2 days)
* Search components and respective redux loops
* Style search components
* Fetching subjects based on query
