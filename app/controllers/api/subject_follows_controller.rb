class Api::SubjectFollowsController < ApplicationController
  def index
    @subjects = current_user.followed_subjects
    render 'api/subjects/index'
  end

  def create
    subject_id = params.permit(:subjectId)[:subjectId]

    sub_follow = SubjectFollow.new(user_id: current_user.id, subject_id: subject_id)
    if sub_follow.save
      @subject = sub_follow.subject
      render 'api/subjects/show'
    else
      render json: false
    end
  end

  def destroy
    follow = SubjectFollow.find_by(subject_id: params[:id],
                                   user_id: current_user.id)
    @subject = follow.subject
    follow.destroy
    render json: { userFollows: false, subject: @subject }
  end

  private
  def subject_follow_params
    params.require(:subject_follow).permit(:user_id, :subject_id)
  end
end
