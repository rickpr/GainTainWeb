# frozen_string_literal: true

require 'test_helper'

require './lib/auth'
require './services/exercise_service'

class ExerciseServiceTest < Minitest::Test
  attr_accessor :user, :exercise

  def setup
    User.destroy_all
    Exercise.destroy_all
    self.user = User.create!(name: 'test', email: 'test', password: 'test')
    self.exercise = user.exercises.create!(name: 'test', description: 'test', video_url: 'https://www.youtube.com/watch?v=WInKXaLzHOk')
  end

  def teardown
    exercise.destroy!
    user.destroy!
  end

  def test_list_exercises
    exercises = ExerciseService.new.list_exercises(nil, MockGrpcCall.new({ 'token' => token }))
    assert exercises.to_h.key?(:exercises)
    exercises = exercises.to_h[:exercises]
    assert exercises.one?
    assert_equal(
      {
        id: exercise.id,
        user_id: user.id,
        name: 'test',
        description: 'test',
        video_url: 'https://www.youtube.com/watch?v=WInKXaLzHOk'
      },
      exercises.first
    )
  end

  def test_get_exercise
    response_exercise = ExerciseService.new.get_exercise(
      Gaintain::ExerciseRequest.new(id: exercise.id),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal exercise.id, response_exercise.id
  end

  def test_create_exercise
    response_exercise = ExerciseService.new.create_exercise(
      Gaintain::NewExercise.new(
        name: 'newly created',
        description: 'newly created',
        video_url: 'https://www.youtube.com/watch?v=WInKXaLzHOk'
      ),
      MockGrpcCall.new({ 'token' => token })
    )
    assert_equal 'newly created', response_exercise.name
    assert_equal 'newly created', response_exercise.description
    assert_equal 'https://www.youtube.com/watch?v=WInKXaLzHOk', response_exercise.video_url
    Exercise.find(response_exercise.id).destroy!
  end

  private

  def token
    Auth.encode(user_id: user.id)
  end
end
