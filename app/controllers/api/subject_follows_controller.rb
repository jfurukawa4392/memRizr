class Api::SubjectFollowsController < ApplicationController
  def index
    @subjects = current_user.followed_subjects
    render 'api/subjects/index'
  end

  def destroy
  end

  private
  def subject_follow_params
    params.require(:subject_follow).permit(:user_id, :subject_id)
  end
end
