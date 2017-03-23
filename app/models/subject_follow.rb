# == Schema Information
#
# Table name: subject_follows
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  subject_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SubjectFollow < ApplicationRecord
  validates :user_id, :subject_id, presence: true
  validates :user_id, uniqueness: { scope: :subject_id }

  belongs_to :user
  belongs_to :subject
end
