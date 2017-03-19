class CreateCardRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :card_ratings do |t|
      t.integer :user_id, null: false
      t.integer :card_id, null: false
      t.integer :rating, null: false

      t.timestamps
    end

    add_index :card_ratings, [:user_id, :card_id], unique: true
  end
end
