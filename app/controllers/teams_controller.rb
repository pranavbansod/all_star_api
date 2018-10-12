class TeamsController < ApplicationController

  skip_before_action :verify_authenticity_token

  before_action :set_team, only: [:show,:destroy,:update]

  def index
    @teams = Team.all
    json_response(@teams)
  end

  def create
    @team = Team.new(team_params)
    @team.save
    json_response(@team,:created)
  end

  def show
    json_response(@team)
  end

  def destroy
    @team.destroy
  end

  def update
    @team.update(team_params)
    json_response(@team)
  end

  private

  def team_params
    params.require(:team).permit(:rank,:name,:league)
  end

  def json_response(object,status = :ok)
    render json: object, status: status
  end

  def set_team
    @team = Team.find(params[:id])
  end
end
