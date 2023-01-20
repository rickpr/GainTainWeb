#!/usr/bin/env ruby

# Copyright 2015 gRPC authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Sample app that connects to a Gaintain service.
#
# Usage: $ path/to/client.rb

require 'grpc'

GRPC_PATH = "#{__dir__}/grpc"
$LOAD_PATH.unshift(GRPC_PATH) unless $LOAD_PATH.include?(GRPC_PATH)
require './grpc/user_services_pb'


def main
  hostname = ARGV.size > 1 ?  ARGV[1] : 'localhost:8080'
  stub = Gaintain::UserService::Stub.new(hostname, :this_channel_is_insecure)
  begin
    message = stub.list_users(Gaintain::UserRequest.new)
    p "Users: #{message}"
    message = stub.create_user(Gaintain::NewUser.new(name: 'Ricardo', password: 'password', email: 'fdisk@fdisk.co'))
    p "Created user #{message}"
    message = stub.list_users(Gaintain::UserRequest.new)
    p "Users: #{message}"
  rescue GRPC::BadStatus => e
    abort "ERROR: #{e.message}"
  end
end

main
