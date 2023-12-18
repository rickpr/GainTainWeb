#!/usr/bin/env ruby

require './models/application_record'

# A set of an exercise.
# We call it Gset to avoid conflict with the Set class.
class Gset < ApplicationRecord
  self.table_name = 'sets'
  belongs_to :exercise
  belongs_to :superset
  acts_as_list scope: :superset

  def to_proto
    Gaintain::Set.new(
      id:,
      superset_id:,
      reps:,
      position:,
      exercise: exercise.to_proto
    )
  end
end
