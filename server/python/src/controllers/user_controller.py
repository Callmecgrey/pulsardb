from flask import Blueprint, request, jsonify
from services.user_service import UserService
from models.user import User

user_controller = Blueprint('user_controller', __name__)
user_service = UserService('data/users.json')

@user_controller.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    try:
        user = User.from_dict(data)
        created_user = user_service.create_user(user)
        return jsonify(created_user.to_dict()), 201
    except Exception as e:
        return str(e), 400

@user_controller.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    user = user_service.authenticate_user(email, password)
    if user:
        return jsonify(user.to_dict()), 200
    return 'Invalid email or password', 401

@user_controller.route('/api/user/<id>', methods=['GET'])
def get_user(id):
    user = user_service.get_user(id)
    if user:
        return jsonify(user.to_dict()), 200
    return 'User not found', 404

@user_controller.route('/api/user/<id>', methods=['PUT'])
def update_user(id):
    data = request.json
    updates = User.from_dict(data)
    try:
        updated_user = user_service.update_user(id, updates)
        return jsonify(updated_user.to_dict()), 200
    except Exception as e:
        return str(e), 400

@user_controller.route('/api/user/<id>', methods=['DELETE'])
def delete_user(id):
    success = user_service.delete_user(id)
    if success:
        return 'User deleted', 200
    return 'User not found', 404
