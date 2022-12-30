import sqlite3
import json
from flask import Flask,jsonify,request
from flask_cors import CORS
from flask_mail import Mail, Message
import os


app = Flask(__name__)


CITIES = ['All', 'Litochoro', 'Athens', 'Thessaloniki', 'Spiti Koumpi', 'Sotiros', 'Katerini', 'Synora', 'Kalamata']
MONTHS = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','Octomber', 'November', 'December']
YEARS = ['All', '2023', '2024', '2025']


# Requires that "Less secure app access" be on
# https://support.google.com/accounts/answer/6010255
# app.config["MAIL_DEFAULT_SENDER"] = os.environ["MAIL_DEFAULT_SENDER"]
# app.config["MAIL_PASSWORD"] = os.environ["MAIL_PASSWORD"]
# app.config["MAIL_PORT"] = 587
# app.config["MAIL_SERVER"] = "smtp.gmail.com"
# app.config["MAIL_USE_TLS"] = True
# app.config["MAIL_USERNAME"] = os.environ["MAIL_USERNAME"]
# mail = Mail(app)


CORS(app)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn



@app.route('/')
def index():
    conn = get_db_connection()
    popular = conn.execute('SELECT * FROM events ORDER BY RANDOM() LIMIT 12').fetchall()
    conn.close()
    return jsonify([dict(ix) for ix in popular])


@app.route('/data')
def data():
    prices = [5.0, 10.0, 15.0, 20.0]
    days = list(range(1, 31))
    dic = {"months": MONTHS, "cities": CITIES, "years": YEARS, "prices": prices, "days": days}

    return jsonify(dic)


@app.route('/theater')
def theater():

    month = request.args.get("month", "%")
    city = request.args.get("city", "%")
    year = request.args.get("year", "%")


    # if month not in MONTHS or month != "%":
    #     # Error month
    # if year not in YEARS or year != "%":
    #     # Error year
    # if city not in CITIES or city != "%":
    #     # Error city

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Theater' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])


@app.route('/sport')
def sport():

    month = request.args.get("month", "%")
    city = request.args.get("city", "%")
    year = request.args.get("year", "%")


    # if month not in MONTHS or month != "%":
    #     # Error month
    # if year not in YEARS or year != "%":
    #     # Error year
    # if city not in CITIES or city != "%":
    #     # Error city

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Sports' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])



@app.route('/music')
def music():

    month = request.args.get("month", "%")
    city = request.args.get("city", "%")
    year = request.args.get("year", "%")


    # if month not in MONTHS or month != "%":
    #     # Error month
    # if year not in YEARS or year != "%":
    #     # Error year
    # if city not in CITIES or city != "%":
    #     # Error city

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Music' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])



@app.route('/cinema')
def cinema():

    month = request.args.get("month", "%")
    city = request.args.get("city", "%")
    year = request.args.get("year", "%")


    # if month not in MONTHS or month != "%":
    #     # Error month
    # if year not in YEARS or year != "%":
    #     # Error year
    # if city not in CITIES or city != "%":
    #     # Error city

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Cinema' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])


@app.route('/event', methods=["GET", "POST"])
def event():

    if request.method == "POST":

        # Validate submission
        email = request.form.get("email")
        zone = request.form.get("zone")
        times = request.form.get("times")
        if times == 1:
            times += " person"
        else:
            times += " people"
        event_id = request.form.get("event_id")

        conn = get_db_connection()
        event = conn.execute('SELECT * FROM events WHERE id = :event_id', {"event_id": event_id}).fetchall()

        # Update the info
        # Days
        if event['day'] == "1":
            event["day"] = "1st"
        elif event['day'] == "2":
            event["day"] = "2nd"
        elif event['day'] == "3":
            event["day"] = "3rd"
        else:
            event['day'] += "th"

        # Category
        if event['category'] == "Theater":
            event["category"] = "theatric performance"
        elif event['category'] == "Cinema":
            event["category"] = "cinematic play"
        elif event['category'] == "Music":
            event["category"] = "musical event"
        else:
            event['category'] += "athletic event"


        # Content 
        event["content"].replace("$","\n")

        conn.close()

        # Send email
        Content = "You have made a reservation for " + times + " on the " + event['day'] + " of " 
        + event['month'] + event['year'] + " in " + event['city'] 
        + " for the " + event['category'] + ": " + event['title'] + ". Cost of reservation " + (zone * times) 
        + ". \n \n \n About the event:\n " + event['content']

        message = Message(Content, recipients=[email])
        mail.send(message)

        return 

    else:
            
        event_id = request.args.get("id", "1")

        conn = get_db_connection()
        event_result = conn.execute('SELECT * FROM events WHERE id = :event_id', {"event_id": event_id}).fetchall()
        conn.close()

        return jsonify([dict(ix) for ix in event_result])


@app.route('/search')
def search():

    search = str("%" + request.args.get("search", "%") + "%")

    conn = get_db_connection()
    search_result = conn.execute('SELECT * FROM events WHERE LOWER(title) LIKE :search OR LOWER(city) LIKE :search OR LOWER(content) LIKE :search', {"search": search.lower()}).fetchall()
    conn.close()

    return jsonify([dict(ix) for ix in search_result])
    