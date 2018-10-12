class PlayersController < ApplicationController

  skip_before_action :verify_authenticity_token

  before_action :set_team
  before_action :set_player, only: [:show, :update, :destroy]

  def index
    @players = Player.find_by_sql "SELECT * FROM players WHERE team_id = #{@team.id}"
    json_response(@players)
  end

  def create
    @player = @team.players.new(player_params)
    @player.save
    json_response(@player, :created)
  end

  def show
    if player_not_in_team
      player_not_found
    else
      json_response(@player)
    end
  end

  def update
    if player_not_in_team
      player_not_found
    else
      @player.update(player_params)
      json_response(@player)
    end

  end

  def destroy
    if player_not_in_team
      player_not_found
    else
      @player.destroy
      json_response({message: "Player deleted"}, 200)
    end
  end

  private

  def player_not_in_team
    player_id = @player.as_json['team_id']
    team_id = @team.as_json['id']
    team_id != player_id
  end

  def player_params
    params.require(:player).permit(:number, :name, :position)
  end

  def json_response(object, status = :ok)
    render json: object, status: status
  end

  def set_team
    @team = Team.find(params[:team_id])
  end

  def set_player
    @player = Player.find(params[:id])
  end
end

private

def player_not_found
  json_response({error: "No player with id #{@player[:team_id]} in team with team id #{@team[:id]}"}, 404)
end
