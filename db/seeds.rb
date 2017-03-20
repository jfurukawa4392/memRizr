# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Create 20 users
user_arr = []
10.times do |num|
  name = Faker::HarryPotter.unique.character.split(" ")
  username = name.first[0] + name.last
  user_arr << User.create!(username: username, password: "wedemboyz")
end
Faker::HarryPotter.unique.clear

#create my test users
jesse = User.create!(username: "Jesse", password: "password")
guest = User.create!(username: "Guest", password: "password")

#Create Subjects
subject1 = Subject.create!(title: 'Pokemon', creator_id: guest.id)
subject2 = Subject.create!(title: 'Harry Potter', creator_id: guest.id)
subject3 = Subject.create!(title: 'Game of Thrones', creator_id: guest.id)

#every user follows every subject
user_arr.each do |user|
  SubjectFollow.create(user_id: user.id, subject_id: subject1.id)
  SubjectFollow.create(user_id: user.id, subject_id: subject2.id)
  SubjectFollow.create(user_id: user.id, subject_id: subject3.id)
end

#Create 4 pokemon decks of 30 cards each under Pokemon subject
pokemonRegions = %w(Kanto Johto Hoenn Sinnoh)
decks = []
pokemonRegions.each_with_index do |region, idx|
  decks << Deck.create!(author_id: user_arr[idx].id,
                        subject_id: subject1.id,
                        title: region)
end

#Create cards and cardRatings for each card for guest user
decks.each do |deck|
  card_count = (10..25).to_a.sample
  card_count.times do |num|
    name = Faker::Pokemon.unique.name
    rating = (1..5).to_a.sample
    location = Faker::Pokemon.location
    card = Card.create!(deck_id: deck.id,
                 question: "Where can #{name} be found?",
                 answer: "#{location}")
    CardRating.create!(user_id: guest.id, card_id: card.id, rating: rating)
  end
  Faker::Pokemon.unique.clear
end

#Create 1 Game of Thrones deck with 20 cards
deck = Deck.create!(author_id: user_arr[1].id,
                    subject_id: subject3.id,
                    title: 'Houses')
20.times do |num|
  name = Faker::GameOfThrones.unique.character
  house = Faker::GameOfThrones.house
  card = Card.create!(deck_id: deck.id,
               question: "What house is #{name} in?",
               answer: "#{house}")
  CardRating.create!(user_id: guest.id, card_id: card.id, rating: (1..5).to_a.sample)
end

#Create 7 Harry Potter decks with 15 cards each
books = []
7.times do
  books << Faker::HarryPotter.unique.book
end

decks = []
books.each_with_index do |book, idx|
  decks << Deck.create!(author_id: user_arr.sample.id,
                        subject_id: subject2.id,
                        title: book)
end

decks.each do |deck|
  15.times do |num|
    character = Faker::HarryPotter.character
    quote = Faker::HarryPotter.unique.quote
    card = Card.create!(deck_id: deck.id,
                 question: "Who said: \n #{quote} \n ?",
                 answer: "#{character}")
    CardRating.create!(user_id: guest.id, card_id: card.id, rating: (1..5).to_a.sample)
  end
  Faker::HarryPotter.unique.clear
end

SubjectFollow.create(user_id: jesse.id, subject_id: subject2.id)
SubjectFollow.create(user_id: jesse.id, subject_id: subject1.id)
SubjectFollow.create(user_id: jesse.id, subject_id: subject3.id)

SubjectFollow.create(user_id: guest.id, subject_id: subject2.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject1.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject3.id)
