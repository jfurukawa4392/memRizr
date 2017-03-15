json.partial! 'api/subjects/subject', subject: @subject

json.decks @subject.decks, :title
