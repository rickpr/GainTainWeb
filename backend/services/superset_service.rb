# frozen_string_literal: true

require './models/superset'
require './grpc/superset_services_pb'

# Superset GRPC service
class SupersetService < Gaintain::SupersetService::Service
  def list_supersets(supersets_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      Gaintain::Supersets.new(
        supersets: Superset.where(workout_id: supersets_request.workout_id).map(&:to_proto)
      )
    end
  end

  def get_superset(superset_request, grpc_call)
    Auth.with_authentication(grpc_call) { Superset.find(superset_request.id).to_proto }
  end

  def create_set(new_superset, grpc_call)
    Auth.with_authentication(grpc_call) do
      Set.create!(
        workout_id: new_superset.workout_id,
        position: new_superset.position
      ).to_proto
    end
  end

  def update_superset(modified_superset, grpc_call)
    Auth.with_authentication(grpc_call) do
      superset = Superset.find(modified_superset.id)
      superset.position = modified_superset.position if modified_superset.position
      superset.save!
      superset.to_proto
    end
  end

  def delete_superset(superset_request, grpc_call)
    Auth.with_authentication(grpc_call) do
      superset = Superset.find(superset_request.id)
      superset.destroy!
      superset.to_proto
    end
  end
end
