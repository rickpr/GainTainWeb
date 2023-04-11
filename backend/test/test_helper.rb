# frozen_string_literal: true

require 'minitest'
require 'minitest/autorun'
GRPC_PATH = "#{__dir__}/../grpc".freeze
$LOAD_PATH.unshift(GRPC_PATH) unless $LOAD_PATH.include?(GRPC_PATH)

require './lib/database'
require './lib/auth'
require './test/mock_grpc_call'

module TestDatabase
  def connect!
    ActiveRecord::Base.establish_connection(
      adapter: 'postgresql',
      host: 'localhost',
      database: 'gaintain-test'
    )
  end
end

Database.singleton_class.prepend(TestDatabase)
Database.connect!
