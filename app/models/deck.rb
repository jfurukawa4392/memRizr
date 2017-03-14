# == Schema Information
#
# Table name: decks
#
#  id         :integer          not null, primary key
#  subject_id :integer          not null
#  author_id  :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord
end
