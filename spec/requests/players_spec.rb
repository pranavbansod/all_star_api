require 'rails_helper'

def add_player(number,name,position)
  post '/teams/1/players', params: {player: {:number => number, :name => name, :position => position}}
end

RSpec.describe 'AllStar API', type: :request do
  let!(:teams) {create_list(:team, 1)}

  describe 'POST /teams/:team_id/players   - Add player to a specific team' do

    before do
      add_player(1,'Pranav','GK')
    end

    it 'should create a new player' do
      get '/teams/1/players'
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 201' do
      expect(response).to have_http_status(201)
    end
  end

  describe 'GET /teams/:team_id/players   - All Players of a specific teams' do

    before do
      add_player(1,'Pranav','GK')
      add_player(2,'Patel','CB')
      get '/teams/1/players'
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'should return team 1 players' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(2)
      expect(json[1]['name']).to eq('Patel')
    end
  end

end