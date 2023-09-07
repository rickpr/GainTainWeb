# frozen_string_literal: true

require './models/workout'
require './grpc/workout_services_pb'

# Workout GRPC service
class WorkoutService < Gaintain::WorkoutService::Service
  def list_workouts(_unused_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      Gaintain::Workouts.new(workouts: Workout.all.map(&:to_proto))
    end
  end

  def get_workout(workout_request, grpc_call)
    Auth.with_authentication(grpc_call) { Workout.find(workout_request.id).to_proto }
  end

  def create_workout(new_workout, grpc_call)
    Auth.with_authentication(grpc_call) do
      Workout.create!(
        name: new_workout.name,
        description: new_workout.description,
        user_id: new_workout.user_id
      ).to_proto
    end
  end

  def update_workout(modified_workout, grpc_call)
    Auth.with_authentication(grpc_call) do
      workout = Workout.find(modified_workout.id)
      workout.name = modified_workout.name if modified_workout.name
      workout.description = modified_workout.description if modified_workout.description
      workout.save!
      workout.to_proto
    end
  end

  def delete_workout(workout_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      workout = Workout.find(workout_request.id)
      workout.destroy!
      workout.to_proto
    end
  end
end
