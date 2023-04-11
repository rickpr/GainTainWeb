# frozen_string_literal: true

class AddOrderingAndVideoUrl < ActiveRecord::Migration[7.0]
  def change
    reversible do |dir|
      dir.up do
        add_column :sets, :position, :integer
        add_column :exercises, :video_url, :text
      end

      dir.down do
        remove_column :sets, :position
        remove_column :exercises, :video_url
      end
    end
  end
end
