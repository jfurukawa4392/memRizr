require 'test_helper'

class CardRatingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get card_ratings_create_url
    assert_response :success
  end

end
