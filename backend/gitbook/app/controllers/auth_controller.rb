require 'rest-client'
class AuthController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    # puts params
    client_id = params[:client_id]
    client_secret = params[:client_secret]
    code = params[:code]
    # $.ajax({
    #   type: "POST",
    #   url: "https://github.com/login/oauth/access_token?client_id=#{client_id}&client_secret=#{client_secret}&code=#{code}"
    #   })

    respond=RestClient.post("https://github.com/login/oauth/access_token", {
      'client_id':client_id,
      'client_secret':client_secret,
      'code':code
      })

      render json:respond
  end
end
