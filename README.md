# memRizr
[Live](https://memrizr.herokuapp.com)

memRizr is a web application that facilitates community learning through the creation, editing, sharing and curation of flashcard decks. It was built using Ruby on Rails, React/Redux, and PostgreSQL.

## Features & Implementation

### Subjects, Following, and Searching
Decks are organized on a high level by subject. Subjects can contain multiple decks that help their user to train specific subsets of that topic matter.

One of the best things about an online learning community such as this is that there are many decks on a broad variety of topics already created so getting started is as easy as searching for your desired topic. A user can browse the current offerings through the search functionality and then subscribe or follow a subject of interest. Following a subject will cause that subject, its decks and the user's progress through the mastery of those decks to appear in the "my subjects" portion of the application.

### Decks and Cards
Decks can be created, edited or deleted under a subject only by the user who is the creator of that subject. This ensures that the integrity of the deck curation process remains intact. The decks can also have tags that the creator of the subject can add/delete in order to aid others to find his or her repository of cards.

### Studying and ConfidenceRatings
A User can study a deck. The User can flip the same card repeatedly by clicking on the card, and move on to the next card by rating it. The card ratings are used to determine the user's overall mastery of the deck and subject.

## Future Improvements
### Sharing ownership of subjects with other users
### Higher-level category grouping
### Multimedia Flashcards
