class PlayersController < ApplicationController

  protect_from_forgery except: :index

  before_action :set_team
  before_action :set_player, only: [:show,:update,:destroy]

  def index
    @players = Player.find_by_sql "SELECT * FROM players WHERE team_id = #{@team.id}"
    json_response(@players)
  end

  def create
    @player = @team.players.new(player_params)
    @player.save
    json_response(@player,:created)
  end

  def show
    json_response(@player)
  end

  def update
    @player.update(player_params)
    json_response(@player)
  end

  def destroy
    @player.destroy
  end

  private

  def player_params
    params.require(:player).permit(:number, :name, :position)
  end

  def json_response(object,status=:ok)
    render json: object, status: status
  end

  def set_team
    @team = Team.find(params[:team_id])
  end

  def set_player
    @player = Player.find(params[:id])
  end
end
