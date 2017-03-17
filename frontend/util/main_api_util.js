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
