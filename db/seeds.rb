# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require_relative './seeding_util'

User.destroy_all
Subject.destroy_all
SubjectFollow.destroy_all
Deck.destroy_all
Card.destroy_all
CardRating.destroy_all

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
subject3 = Subject.create!(title: 'Game of Thrones', creator_id: jesse.id)
subject4 = Subject.create!(title: 'SQL and ActiveRecord', creator_id: guest.id)
subject5 = Subject.create!(title: 'Ruby', creator_id: guest.id)
subject6 = Subject.create!(title: 'Javascript', creator_id: guest.id)
subject7 = Subject.create!(title: 'Git', creator_id: jesse.id)
subject8 = Subject.create!(title: 'Spanish', creator_id: jesse.id)
subject9 = Subject.create!(title: 'Algebra', creator_id: jesse.id)
subject10 = Subject.create!(title: 'French', creator_id: jesse.id)
subject11 = Subject.create!(title: 'Chemistry', creator_id: jesse.id)


#every user follows every subject
user_arr.each_with_index do |user, idx|
  if idx%2==0
    SubjectFollow.create(user_id: user.id, subject_id: subject1.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject2.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject3.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject4.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject5.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject6.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject7.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject8.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject9.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject10.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject11.id)
  else
    SubjectFollow.create(user_id: user.id, subject_id: subject1.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject2.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject3.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject4.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject6.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject9.id)
    SubjectFollow.create(user_id: user.id, subject_id: subject8.id)
  end
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

#make 15 cards for each Harry Potter deck
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

# make 5 SQL decks each with 20 cards
chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5']
decks = []
chapters.each do |chp|
  decks << Deck.create!(author_id: guest.id, subject_id: subject4.id, title: chp)
end

cards = read_cards("db/SQL.txt")
decks.each do |deck|
  index = 0
  20.times do |num|
    tmp = cards[index]
    q = tmp.keys.first
    a = tmp[q]
    card = Card.create!(deck_id: deck.id, question: q, answer: a)
    CardRating.create!(user_id: guest.id, card_id: card.id, rating: (1..5).to_a.sample)
    index += 1
  end
end

# make one deck of 30 git cards
deck = Deck.create!(author_id: guest.id, subject_id: subject7.id, title: 'Basic Git')
cards = read_cards('db/Git_cards.txt')

30.times do |idx|
  tmp = cards[idx]
  q = tmp.keys.first
  a = tmp[q]
  card = Card.create!(deck_id: deck.id, question: q, answer: a)
  CardRating.create!(user_id: guest.id, card_id: card.id, rating: (1..5).to_a.sample)
end

# make 10 decks of 50 spanish cards
chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5',
            'Chapter 6', 'Chapter 7', 'Chapter 8', 'Chapter 9', 'Chapter 10']
decks = []
chapters.each do |chp|
  decks << Deck.create!(author_id: guest.id, subject_id: subject8.id, title: chp)
end

cards = read_cards('db/Spanish.txt')
decks.each do |deck|
  index = 0
  50.times do |num|
    tmp = cards[index]
    q = tmp.keys.first
    a = tmp[q]
    card = Card.create!(deck_id: deck.id, question: q, answer: a)
    index += 1
  end
end

# make 4 decks of 15-18 cards
chapters = ['Equations', 'Expressions', 'Polynomials', 'Factoring']
decks = []
chapters.each do |chp|
  decks << Deck.create!(author_id: guest.id, subject_id: subject9.id, title: chp)
end

cards = read_cards('db/Algebra.txt')
decks.each do |deck|
  index = 0
  random = (15..18).to_a.sample
  random.times do |num|
    tmp = cards[index]
    q = tmp.keys.first
    a = tmp[q]
    card = Card.create!(deck_id: deck.id, question: q, answer: a)
    if index > 36
      CardRating.create!(user_id: guest.id, card_id: card.id, rating: (1..5).to_a.sample)
    end
    index += 1
  end
end
### subject1 = Subject.create!(title: 'Pokemon', creator_id: guest.id)
### subject2 = Subject.create!(title: 'Harry Potter', creator_id: guest.id)
### subject3 = Subject.create!(title: 'Game of Thrones', creator_id: jesse.id)
### subject4 = Subject.create!(title: 'SQL', creator_id: guest.id)
# subject5 = Subject.create!(title: 'Ruby', creator_id: guest.id)
# subject6 = Subject.create!(title: 'Javascript', creator_id: guest.id)
### subject7 = Subject.create!(title: 'Git', creator_id: jesse.id)
### subject8 = Subject.create!(title: 'Spanish', creator_id: jesse.id)
### subject9 = Subject.create!(title: 'Algebra', creator_id: jesse.id)
# subject10 = Subject.create!(title: 'French', creator_id: jesse.id)
# subject11 = Subject.create!(title: 'Chemistry', creator_id: jesse.id)
SubjectFollow.create(user_id: jesse.id, subject_id: subject2.id)
SubjectFollow.create(user_id: jesse.id, subject_id: subject1.id)
SubjectFollow.create(user_id: jesse.id, subject_id: subject3.id)

SubjectFollow.create(user_id: guest.id, subject_id: subject3.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject4.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject5.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject6.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject7.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject8.id)
SubjectFollow.create(user_id: guest.id, subject_id: subject11.id)
