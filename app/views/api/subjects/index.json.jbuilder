@subjects.each do |subject|
  json.set! subject.id do
    json.extract! subject, :id, :title
    json.deckCount subject.decks.length
  end
end
