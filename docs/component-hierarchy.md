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

**DeckStudy**
 - StudyDetailContainer
  + Card
 - StudySidebarContainer
  + StudyProgress

**Search**
 - SearchResultsContainer


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/library" | "LibraryContainer" |
| "/search/results" | "SearchResultsContainer"
| "/search" | "Search" |
