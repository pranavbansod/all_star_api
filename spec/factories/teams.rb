require 'faker'

FactoryBot.define do
  factory :team do
    rank {Faker::Number.number(1)}
    name { Faker::Football.team}
    league { league = ['Liga BBVA', 'Serie A', 'Ligue 1', 'Premier League', 'Indian Super League']
    league.sample }
  end
end