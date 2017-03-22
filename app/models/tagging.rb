# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :deck_id, :tag_id, presence: true
  validates :deck_id, uniqueness: { scope: :tag_id }

  belongs_to :deck
  belongs_to :tag
end
