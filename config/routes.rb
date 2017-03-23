Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :decks, only: [:index, :show, :create, :update, :destroy]
    resources :subject_follows, only: [:index, :create, :destroy]
    resources :subjects, only: [:show, :index, :create]
    resources :card_ratings, only: [:create]
    resources :taggings, only: [:create, :destroy]
    resources :tags, only: [:destroy]
  end

  root "static_pages#root"
end
