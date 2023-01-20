#!/usr/bin/env ruby
require 'active_record'

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
