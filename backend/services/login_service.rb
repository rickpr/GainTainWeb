# frozen_string_literal: true

require './grpc/login_services_pb'

# User GRPC service
class LoginService < Gaintain::LoginService::Service
  def login(login_request, _unused_call)
    Database.with_database do
      user = User.find_by!(email: login_request.email)
      raise GRPC::BadStatus.new_status_exception(2, 'Invalid password') unless user.password == login_request.password

      token = Auth.encode({ user_id: user.id })
      Gaintain::LoginResponse.new(token:)
    end
  end
end
