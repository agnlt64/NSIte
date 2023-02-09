from app import create_app
import socket

app = create_app()
hostname = socket.gethostname()

if __name__ == '__main__':
    app.run(debug=True, port=8080, host=socket.gethostbyname(hostname))