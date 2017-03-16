json.subjectDetail do
  json.id @subject.id
  json.title @subject.title
end

json.decks @subject.decks, :title
