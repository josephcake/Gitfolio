Rails.application.routes.draw do
  get 'sessions/new'
  get 'sessions/create'
  get 'sessions/destroy'
  resources :users
  patch "/users/:username", to: "users#update"
  post "/users", to:"users#postGit"

  #other stuff

  post "/github-auth", to: "auth#create"

 # get "/auth/:provider/callback", to: "sessions#create"
 # get 'auth/failure', to: redirect('/')
 # delete 'signout', to: 'sessions#destroy', as: 'signout'
 # root to: 'sessions#new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
