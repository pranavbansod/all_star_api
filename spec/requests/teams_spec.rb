require 'rails_helper'

RSpec.describe 'AllStar API', type: :request do
  let!(:teams) {create_list(:team, 10)}

  describe 'GET /teams' do

    before do
      get '/teams'
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns teams' do
      json = JSON.parse(response.body)
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end
  end

  describe 'POST /teams' do

    before do
      post '/teams', params: {team: {:rank => 01, :name => 'Real Madrid', :league =>'Liga BBVA'}}
    end

    it 'should create a new team' do
      json = JSON.parse(response.body)
      expect(json['name']).to eq('Real Madrid')
    end

    it 'returns status code 201' do
      expect(response).to have_http_status(201)
    end
  end
end