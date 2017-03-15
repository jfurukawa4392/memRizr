class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = Card.create(card_params)

    if @card.save
      render 'api/cards/show'
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render 'api/cards/show'
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def delete
    @card = Card.find(params[:id])
    @card.destroy
    render 'api/cards/show'
  end

  private
  def card_params
    params.require(:card).permit(:deck_id, :question, :answer)
  end
end
