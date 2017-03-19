# == Schema Information
#
# Table name: card_ratings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  card_id    :integer          not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CardRating < ApplicationRecord
  validates :user_id, uniqueness: { scope: :card_id }
  validates :rating, :user_id, :card_id, presence: true

  belongs_to :card
  belongs_to :user
end
