# frozen_string_literal: true

require 'test_helper'

require './lib/auth'

class SupersetServiceTest < Minitest::Test
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

  def test_list_supersets
    supersets = SupersetService.new.list_supersets(
      Gaintain::SupersetsRequest.new(workout_id: workout.id),
      MockGrpcCall.new({ 'token' => token })
    )
    assert supersets.to_h.key?(:supersets)
    supersets = supersets.to_h[:supersets]
    assert supersets.one?
    assert_equal(
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
      },
      supersets.first.transform_keys(&:to_sym)
    )
  end

  def test_get_superset
    response_superset = SupersetService.new.get_superset(
      Gaintain::SupersetRequest.new(id: superset.id),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal superset.id, response_superset.id
  end

  def test_create_superset
    response_superset = SupersetService.new.create_superset(
      Gaintain::NewSuperset.new(
        workout_id: workout.id,
        position: 1
      ),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal workout.id, response_superset.workout_id
    assert_equal 1, response_superset.position
    Superset.find(response_superset.id).destroy!
  end

  private

  def token
    Auth.encode(user_id: user.id)
  end
end
