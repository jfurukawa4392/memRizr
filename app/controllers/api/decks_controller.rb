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
    puts "in update"
    @deck = Deck.find(params[:id])
    #get ids of previous cards associated with this deck
    prev_card_ids = @deck.cards.map { |card| card.id}

    #get ids for new or updated cards
    new_ids = []
    params[:cards].each do |card|
      new_or_update_card =  Card.find_by(deck_id: @deck.id, question: card[question], answer: card[answer])
      if(new_or_update_card)
        new_or_update_card.update(question: card[question], answer: card[answer])
        new_ids << new_or_update_card.id
      else
        new_ids << Card.create(deck_id: @deck.id, question: card[question], answer: card[answer]).id
      end
    end
    puts "past updating/creating"
    #card ids that aren't in the new set should be destroyed
    (new_ids - prev_card_ids).each do |id|
      Card.find_by(id: id).destroy
    end

    render 'api/decks/show'
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render json: @deck
  end

  private
  def deck_params
    params.require(:deck).permit(:subject_id, :title)
  end
end
