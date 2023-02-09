from flask import Blueprint, render_template, flash, request
import secrets
from .mail import send_mail

views = Blueprint('views', __name__)
views.secret_key = secrets.token_urlsafe(16)

@views.route('/')
def index():
    return render_template('index.html')

@views.route('/contact/', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        body = request.form['message']
        if email != "" and name != "" and subject != "" and send_mail(name, email, subject, body):
            flash("Votre message a bien été envoyé !", category='success')
        else:
            flash("Une erreur est survenue !", category='error')
        
    return render_template('contact.html')

@views.route('/moyenne/')
def contrainte():
    return render_template('moyenne.html')

@views.route('/presentation/')
def presentation():
    return render_template('presentation.html')
