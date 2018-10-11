require 'rails_helper'

RSpec.describe 'AllStar API', type: :request do
  let!(:players) {create_list(:player, 10)}

  describe 'GET /players' do

    before do
      get '/players'
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns players' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  describe 'POST /players' do

    before do
      post '/players', params: {player: {:number=>01,:name => 'Pranav', :position => 'GK'}}
    end

    it 'should create a new player' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('Pranav')
    end

    it 'returns status code 201' do
      expect(response).to have_http_status(201)
    end
  end
end