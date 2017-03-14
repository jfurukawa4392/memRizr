# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Create 20 users
user_arr = []
20.times do |num|
  name = Faker::HarryPotter.unique.character.split(" ") #=> "Harry Potter"
  username = name.first[0] + name.last
  user_arr << User.create!(username: username, password: "wedemboyz")
end

decks = []
user_arr.each do |user|
  decks << Deck.create!(author_id: user.id,)
end
