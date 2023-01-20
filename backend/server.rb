#!/usr/bin/env ruby

require 'active_record'
require 'grpc'
require 'pry'

require './models/user'

GRPC_PATH = "#{__dir__}/grpc"
$LOAD_PATH.unshift(GRPC_PATH) unless $LOAD_PATH.include?(GRPC_PATH)
require './grpc/user_services_pb'

ActiveRecord::Base.establish_connection(
  adapter: "postgresql",
  host: "localhost",
  database: "gaintain"
)


# GreeterServer is simple server that implements the Helloworld Greeter server.
class GreeterServer < Gaintain::UserService::Service
  def list_users(_unused_request, _unused_call)
    Gaintain::Users.new(users: User.all.map(&:to_proto))
  end

  def get_user(user_request, _unused_call)
    User.find_by!(id: user_request.id).to_proto
  end

  def create_user(new_user, _unused_call)
    User.create!(
      email: new_user.email,
      name: new_user.name,
      password: new_user.password
    ).to_proto
  end


  def update_user(modified_user, _unused_call)
    user = User.find_by!(id: modified_user.id)
    user.email = modified_user.email if modified_user.email
    user.name = modified_user.name if modified_user.name
    user.password = modified_user.password if modified_user.password
    user.save!
    user.to_proto
  end

  def delete_user(user_request, _unused_call)
    User.find_by!(id: user_request.id).destroy!
  end
end

# main starts an RpcServer that receives requests to GreeterServer at the sample
# server port.
def main
  s = GRPC::RpcServer.new
  s.add_http2_port('0.0.0.0:50051', :this_port_is_insecure)
  s.handle(GreeterServer)
  # Runs the server with SIGHUP, SIGINT and SIGTERM signal handlers to
  #   gracefully shutdown.
  # User could also choose to run server via call to run_till_terminated
  s.run_till_terminated_or_interrupted([1, 'int', 'SIGTERM'])
end

main
