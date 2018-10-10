class PlayersController < ApplicationController

  protect_from_forgery except: :index

  before_action :set_player, only: [:show,:update]

  def index
    @players = Player.all
    json_response(@players)
  end

  def create
    @player = Player.new(params.require(:player).permit(:number,:name,:position))
    @player.save
    json_response(@player,:created)
  end

  def show
    json_response(@player)
  end

  def update
    @player.update(params.require(:player).permit(:number,:name,:position))
  end

  private
  def json_response(object,status=:ok)
    render json: object, status: status
  end

  def set_player
    @player = Player.find(params[:id])
  end
end
