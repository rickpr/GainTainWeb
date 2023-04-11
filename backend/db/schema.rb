# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_10_213917) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "name", null: false
    t.text "description"
    t.text "video_url"
    t.index ["user_id"], name: "index_exercises_on_user_id"
  end

  create_table "sets", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.bigint "exercise_id", null: false
    t.bigint "superset_id", null: false
    t.integer "reps"
    t.integer "position"
    t.index ["exercise_id"], name: "index_sets_on_exercise_id"
    t.index ["superset_id"], name: "index_sets_on_superset_id"
  end

  create_table "supersets", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.bigint "workout_id", null: false
    t.integer "position", null: false
    t.index ["workout_id"], name: "index_supersets_on_workout_id"
  end

  create_table "users", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.text "email", null: false
    t.text "hashed_password", null: false
    t.text "name", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "workouts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "name", null: false
    t.text "description"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end
