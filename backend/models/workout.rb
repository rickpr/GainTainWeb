#!/usr/bin/env ruby

require './models/application_record'

class Workout < ApplicationRecord
  belongs_to :user
  has_many :supersets

  def to_proto
    Gaintain::Workout.new(id: id, user_id: user_id, name: name, description: description)
  end
end
