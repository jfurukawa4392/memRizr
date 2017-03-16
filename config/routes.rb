Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :cards, only: [:show, :create, :update, :destroy]
    resources :decks, only: [:index, :show, :create, :destroy]
    resources :subject_follows, only: [:create, :destroy, :index]
    resources :subjects, only: [:show, :index]
  end

  root "static_pages#root"
end
