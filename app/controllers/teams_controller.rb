class TeamsController < ApplicationController
  def index
    @teams = Team.all
    json_response(@teams)
  end

  def create
    @team = Team.new(params.require(:team).permit(:rank,:name,:league))
    json_response(@team,:created)
  end

  private
  def json_response(object,status = :ok)
    render json: object, status: status
  end
end
