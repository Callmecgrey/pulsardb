from flask import Flask
from controllers.user_controller import user_controller

app = Flask(__name__)
app.register_blueprint(user_controller)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
