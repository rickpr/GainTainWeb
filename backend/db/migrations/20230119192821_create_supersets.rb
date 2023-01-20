class CreateSupersets < ActiveRecord::Migration[7.0]
  def change
    create_table :supersets, id: :uuid do |table|
      table.references :workout, index: true, null: false
      table.integer :position, null: false
    end
  end
end
