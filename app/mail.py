# builtins
from smtplib import SMTPAuthenticationError
import datetime

# dependencies
import yagmail

PORT = 587
YAG = yagmail.SMTP('jaimelesfraisesbleues@gmail.com', "oxvdwydiiunywnou")
CURRENT = datetime.datetime.now()

def send_mail(name: str, receiver: str, subject: str, body: str) -> bool:
    message = f"Votre message a bien été envoyé. Voici un récapitulatif :\nVotre nom : {name}\nVotre message : \n{body}\n\nEnvoyé le {CURRENT.day}/{CURRENT.month}/{CURRENT.year} à {CURRENT.hour}:{CURRENT.minute}"
    try:
        YAG.send(receiver, subject, message)
        return True
    except SMTPAuthenticationError:
        print('Unable to login !')
        return False
    
def send_mail_to_admin(subject: str, body: str, sender_name: str, sender_email: str):
    try:
        message = f'{sender_name} ({sender_email})\n\n{body}\n\nEnvoyé le {CURRENT.day}/{CURRENT.month}/{CURRENT.year} à {CURRENT.hour}:{CURRENT.minute}'
        YAG.send('jaimelesfraisesbleues@gmail.com', subject, message)
        return True
    except SMTPAuthenticationError:
        print('Unable to login !')
        return False