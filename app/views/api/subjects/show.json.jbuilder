json.subjectDetail do
  json.id @subject.id
  json.title @subject.title
  json.creator @subject.creator_id
  json.currentLearners @subject.followers.map do |learner|
    json.id learner.id
    json.username learner.username
  end
end

json.decks @subject.decks.map do |deck|
  json.extract! deck, :id, :title
  card_count = deck.cards.length
  json.cardCount card_count
end
