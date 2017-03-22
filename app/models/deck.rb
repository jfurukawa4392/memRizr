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

  has_many :cards, dependent: :destroy
  has_many :taggings, dependent: :destroy

  has_many(
    :tags,
    through: :taggings,
    source: :tag
  )

  def getCardRatings(user_id)
    self.cards.left_outer_joins(:ratings).where("card_ratings.user_id = #{user_id}").select('cards.id', 'cards.question', 'cards.answer', :rating)
  end
end
