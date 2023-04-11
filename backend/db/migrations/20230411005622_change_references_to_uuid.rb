class ChangeReferencesToUuid < ActiveRecord::Migration[7.0]
  def change
    reversible do |dir|
      dir.up do
        remove_column :exercises, :user_id
        remove_column :sets, :exercise_id
        remove_column :sets, :superset_id
        remove_column :supersets, :workout_id
        remove_column :workouts, :user_id

        add_column :exercises, :user_id, :uuid, null: false
        add_column :sets, :exercise_id, :uuid, null: false
        add_column :sets, :superset_id, :uuid, null: false
        add_column :supersets, :workout_id, :uuid, null: false
        add_column :workouts, :user_id, :uuid, null: false
      end

      dir.down do
        remove_column :exercises, :user_id
        remove_column :sets, :exercise_id
        remove_column :sets, :superset_id
        remove_column :supersets, :workout_id
        remove_column :workouts, :user_id

        add_column :exercises, :user_id, :bigint, null: false
        add_column :sets, :exercise_id, :bigint, null: false
        add_column :sets, :superset_id, :bigint, null: false
        add_column :supersets, :workout_id, :bigint, null: false
        add_column :workouts, :user_id, :bigint, null: false
      end
    end
  end
end
