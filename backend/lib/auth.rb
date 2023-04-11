# frozen_string_literal: true

require 'jwt'

# Handles authentication
module Auth
  class << self
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
