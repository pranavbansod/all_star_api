class PlayersController < ApplicationController

  protect_from_forgery except: :index

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
    @player = Player.find(params[:id])
    json_response(@player)
  end

  private
  def json_response(object,status=:ok)
    render json: object, status: status
  end
end
