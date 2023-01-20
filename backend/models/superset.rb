#!/usr/bin/env ruby

require './models/application_record'

class Superset < ApplicationRecord
  belongs_to :workout

  def to_proto
    Gaintain::Superset.new(id: id, workout_id: workout_id)
  end
end
