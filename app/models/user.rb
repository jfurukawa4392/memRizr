# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 8, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many(
    :created_subjects,
    class_name: 'Subject',
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many(
    :created_decks,
    class_name: 'Deck',
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :subject_follows,
    class_name: 'SubjectFollow',
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :followed_subjects,
    through: :subject_follows,
    source: :subject
  )

  has_many(
    :ratings,
    class_name: 'CardRating',
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.find_by_credentials(name, pw)
    user = User.find_by_username(name)
    return nil unless user
    user.is_password?(pw) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64

    while self.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64
    end

    token
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def follows?(subject)
    self.followed_subjects.include?(subject)
  end

  private
  def ensure_session_token
    self.session_token ||= self.reset_session_token!
  end
end
