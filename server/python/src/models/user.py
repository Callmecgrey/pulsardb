import hashlib
import uuid
from datetime import datetime

class User:
    def __init__(self, id, username, email, password, created_at=None, updated_at=None):
        self.id = id or str(uuid.uuid4())
        self.username = username
        self.email = email
        self.password = self.hash_password(password)
        self.created_at = created_at or datetime.now().isoformat()
        self.updated_at = updated_at or datetime.now().isoformat()

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'password': self.password,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

    @classmethod
    def from_dict(cls, data):
        return cls(
            data.get('id'),
            data.get('username'),
            data.get('email'),
            data.get('password'),
            data.get('created_at'),
            data.get('updated_at')
        )

    @staticmethod
    def hash_password(password):
        return hashlib.sha256(password.encode()).hexdigest()
