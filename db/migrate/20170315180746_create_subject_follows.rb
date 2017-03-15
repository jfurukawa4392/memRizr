class CreateSubjectFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :subject_follows do |t|
      t.integer :user_id, null: false
      t.integer :subject_id, null: false

      t.timestamps
    end

  end
end
