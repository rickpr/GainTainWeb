#!/usr/bin/env ruby
require 'active_record'
require 'acts_as_list'

class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
end
