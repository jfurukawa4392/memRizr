json.id @deck.id
json.title @deck.title

# cardArr = @deck.cards.left_outer_joins(:ratings).select('cards.id', 'cards.question', 'cards.answer', :rating)
# cardArr = @deck.cards.left_outer_joins(:ratings).left_outer_joins(user_id: current_user.id).select('cards.id', 'cards.question', 'cards.answer', :rating)
count = 0
# json.cards
json.cards do
  @deck.cards.each do |card|
    json.set! card.id do
      json.extract! card, :question, :answer
      json.currentRating card.getUserRating(current_user)
    end
    count += 1
  end
end

json.cardCount count
#
# unless cardArr.empty?
#   cardArr = cardArr.map do |card|
#     json.set! card.id do
#       json.extract! card, :question, :answer
#       json.currentRating card.getUserRating(current_user)
#     end
#   end
# end

# json.cards cardArr
