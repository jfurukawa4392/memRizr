export const createRating = (card_rating) => (
  $.ajax({
    url: `api/card_ratings`,
    method: 'POST',
    data: {card_rating}
  })
);

export const updateDeck = (id, cards) => (
  $.ajax({
    url: `api/decks/${id}`,
    method: 'PATCH',
    data: { cards }
  })
);

export const deleteDeck = (id) => (
  $.ajax({
    url: `api/decks/${id}`,
    method: 'DELETE'
  })
);

export const fetchDeck = (id) => (
  $.ajax({
    url: `api/decks/${id}`
  })
);

//Fetch all subjects for browsing new ones
export const fetchAllSubjects = () => (
  $.ajax({
    url: 'api/subjects'
  })
);

//fetch only those subjects that the current user follows
export const fetchFollowedSubjects = () => (
  $.ajax({
    url: 'api/subject_follows'
  })
);

export const fetchSubjectDetail = (id) => (
  $.ajax({
    url: `api/subjects/${id}`
  })
);

export const createSubject = (subject) => (
  $.ajax({
    url: `api/subjects/`,
    method: 'POST',
    data: {subject}
  })
);

export const createDeck = (deck) => (
  $.ajax({
      url: `api/decks`,
      method: 'POST',
      data: {deck}
  })
);
