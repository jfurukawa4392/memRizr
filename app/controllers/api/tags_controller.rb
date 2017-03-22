class Api::TagsController < ApplicationController
  def destroy
    deck_id, tag_id = params[:tag][:deck_id], params[:id]

    tagging = Tagging.find_by(tag_id: tag_id, deck_id: deck_id)
    tagging.destroy
    
    @deck = Deck.find(deck_id)

    render 'api/decks/show'
  end

  private
  def tag_params
    params.require(:tag).permit(:deck_id)
  end
end
