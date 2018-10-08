require 'rails_helper'

RSpec.describe Player, type: :model do
  it 'should validate presence of player name' do
    should validate_presence_of(:name)
  end

  it 'should validate presence' do
    should validate_presence_of(:position)
  end
end
