# local files
from app import create_app
from app.views import PORT, LOCAL_IP

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=PORT, host=LOCAL_IP)
