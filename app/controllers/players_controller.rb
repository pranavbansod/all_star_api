class PlayersController < ApplicationController
  def index
    @players = Player.all
    json_response(@players)
  end

  def create
    @player = Player.new(params.require(:player).permit(:name,:position))
    json_response(@player,:created)
  end


  private
  def json_response(object,status=:ok)
    render json: object, status: status
  end
end
