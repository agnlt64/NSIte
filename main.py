from app import create_app
from app.views import PORT
import socket

app = create_app()
hostname = socket.gethostname()

if __name__ == '__main__':
    app.run(debug=True, port=PORT, host=socket.gethostbyname(hostname))
