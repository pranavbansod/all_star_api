require 'rails_helper'

RSpec.describe 'AllStar API', type: :request do
  let!(:players) { create_list(:player, 10) }

  describe 'GET /players' do

    before {get '/players'}

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns players' do
      json = response.body
      expect(json).not_to be_empty
      expect(JSON.parse(json).size).to eq(10)
    end
  end
end