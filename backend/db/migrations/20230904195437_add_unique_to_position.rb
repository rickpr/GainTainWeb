class AddUniqueToPosition < ActiveRecord::Migration[7.0]
  def change
    reversible do |dir|
      dir.up do
        add_index :sets, :position, unique: true
        add_index :supersets, :position, unique: true
      end

      dir.down do
        remove_index :supersets, :position
        remove_index :sets, :position
      end
    end
  end
end
