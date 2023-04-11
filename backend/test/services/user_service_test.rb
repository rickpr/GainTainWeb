# frozen_string_literal: true

require 'test_helper'

require './lib/auth'
require './services/user_service'

class UserServiceTest < Minitest::Test
  attr_accessor :user

  def setup
    self.user = User.create!(name: 'test', email: 'test', password: 'test')
  end

  def teardown
    user.destroy!
  end

  def test_list_users
    users = UserService.new.list_users(nil, MockGrpcCall.new({ 'token' => token }))
    assert users.to_h.key?(:users)
    users = users.to_h[:users]
    assert users.one?
    assert_equal({ id: user.id, email: 'test', name: 'test' }, users.first)
  end

  def test_get_user
    response_user = UserService.new.get_user(
      Gaintain::UserRequest.new(id: user.id),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal user.id, response_user.id
  end

  private

  def token
    Auth.encode(user_id: user.id)
  end
end
