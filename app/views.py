from flask import Blueprint, render_template, flash, request
from .mail import send_mail
import secrets
import requests
import socket
from bs4 import BeautifulSoup

views = Blueprint('views', __name__)
views.secret_key = secrets.token_urlsafe(16)

PORT = 8080
LOCAL_URL = f'http://{socket.gethostbyname(socket.gethostname())}:{PORT}/presentation/'

def remove_html(text: str):
    soup = BeautifulSoup(text, 'html.parser')
    return soup.get_text()

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

@views.route('/search-results/', methods=['GET', 'POST'])
def search_results():
    link = '/presentation/'
    page = 'Présentation'
    search_results = set()
    if request.method == 'POST':
        search = request.form['search']
        presentation_page_response = requests.get(LOCAL_URL)
        presentation_page_text = remove_html(presentation_page_response.text).split()
        for word in presentation_page_text:
            if search.lower() in word:
                search_results.add(word)
                # flash(f"{presentation_page_text[presentation_page_text.index(word) - 40]} {word} {presentation_page_text[presentation_page_text.index(word) + 40]}")
        for search_result in search_results:
            flash(f"{search_result}")
    return render_template('search.html', link=link, page=page)
