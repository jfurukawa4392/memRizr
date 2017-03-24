


json.decks @subject.decks.map do |deck|
  json.extract! deck, :id, :title

  cards = deck.cards

  json.cardCount cards.length

  if current_user
    mastery = cards.inject(0) do | acc, card |
      acc + (card.getUserRating(current_user.id))
    end
  else
    mastery = 0
  end

  json.mastery (cards.length > 0 ? (mastery/(5.0 * cards.length)*100) : 0)
end


json.subjectDetail do
  json.id @subject.id
  json.title @subject.title
  json.creator @subject.creator_id
  json.currentLearners @subject.followers.map do |learner|
    json.id learner.id
    json.username learner.username
  end

  if current_user
    json.userFollows current_user.follows?(@subject)
  else
    json.userFollows false
  end
end
