require 'rails_helper'

def player_params(number,name, position)
  {player: {:number => number, :name => name, :position => position}}
end

def add_player_to_team(team_id,number, name, position)
  post "/teams/#{team_id}/players", params: player_params(number, name, position)
end

RSpec.describe 'Player API', type: :request do
  let!(:teams) {create_list(:team, 2)}

  describe "POST /teams/:team_id/players   - Add player to a specific team" do

    before do
      add_player_to_team(1,1, 'Pranav', 'GK')
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

  describe "GET /teams/:team_id/players   - All Players of a specific teams" do

    before do
      add_player_to_team(1,1, 'Pranav', 'GK')
      add_player_to_team(1,2, 'Patel', 'CB')
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

  describe "GET /teams/:team_id/players/:id  - Show a specific player" do

    before do
      add_player_to_team(1,7, 'Somesh', 'LW')
      add_player_to_team(2,11, 'Vaibhav', 'RW')
    end

    it 'should get a player with number 7 from team 1' do
      get '/teams/1/players/1'

      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['name']).to eq('Somesh')
      expect(json['number']).to eq(7)
    end

    it 'should not return Somesh if the team id is 2' do
      get '/teams/2/players/1'

      json = JSON.parse(response.body)
      expect(response).to have_http_status(404)
      expect(json['error']).to eq('No player with id 1 in team with team id 2')
    end

    it 'should return a player with number 11 from team 2' do
      get '/teams/2/players/2'

      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json).not_to be_empty
      expect(json['number']).to eq(11)
      expect(json['name']).to eq('Vaibhav')
    end
  end

  describe "PUT /teams/:team_id/players/:id  - Update a player" do

    before do
      add_player_to_team(1,7, 'Somesh', 'LW')
      add_player_to_team(2,11, 'Vaibhav', 'RW')
    end

    it 'should update player 1 name from Somesh to Ronaldo' do

      get '/teams/1/players/1'

      json = JSON.parse(response.body)
      expect(json['name']).to eq('Somesh')

      put '/teams/1/players/1', params: player_params(7,'Ronaldo','LW')

      get '/teams/1/players/1'

      json = JSON.parse(response.body)
      expect(json['name']).to eq('Ronaldo')
    end
  end

  describe "DELETE /teams/:team_id/players/id  - Delete a player" do

    before do
      add_player_to_team(2,7, 'Somesh', 'LW')
      add_player_to_team(2,11, 'Vaibhav', 'RW')
      add_player_to_team(1,1, 'Pranav', 'GK')
    end

    it 'should delete player with id 2 from team 2' do
      delete '/teams/2/players/2'

      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json['message']).to eq('Player deleted')

      get '/teams/2/players'

      json = JSON.parse(response.body)
      expect(json.size).to eq(1)
      expect(json.first['name']).to eq('Somesh')
    end

    it 'should not delete player with id 2 from team 1' do
      delete '/teams/1/players/2'

      json = JSON.parse(response.body)
      expect(json['error']).to eq('No player with id 2 in team with team id 1')

      get '/teams/1/players'

      json = JSON.parse(response.body)
      expect(json.size).to eq(1)
    end
  end
end