# frozen_string_literal: true

require 'bcrypt'

require './models/application_record'

class User < ApplicationRecord
  has_many :workouts
  has_many :exercises

  def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.hashed_password = @password
  end

  def to_proto
    Gaintain::User.new(id:, email:, name:)
  end
end
