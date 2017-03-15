json.partial! 'api/users/user', user: @user

json.errors @user.errors.full_messages
