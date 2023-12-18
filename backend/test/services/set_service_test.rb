# frozen_string_literal: true

require 'test_helper'

require './lib/auth'
require './services/set_service'

class SetServiceTest < Minitest::Test
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

  def test_list_sets
    sets = SetService.new.list_sets(
      Gaintain::SetsRequest.new(superset_id: superset.id),
      MockGrpcCall.new({ 'token' => token })
    )
    assert sets.to_h.key?(:sets)
    sets = sets.to_h[:sets]
    assert sets.one?
    assert_equal(
      {
        id: set.id,
        superset_id: superset.id,
        reps: 1,
        position: 1,
        exercise: exercise.to_proto.to_h
      },
      sets.first.transform_keys(&:to_sym)
    )
  end

  def test_get_set
    response_set = SetService.new.get_set(
      Gaintain::SetRequest.new(id: set.id),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal set.id, response_set.id
  end

  def test_create_set
    response_set = SetService.new.create_set(
      Gaintain::NewSet.new(
        exercise_id: exercise.id,
        superset_id: superset.id,
        reps: 3,
        position: 1
      ),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal exercise.id, response_set.exercise.id
    assert_equal superset.id, response_set.superset_id
    assert_equal 3, response_set.reps
    assert_equal 1, response_set.position
    Gset.find(response_set.id).destroy!
  end

  private

  def token
    Auth.encode(user_id: user.id)
  end
end
