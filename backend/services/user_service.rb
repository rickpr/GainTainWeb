# frozen_string_literal: true

require './models/user'
require './grpc/user_services_pb'

# User GRPC service
class UserService < Gaintain::UserService::Service
  def list_users(_unused_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      Gaintain::Users.new(users: User.all.map(&:to_proto))
    end
  end

  def get_user(user_request, grpc_call)
    Auth.with_authentication(grpc_call) { User.find(user_request.id).to_proto }
  end

  def create_user(new_user, grpc_call)
    Auth.with_authentication(grpc_call) do
      User.create!(
        email: new_user.email,
        name: new_user.name,
        password: new_user.password
      ).to_proto
    end
  end

  def update_user(modified_user, grpc_call)
    Auth.with_authentication(grpc_call) do
      user = User.find(modified_user.id)
      user.email = modified_user.email if modified_user.email
      user.name = modified_user.name if modified_user.name
      user.password = modified_user.password if modified_user.password
      user.save!
      user.to_proto
    end
  end

  def delete_user(user_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      user = User.find(user_request.id)
      user.destroy!
      user.to_proto
    end
  end
end
