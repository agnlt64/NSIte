# builtins
import socket

# local files
from app import create_app
from app.views import PORT, HOST

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, port=PORT, host=socket.gethostbyname(HOST))
