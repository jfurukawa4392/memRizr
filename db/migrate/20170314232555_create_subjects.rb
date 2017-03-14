class CreateSubjects < ActiveRecord::Migration[5.0]
  def change
    create_table :subjects do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :subjects, :creator_id
  end
end
