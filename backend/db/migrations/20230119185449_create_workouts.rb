class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts, id: :uuid do |table|
      table.references :user, index: true, null: false
      table.text :name, null: false
      table.text :description
    end
  end
end
