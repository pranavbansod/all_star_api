require 'rails_helper'

RSpec.describe Team, type: :model do
  it 'should validate presence of player name' do
    should validate_presence_of(:name)
  end

  it 'should validate presence of rank' do
    should validate_presence_of(:rank)
  end

  it 'should validate presence of league' do
    should  validate_presence_of(:league)
  end
end
