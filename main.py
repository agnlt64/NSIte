# local files
from app import create_app
from app.views import PORT, LOCAL_IP
import sys

app = create_app()

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == '--expose' or sys.argv[1] == '-E':
            app.run(debug=True, port=8080, host='0.0.0.0')
    else:
        app.run(debug=True, port=PORT, host=LOCAL_IP)
