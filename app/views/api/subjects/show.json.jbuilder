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

  cards = deck.cards

  json.cardCount cards.length

  mastery = cards.inject(0) do | acc, card |
    acc + (card.getUserRating(current_user.id))
  end

  puts mastery
  puts cards.length
  puts mastery/(5.0 * cards.length)

  json.mastery mastery/(5.0 * cards.length)
end
