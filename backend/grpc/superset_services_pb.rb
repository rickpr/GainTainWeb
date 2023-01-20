# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: superset.proto for package 'gaintain'

require 'grpc'
require 'superset_pb'

module Gaintain
  module SupersetService
    class Service

      include ::GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'gaintain.SupersetService'

      rpc :ListSupersets, ::Gaintain::SupersetsRequest, ::Gaintain::Supersets
      rpc :CreateSuperset, ::Gaintain::NewSuperset, ::Gaintain::Superset
      rpc :GetSuperset, ::Gaintain::SupersetRequest, ::Gaintain::Superset
      rpc :UpdateSuperset, ::Gaintain::Superset, ::Gaintain::Superset
      rpc :DeleteSuperset, ::Gaintain::SupersetRequest, ::Gaintain::Superset
    end

    Stub = Service.rpc_stub_class
  end
end
