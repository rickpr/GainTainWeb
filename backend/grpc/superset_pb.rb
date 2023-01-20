# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: superset.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("superset.proto", :syntax => :proto3) do
    add_message "gaintain.Superset" do
      optional :id, :string, 1
      optional :workout_id, :string, 2
    end
    add_message "gaintain.NewSuperset" do
      optional :workout_id, :string, 1
    end
    add_message "gaintain.Supersets" do
      repeated :supersets, :message, 1, "gaintain.Superset"
    end
    add_message "gaintain.SupersetsRequest" do
    end
    add_message "gaintain.SupersetRequest" do
      optional :id, :string, 1
    end
  end
end

module Gaintain
  Superset = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.Superset").msgclass
  NewSuperset = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.NewSuperset").msgclass
  Supersets = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.Supersets").msgclass
  SupersetsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.SupersetsRequest").msgclass
  SupersetRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.SupersetRequest").msgclass
end
