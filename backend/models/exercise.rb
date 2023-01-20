#!/usr/bin/env ruby

require './models/application_record'

class Exercise < ApplicationRecord
  belongs_to :user
  has_many :sets

  def to_proto
    Gaintain::Exercise.new(id: id, user_id: user_id, name: name, description: description)
  end
end
