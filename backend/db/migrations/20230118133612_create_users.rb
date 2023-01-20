class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |table|
      table.text :email, index: { unique: true }, null: false
      table.text :hashed_password, null: false
      table.text :name, null: false
    end
  end
end
