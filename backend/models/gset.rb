#!/usr/bin/env ruby

require './models/application_record'

class Gset < ApplicationRecord
  self.table_name = 'sets'
  belongs_to :exercise
  belongs_to :superset
  acts_as_list scope: :superset

  def to_proto
    Gaintain::Set.new(id:, exercise_id:, superset_id:, reps:, position:)
  end
end
