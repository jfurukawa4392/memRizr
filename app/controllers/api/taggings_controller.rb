class Api::TaggingsController < ApplicationController
  def create
    tag_name = params[:tagging][:tag].downcase
    deck_id = params[:tagging][:deck_id]

    tag = Tag.find_by(tag_name: tag_name)
    p tag_name
    p deck_id
    if tag
      Tagging.find_or_create_by(deck_id: deck_id, tag_id: tag.id)
    else
      tag = Tag.create(tag_name: tag_name)
      Tagging.create(deck_id: deck_id, tag_id: tag.id)
    end

    @deck = Deck.find(deck_id)
    render 'api/decks/show'
  end

  def destroy
    tagging = Tagging.find_by_(params[:id])
    p tagging
    @deck = tagging.deck
    tagging.destroy

    render 'api/decks/show'
  end

  private
  def tagging_params
    params.require(:tagging).permit(:deck_id, :tag_id, :tag)
  end
end
