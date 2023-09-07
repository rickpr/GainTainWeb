# frozen_string_literal: true

require './models/application_record'

class Exercise < ApplicationRecord
  belongs_to :user
  has_many :sets, class_name: :Gset
  has_many :supersets, through: :sets

  def to_proto
    Gaintain::Exercise.new(id:, user_id:, name:, description:, video_url:)
  end
end
