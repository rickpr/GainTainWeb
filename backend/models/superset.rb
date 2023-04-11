#!/usr/bin/env ruby

require './models/application_record'

class Superset < ApplicationRecord
  belongs_to :workout
  has_many :sets, -> { order(:position) }
  has_many :exercises, through: :sets

  def to_proto
    Gaintain::Superset.new(id:, workout_id:, position:)
  end
end
