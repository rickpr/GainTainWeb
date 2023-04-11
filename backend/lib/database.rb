# frozen_string_literal: true

require 'active_record'

# Helper module to connect to the database and close the connection
module Database
  class << self
    def connect!
      ActiveRecord::Base.establish_connection(
        adapter: 'postgresql',
        host: 'localhost',
        database: 'gaintain'
      )
    end

    def with_database
      yield
    ensure
      ActiveRecord::Base.connection.close
    end
  end
end
