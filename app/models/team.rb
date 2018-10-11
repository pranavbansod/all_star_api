class Team < ApplicationRecord
  validates :name, presence: true
  validates :rank, presence: true
  validates :league, presence: true
  has_many :players
end
