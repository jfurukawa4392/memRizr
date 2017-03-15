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
  validates :user_id, :subject_id, null: false

  belongs_to :user
  belongs_to :subject
end
