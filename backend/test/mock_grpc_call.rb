class MockGrpcCall
  # Used to fake GRPC Calls for test.
  attr_accessor :metadata

  def initialize(metadata)
    self.metadata = metadata
  end
end
