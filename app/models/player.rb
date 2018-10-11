class Player < ApplicationRecord
  validates :number, presence: true
  validates :name, presence: true
  validates :position, presence: true
  belongs_to :team
end
