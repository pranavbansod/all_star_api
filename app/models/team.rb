class Team < ApplicationRecord
  validates :rank, presence: true
  validates :name, presence: true
  validates :league, presence: true
  has_many :players
end
