Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => redirect('/index.html')
  get '/player/:id', :to => 'players#show'
  get '/index.html', :to => redirect('/index.html')
  resources :players
end
