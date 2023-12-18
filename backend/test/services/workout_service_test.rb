# frozen_string_literal: true

require 'test_helper'

require './lib/auth'

class WorkoutServiceTest < Minitest::Test
  attr_accessor :user, :exercise, :workout, :superset, :set

  def setup
    User.destroy_all
    Exercise.destroy_all
    Workout.destroy_all
    Superset.destroy_all
    Gset.destroy_all
    self.user = User.create!(name: 'test', email: 'test', password: 'test')
    self.exercise = user.exercises.create!(name: 'test', description: 'test', video_url: 'https://www.youtube.com/watch?v=WInKXaLzHOk')
    self.workout = user.workouts.create!(name: 'test', description: 'test')
    self.superset = workout.supersets.create!
    self.set = superset.sets.create!(exercise:, reps: 1)
  end

  def teardown
    exercise.destroy!
    user.destroy!
    workout.destroy!
    superset.destroy!
    set.destroy!
  end

  def test_list_workouts
    workouts = WorkoutService.new.list_workouts(
      Gaintain::WorkoutsRequest.new,
      MockGrpcCall.new({ 'token' => token })
    )
    assert workouts.to_h.key?(:workouts)
    workouts = workouts.to_h[:workouts]
    assert workouts.one?
    assert_equal(
      {
        id: workout.id,
        user_id: user.id,
        name: 'test',
        description: 'test',
        supersets: [
          {
            id: superset.id,
            workout_id: workout.id,
            position: 1,
            sets: [
              {
                id: set.id,
                superset_id: superset.id,
                reps: 1,
                position: 1,
                exercise: exercise.to_proto.to_h
              }
            ]
          }
        ]
      },
      workouts.first.transform_keys(&:to_sym)
    )
  end

  def test_get_workout
    response_workout = WorkoutService.new.get_workout(
      Gaintain::WorkoutRequest.new(id: workout.id),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal workout.id, response_workout.id
  end

  def test_create_workout
    response_workout = WorkoutService.new.create_workout(
      Gaintain::NewWorkout.new(
        user_id: user.id,
        name: 'new workout',
        description: 'new workout for tests'
      ),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal user.id, response_workout.user_id
    assert_equal 'new workout', response_workout.name
    assert_equal 'new workout for tests', response_workout.description
    Workout.find(response_workout.id).destroy!
  end

  private

  def token
    Auth.encode(user_id: user.id)
  end
end
