class CreateDecks < ActiveRecord::Migration[5.0]
  def change
    create_table :decks do |t|
      t.integer :subject_id, null: false
      t.integer :author_id, null: false
      t.string :title, null: false

      t.timestamps
    end

    add_index :decks, :subject_id
    add_index :decks, :author_id
  end
end
