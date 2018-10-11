class TeamsController < ApplicationController

  before_action :set_team, only: [:show,:destroy]

  def index
    @teams = Team.all
    json_response(@teams)
  end

  def create
    @team = Team.new(params.require(:team).permit(:rank,:name,:league))
    json_response(@team,:created)
  end

  def show
    json_response(@team)
  end

  def destroy
    @team.destroy
  end

  private
  def json_response(object,status = :ok)
    render json: object, status: status
  end

  def set_team
    @team = Team.find(params[:id])
  end
end
