# frozen_string_literal: true

require './models/gset'
require './grpc/set_services_pb'

# Set GRPC service
class SetService < Gaintain::SetService::Service
  def list_sets(sets_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      Gaintain::Sets.new(
        sets: Gset.where(superset_id: sets_request.superset_id).map(&:to_proto)
      )
    end
  end

  def get_set(set_request, grpc_call)
    Auth.with_authentication(grpc_call) { Gset.find(set_request.id).to_proto }
  end

  def create_set(new_set, grpc_call)
    Auth.with_authentication(grpc_call) do
      Gset.create!(
        exercise_id: new_set.exercise_id,
        superset_id: new_set.superset_id,
        reps: new_set.reps,
        position: new_set.position
      ).to_proto
    end
  end

  def update_set(modified_set, grpc_call)
    Auth.with_authentication(grpc_call) do
      set = Gset.find(modified_set.id)
      set.reps = modified_set.reps if modified_set.reps
      set.position = modified_set.position if modified_set.position
      set.save!
      set.to_proto
    end
  end

  def delete_set(set_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      set = Gset.find(set_request.id)
      set.destroy!
      set.to_proto
    end
  end
end
