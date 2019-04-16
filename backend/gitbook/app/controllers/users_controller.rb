class UsersController < ApplicationController
  # before_action :find_user, only: [:show, :update]
  skip_before_action :verify_authenticity_token

  def index
    @users = User.all

    render json: @users
  end

  def create
    @user = User.create(user_params)
    render json: @users
  end

  def show
    @user = User.find_by(username: user_params[:username])
    render json: @user
  end

  def update
    # byebug
    @user = User.find_by(username: user_params[:username])
    @user.update(user_params)
    if @user.save
      render json: @user, status: :accepted
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
    end
  end

  def postGit
    byebug
    HTTParty.post("http://example.com/login",
      body: {
        client_id: "test@example.com",
        client_secret: "chunky_bacon"
      })
  end

  def getGit

  end



  private

  def user_params
    # byebug
    params.require(:user).permit(:username, :layout)
  end

end
