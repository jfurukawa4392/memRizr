class Api::DecksController < ApplicationController

  def index
    @decks = Deck.all
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    
    if @deck.save
      render 'api/decks/show'
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def update
    @deck = Deck.find(params[:id])

    if @deck.update(deck_params)
      render 'api/decks/show'
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def delete
    @deck = Deck.find(params[:id])
    @deck.destroy
    render json: 'api/decks/show'
  end

  private
  def deck_params
    params.require(:deck).permit(:subject_id, :title)
  end
end
