require 'test_helper'

class Api::TaggingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_taggings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_taggings_destroy_url
    assert_response :success
  end

end
