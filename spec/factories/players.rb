require 'faker'

FactoryBot.define do
  factory :player do
    name { Faker::Football.player}
    position { position = ['GK', 'CB', 'LB', 'RB', 'DM', 'LM', 'CM', 'RM', 'AM', 'LW', 'SS', 'RW', 'CF']
    position.sample }
  end
end