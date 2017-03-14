# == Schema Information
#
# Table name: subjects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subject < ApplicationRecord
end
