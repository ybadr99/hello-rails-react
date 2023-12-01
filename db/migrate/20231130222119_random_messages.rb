class RandomMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :random_messages do |t|
      t.text :content

      t.timestamps
    end
  end
end
