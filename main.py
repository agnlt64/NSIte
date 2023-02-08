from flask import Flask, render_template, flash, request
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_urlsafe(16)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact/', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        body = request.form['message']
        if email != "" and name != "" and subject != "":
            flash("Votre message a bien été envoyé !", category='success')
        else:
            flash("Veuillez remplir tous les champs !", category='error')
        
    return render_template('contact.html')

@app.route('/moyenne/')
def contrainte():
    return render_template('moyenne.html')

@app.route('/presentation/')
def presentation():
    return render_template('presentation.html')

app.run(debug=True, port=8080)