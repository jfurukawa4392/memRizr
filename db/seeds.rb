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

#Create Subjects
subject1 = Subject.create!(title: 'Pokemon', creator_id: user_arr.last.id)
subject2 = Subject.create!(title: 'Harry Potter', creator_id: user_arr.first.id)
subject3 = Subject.create!(title: 'Game of Thrones', creator_id: user_arr[1].id)

#Create 4 pokemon decks of 30 cards each under Pokemon subject
pokemonRegions = %w(kanto johto hoenn sinnoh)

decks = []
pokemonRegions.each_with_index do |region, idx|
  decks << Deck.create!(author_id: user_arr[idx].id,
                        subject_id: subject1.id,
                        title: region)
end

decks.each do |deck|
  30.times do |num|
    name = Faker::Pokemon.unique.name
    location = Faker::Pokemon.location
    Card.create!(deck_id: deck.id,
                 question: "Where can #{name} be found?",
                 answer: "#{location}")
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
  Card.create!(deck_id: deck.id,
               question: "What house is #{name} in?",
               answer: "#{house}")
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
    Card.create!(deck_id: deck.id,
                 question: "Who said: \n #{quote}?",
                 answer: "#{character}")
  end
  Faker::HarryPotter.unique.clear
end

#create my test user
jesse = User.create!(username: "Jesse", password: "password")
SubjectFollow.create(user_id: jesse.id, subject_id: subject2.id)
SubjectFollow.create(user_id: jesse.id, subject_id: subject1.id)
