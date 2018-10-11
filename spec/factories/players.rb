require 'faker'

FactoryBot.define do
  factory :player do
    number {Faker::Number.leading_zero_number(2)}
    name { Faker::Football.player}
    position { position = ['GK', 'CB', 'LB', 'RB', 'DM', 'LM', 'CM', 'RM', 'AM', 'LW', 'SS', 'RW', 'CF']
    position.sample }
    team_id {[1,1].sample}
  end
end