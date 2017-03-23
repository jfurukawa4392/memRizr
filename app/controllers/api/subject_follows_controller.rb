class Api::SubjectFollowsController < ApplicationController
  def index
    @subjects = current_user.followed_subjects
    render 'api/subjects/index'
  end

  def destroy
    follow = SubjectFollow.find_by(subject_id: params[:id],
                                   user_id: current_user.id)
    @subject = follow.subject
    follow.destroy
    render 'api/subjects/show'
  end

  private
  def subject_follow_params
    params.require(:subject_follow).permit(:user_id, :subject_id)
  end
end
