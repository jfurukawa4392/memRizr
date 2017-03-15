# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ApplicationRecord
  validates :title, :creator_id, presence: true

  has_many(
    :decks,
    class_name: 'Deck',
    foreign_key: :subject_id,
    primary_key: :id
  )

  belongs_to(
    :creator,
    class_name: 'User',
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many(
    :subject_follows,
    class_name: 'SubjectFollow',
    foreign_key: :subject_id,
    primary_key: :id
  )

  has_many(
    :followers,
    through: :subject_follows,
    source: :user
  )
end
