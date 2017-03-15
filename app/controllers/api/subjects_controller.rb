class Api::SubjectsController < ApplicationController

  def index
    @subjects = Subject.all
  end

  def show
    @subject = Subject.find(params[:id])
  end

  def create
    @subject = Subject.new(subject_params)

    if @subject.save
      render 'api/subjects/show'
    else
      render json: @subect.errors.full_messages, status: 422
    end
  end

  def update
    @subject = Subject.find(params[:id])

    if @subject.update(subject_params)
      render 'api/subjects/show'
    else
      render json: @subject.errors.full_messages, status: 422
    end
  end

  def delete
    @subject = Subject.find(params[:id])
    @subject.destroy
    render 'api/subjects/show'
  end

  private
  def subject_params
    params.require(:subject).permit(:title, :creator_id)
  end
end
