## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**LibraryContainer**
 - Home
 - NavbarContainer
 - SubjectDetailContainer
   + SubjectIndex
    - SubjectIndexItem
   + SubjectDetail
    - DecksIndex
     + DeckIndexItem
   + CurrentLearnerIndex
    - CurrentLearnerIndexItem

**SubjectDetailContainer**
 - SubjectDetail
  + DecksIndex
   - DeckIndexItem
 - CurrentLearnerIndex
  + CurrentLearnerIndexItem

**SubjectCreateFormContainer**
 - SubjectForm

**DeckStudyContainer**
 - StudyDetail
  + Card
 - StudySidebar
  + StudyProgress

**DecksIndex**
 - DeckIndexItem

**DeckCreateFormContainer**
 - DeckForm

**CardCreateFormContainer**
 - CardCreateForm

**CurrentLearnerIndex**
 - CurrentLearnerIndexItems

**Search**
 - NavbarContainer
 - SearchResultsContainer
 - BrowseSubjectsContainer
 - CategoryIndex
  + CategoryIndexItem
   - SubjectIndex
    + SubjectIndexItem


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/library" | "LibraryContainer" |
| "/library/new" | "SubjectCreateFormContainer" |
| "/library/:subject_id" | "SubjectDetailContainer" |
| "/library/:subject_id/new" | "DeckCreateFormContainer" |
| "/decks/:deck_id/new" | "CardCreateFormContainer" |
| "/study/:deck_id" | "DeckStudyContainer" |
| "/search/results" | "SearchResultsContainer" |
| "/search" | "Search" |
