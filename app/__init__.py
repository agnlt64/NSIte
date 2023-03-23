from flask import Flask
import secrets

def create_app() -> Flask:
    app = Flask(__name__)
    app.secret_key = secrets.token_urlsafe(16)

    from .views import views
    
    app.register_blueprint(views)

    return app
