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

//Fetch all subjects for browsing new ones
export const fetchAllSubjects = () => (
  $.ajax({
    url: 'api/subjects'
  })
);

//fetch only those subjects that the current user follows
export const fetchSubjectFollows = () => (
  $.ajax({
    url: 'api/subject_follows'
  })
);
