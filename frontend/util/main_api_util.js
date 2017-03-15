export const fetchDecks = () => (
  $.ajax({
    url: 'api/decks'
  })
);

export const fetchDeck = (id) => (
  $.ajax({
    url: `api/decks/${id}`
  })
);

export const fetchAllSubjects = () => (
  $.ajax({
    url: 'api/subjects'
  })
);
