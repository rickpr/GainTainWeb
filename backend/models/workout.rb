#!/usr/bin/env ruby

require './models/application_record'

# A collection of supersets.
# This is what you would normally do during a gym session.
# Not everything really has to be a superset - we do this for consistency.
class Workout < ApplicationRecord
  belongs_to :user
  has_many :supersets, -> { order(:position) }

  def to_proto
    Gaintain::Workout.new(
      id:, user_id:, name:, description:, supersets: supersets.map(&:to_proto)
    )
  end
end
