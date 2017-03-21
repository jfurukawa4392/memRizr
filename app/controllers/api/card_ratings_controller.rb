class Api::CardRatingsController < ApplicationController
  def create
    @rating = CardRating.find_by(user_id: current_user.id,
                                 card_id: params[:card_rating][:card_id])
    if @rating
      @rating.update(rating: params[:card_rating][:rating])
    else
      @rating = CardRating.new(card_rating_params)
      @rating.user_id = current_user.id
      @rating.save
    end
    
    @card = @rating.card
    render 'api/cards/show'
  end

  def card_rating_params
    params.require(:card_rating).permit(:card_id, :rating)
  end
end
