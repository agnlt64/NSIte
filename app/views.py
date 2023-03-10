# builtins
import secrets
import requests
import socket
import string

# dependencies
from flask import Blueprint, render_template, flash, request
from bs4 import BeautifulSoup

# local files
from .mail import send_mail

views = Blueprint('views', __name__)
views.secret_key = secrets.token_urlsafe(16)

PORT = 8080
LOCAL_IP = '127.0.0.1'
FETCH_LOCAL_URL = f'http://{LOCAL_IP}:{PORT}'

# thanks chatGPT ^^
def parse_search_page(text: str) -> list[str]:
    soup = BeautifulSoup(text, 'html.parser')
    return soup.get_text().split()


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
        if email != "" and name != "" and subject != "":
            if send_mail(name, email, subject, body) and send_mail(name, email, subject, body, send_to_admin=True):
                flash('Votre message a bien été envoyé !', category='success')
            else:
                flash('Une erreur est survenue !', category='error')
        else:
            flash('Veuillez remplir tous les champs !', category='error')
    return render_template('contact.html')


@views.route('/moyenne/')
def contrainte():
    return render_template('moyenne.html')


@views.route('/nos-projets/')
def presentation():
    return render_template('projets.html')


@views.route('/search-results/', methods=['GET', 'POST'])
def search_results():
    search_results = set()
    if request.method == 'POST':
        search = request.form['search']
        content_response = requests.get(FETCH_LOCAL_URL)
        content_text = parse_search_page(content_response.text)
        for word in content_text:
            if search.lower() in word or search.upper() in word or search.capitalize() in word:
                search_results.add(word)
        for search_result in search_results:
            search_index = content_text.index(search_result)
            try:
                before_search = f'[...] {content_text[search_index - 2]} {content_text[search_index - 1]}'
                after_search = f'{content_text[search_index + 1]} {content_text[search_index + 2]} [...]'
            except IndexError:
                before_search = f'[...] {content_text[search_index - 1]}'
                after_search = f' [...]'
            flash(search_result, category=[search, before_search, after_search])
    return render_template('search.html', link='/')