class CreateSets < ActiveRecord::Migration[7.0]
  def change
    create_table :sets, id: :uuid do |table|
      table.references :exercise, index: true, null: false
      table.references :superset, index: true, null: false
      table.integer :reps
    end
  end
end
