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
  validates :subject_id, :author_id, :title, presence: true

  belongs_to(
    :subject,
    class_name: 'Subject',
    foreign_key: :subject_id,
    primary_key: :id
  )

  belongs_to(
    :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :cards,
    class_name: 'Card',
    foreign_key: :deck_id,
    primary_key: :id
  )
end
