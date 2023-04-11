# frozen_string_literal: true

require 'jwt'
require './models/user'
require './lib/database'

# Handles authentication
module Auth
  class << self
    def with_authentication(grpc_call, &block)
      Database.with_database do
        token = grpc_call.metadata['token']
        payload = decode(token)
        user = User.find_by(id: payload['user_id'])
        raise GRPC::BadStatus.new_status_exception(2, 'Login required') unless user

        block.call(user)
      end
    end

    def encode(payload)
      JWT.encode(payload, private_key, 'ED25519')
    end

    def decode(token)
      JWT.decode(token, public_key, true, algorithm: 'ED25519').first
    end

    private

    def public_key
      @public_key ||= private_key.verify_key
    end

    def private_key
      @private_key ||= RbNaCl::Signatures::Ed25519::SigningKey.new(secret)
    end

    def secret
      @secret ||= if ENV['SECRET_KEY']
                    ENV['SECRET_KEY']
                  else
                    warn 'Secret key is not set, using default'
                    File.read('secret.key')
                  end
    end
  end
end
