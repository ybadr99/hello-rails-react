Rails.application.routes.draw do
  get 'root/index'

  get '/random_greeting', to: 'random_messages#random_greeting'

  root 'home#index'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
