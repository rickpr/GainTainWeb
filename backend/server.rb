# frozen_string_literal: true

# /usr/bin/env ruby

require 'grpc'

require './lib/database'
require './lib/auth'

GRPC_PATH = "#{__dir__}/grpc".freeze
$LOAD_PATH.unshift(GRPC_PATH) unless $LOAD_PATH.include?(GRPC_PATH)

require './services/user_service'
require './services/login_service'
require './services/exercise_service'

def main
  Database.connect!
  s = GRPC::RpcServer.new
  s.add_http2_port('0.0.0.0:50051', :this_port_is_insecure)

  s.handle(UserService)
  s.handle(LoginService)
  s.handle(ExerciseService)

  # Runs the server with SIGHUP, SIGINT and SIGTERM signal handlers to
  #   gracefully shutdown.
  # User could also choose to run server via call to run_till_terminated
  s.run_till_terminated_or_interrupted([1, 'int', 'SIGTERM'])
end

main
