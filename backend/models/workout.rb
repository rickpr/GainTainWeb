#!/usr/bin/env ruby

require './models/application_record'

class Workout < ApplicationRecord
  belongs_to :user
  has_many :supersets, -> { order(:position) }

  def to_proto
    Gaintain::Workout.new(id:, user_id:, name:, description:)
  end
end
