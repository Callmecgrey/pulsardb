import json
import os
from models.user import User

class UserService:
    def __init__(self, db_path):
        self.db_path = db_path
        if not os.path.exists(db_path):
            with open(db_path, 'w') as f:
                json.dump([], f)

    def read_users(self):
        with open(self.db_path, 'r') as f:
            return [User.from_dict(user) for user in json.load(f)]

    def write_users(self, users):
        with open(self.db_path, 'w') as f:
            json.dump([user.to_dict() for user in users], f, indent=4)

    def create_user(self, user):
        users = self.read_users()
        if any(u.email == user.email for u in users):
            raise ValueError('User with this email already exists')
        users.append(user)
        self.write_users(users)
        return user

    def get_user(self, id):
        users = self.read_users()
        for user in users:
            if user.id == id:
                return user
        return None

    def update_user(self, id, updates):
        users = self.read_users()
        for i, user in enumerate(users):
            if user.id == id:
                user.username = updates.username or user.username
                user.email = updates.email or user.email
                user.password = updates.password or user.password
                user.updated_at = datetime.now().isoformat()
                users[i] = user
                self.write_users(users)
                return user
        raise ValueError('User not found')

    def delete_user(self, id):
        users = self.read_users()
        users = [user for user in users if user.id != id]
        self.write_users(users)
        return True

    def authenticate_user(self, email, password):
        users = self.read_users()
        for user in users:
            if user.email == email and user.password == User.hash_password(password):
                return user
        return None
