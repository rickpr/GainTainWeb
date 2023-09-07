# frozen_string_literal: true

require './models/exercise'
require './grpc/exercise_services_pb'

# Exercise GRPC service
class ExerciseService < Gaintain::ExerciseService::Service
  def list_exercises(_unused_request, grpc_call)
    Auth.with_authentication(grpc_call) do |current_user|
      Gaintain::Exercises.new(exercises: current_user.exercises.map(&:to_proto))
    end
  end

  def get_exercise(exercise_request, grpc_call)
    Auth.with_authentication(grpc_call) do |current_user|
      current_user.exercises.find(exercise_request.id).to_proto
    end
  end

  def create_exercise(new_exercise, grpc_call)
    Auth.with_authentication(grpc_call) do |current_user|
      current_user.exercises.create!(
        name: new_exercise.name,
        description: new_exercise.description,
        video_url: new_exercise.video_url
      ).to_proto
    end
  end

  def update_exercise(modified_exercise, grpc_call)
    Auth.with_authentication(grpc_call) do |current_user|
      exercise = current_user.exercises.find(modified_user.id)
      exercise.name = modified_exercise.name if modified_exercise.name
      exercise.description = modified_exercise.description if modified_exercise.description
      exercise.video_url = modified_exercise.video_url if modified_exercise.video_url
      exercise.save!
      exercise.to_proto
    end
  end

  def delete_exercise(exercise_request, grpc_call)
    Auth.with_authentication(grpc_call) do |current_user|
      exercise = current_user.exercises.find(exercise_request.id)
      exercise.destroy!
      exercise.to_proto
    end
  end
end
