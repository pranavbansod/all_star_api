require 'rails_helper'

RSpec.describe 'AllStar API', type: :request do
  let!(:teams) {create_list(:team, 1)}

  describe 'GET /teams/:team_id/players    - Players of a specific teams' do

    before do
      post '/teams/1/players', params: {player: {:number=>1,:name => 'Pranav', :position => 'GK'}}
      post '/teams/1/players', params: {player: {:number=>4,:name => 'PATEL', :position => 'CB'}}
      get '/teams/1/players'
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'should return team 1 players' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(2)
    end
  end

  describe 'POST /teams/:team_id/players   - Add player to a specific team' do

    before do
      post '/teams/1/players', params: {player: {:number=>01,:name => 'Pranav', :position => 'GK'}}
    end

    it 'should create a new player' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('Pranav')

      get '/teams/1/players'
    end

    it 'returns status code 201' do
      expect(response).to have_http_status(201)
    end
  end
end