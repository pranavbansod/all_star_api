class PlayersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @players = Player.all
    json_response(@players)
  end

  def create
    @player = Player.new(params.require(:player).permit(:name,:position))
    @player.save
    json_response(@player,:created)
  end


  private
  def json_response(object,status=:ok)
    render json: object, status: status
  end
end
