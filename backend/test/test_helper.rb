# frozen_string_literal: true

require 'minitest'
require 'minitest/autorun'
GRPC_PATH = "#{__dir__}/../grpc".freeze
$LOAD_PATH.unshift(GRPC_PATH) unless $LOAD_PATH.include?(GRPC_PATH)
