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

require 'test_helper'

class CardRatingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
