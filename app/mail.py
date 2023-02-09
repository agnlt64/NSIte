import smtplib
import yagmail
import datetime

PORT = 587

with open('password.txt', 'r') as file:
    PASSWORD = file.read().encode('utf-8')

def send_mail(name: str, receiver: str, subject: str, body: str) -> bool:
    current = datetime.datetime.now()
    message = f"Votre message a bien été envoyé. Voici un récapitulatif :\nVotre nom : {name}\nVotre message : \n{body}\n\nEnvoyé le {current.day}/{current.month}/{current.year} à {current.hour}:{current.minute}"

    try:
        yag = yagmail.SMTP('jaimelesfraisesbleues@gmail.com', PASSWORD.decode('utf-8'))
        yag.send(receiver, subject, message)
        return True

    except smtplib.SMTPAuthenticationError:
        print('Unable to login !')
        return False
