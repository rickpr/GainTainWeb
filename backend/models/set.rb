#!/usr/bin/env ruby

require './models/application_record'

class Set < ApplicationRecord
  belongs_to :exercise
  belongs_to :superset

  def to_proto
    Gaintain::Set.new(id:, exercise_id:, superset_id:, reps:, position:)
  end
end
