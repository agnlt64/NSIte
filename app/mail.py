# builtins
from smtplib import SMTPAuthenticationError
import datetime

# dependencies
from yagmail import SMTP

_ADMIN_MAIL = 'jaimelesfraisesbleues@gmail.com'

def send_mail(name: str, mail: str, subject: str, body: str, send_to_admin: bool=False) -> bool:
    current = datetime.datetime.now()
    yag = SMTP(_ADMIN_MAIL, "oxvdwydiiunywnou")
    try:
        if not send_to_admin:
            send_to = mail
            message = f"Votre message a bien été envoyé. Voici un récapitulatif :\nVotre nom : {name}\nVotre message : \n{body}\n\nEnvoyé le {current.day}/{current.month}/{current.year} à {current.hour}:{current.minute}"
        else:
            send_to = _ADMIN_MAIL
            message = f'{name} ({mail})\n\n{body}\n\nEnvoyé le {current.day}/{current.month}/{current.year} à {current.hour}:{current.minute}'
        yag.send(send_to, subject, message)
        return True
    except SMTPAuthenticationError:
        print('Unable to login !')
        return False