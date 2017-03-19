json.id @deck.id
json.title @deck.title

cardArr = @deck.cards

unless cardArr.empty?
  cardArr.map do |card|
    json.set! card.id do
      json.extract! card, :question, :answer
      # json.currentRating card.getUserRating should get current rating for card
    end
  end
end

json.cardCount cardArr.length
json.cards cardArr
