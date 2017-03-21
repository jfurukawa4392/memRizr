json.id @deck.id
json.title @deck.title
json.subjectId @deck.subject_id

# cardArr = @deck.cards.left_outer_joins(:ratings).select('cards.id', 'cards.question', 'cards.answer', :rating)
# cardArr = @deck.cards.left_outer_joins(:ratings).left_outer_joins(user_id: current_user.id).select('cards.id', 'cards.question', 'cards.answer', :rating)
count = 0
# json.cards
json.cards @deck.cards.map do |card|
    # json.set! card.id do
    json.extract! card, :id, :question, :answer
    json.rating card.getUserRating(current_user.id)
    # end
    count += 1
end

json.cardCount count
