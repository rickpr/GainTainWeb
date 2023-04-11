# frozen_string_literal: true

require 'test_helper'

require './lib/database'
require './services/user_service'

class UserServiceTest < Minitest::Test
  def test_lists_users
    Database.connect!
    users = UserService.new.list_users(nil, nil)
    assert users.to_h.key?(:users)
    assert users.to_h[:users].is_a?(Array)
  end
end
