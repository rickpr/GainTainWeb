#!/usr/bin/env ruby

require './models/application_record'

# A link between a Workout and a [G]set.
# A superset is a collection of sets that are performed back-to-back.
# For consistency, even solo sets are wrapped in a superset.
class Superset < ApplicationRecord
  belongs_to :workout
  has_many :sets, -> { order(:position) }, class_name: :Gset, dependent: :destroy
  has_many :exercises, through: :sets
  acts_as_list scope: :workout

  def to_proto
    Gaintain::Superset.new(id:, workout_id:, position:, sets: sets.map(&:to_proto))
  end
end
