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

require 'test_helper'

class SubjectFollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
