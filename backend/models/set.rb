#!/usr/bin/env ruby

require './models/application_record'

class Superset < ApplicationRecord
  belongs_to :exercise
  belongs_to :superset

  def to_proto
    Gaintain::Set.new(id: id, exercise_id: exercise_id, superset_id: superset_id)
  end
end
