from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact/')
def contact():
    return render_template('contact.html')

@app.route('/contrainte/')
def contrainte():
    return render_template('contrainte.html')

@app.route('/presentation/')
def presentation():
    return render_template('presentation.html')

app.run(debug=True, port=8080)