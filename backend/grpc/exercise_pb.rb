# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: exercise.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("exercise.proto", :syntax => :proto3) do
    add_message "gaintain.Exercise" do
      optional :id, :string, 1
      optional :user_id, :string, 2
      optional :name, :string, 3
      optional :description, :string, 4
      optional :video_url, :string, 5
    end
    add_message "gaintain.NewExercise" do
      optional :user_id, :string, 1
      optional :name, :string, 2
      optional :description, :string, 3
      optional :video_url, :string, 4
    end
    add_message "gaintain.Exercises" do
      repeated :exercises, :message, 1, "gaintain.Exercise"
    end
    add_message "gaintain.ExercisesRequest" do
    end
    add_message "gaintain.ExerciseRequest" do
      optional :id, :string, 1
    end
  end
end

module Gaintain
  Exercise = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.Exercise").msgclass
  NewExercise = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.NewExercise").msgclass
  Exercises = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.Exercises").msgclass
  ExercisesRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.ExercisesRequest").msgclass
  ExerciseRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("gaintain.ExerciseRequest").msgclass
end
