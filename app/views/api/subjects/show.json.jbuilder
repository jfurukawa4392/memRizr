json.subjectDetail do
  json.id @subject.id
  json.title @subject.title
  learners = @subject.followers.map do |learner|
    json.extract learner, :id, :username
  end
  json.currentLearners learners
end

json.decks @subject.decks.map do |deck|
  json.extract! deck, :id, :title
  card_count = deck.cards.length
  json.cardCount card_count
end
