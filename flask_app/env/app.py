import sqlite3
import json
from flask import Flask,jsonify,request
from flask_cors import CORS
from flask_mail import Mail, Message
import os
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)


CITIES = ['All', 'Litochoro', 'Athens', 'Thessaloniki', 'Spiti Koumpi', 'Sotiros', 'Katerini', 'Synora', 'Kalamata']
MONTHS = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','Octomber', 'November', 'December']
YEARS = ['All', '2023', '2024', '2025']





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

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Theater' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])


@app.route('/sport')
def sport():

    month = request.args.get("month", "%")
    city = request.args.get("city", "%")
    year = request.args.get("year", "%")

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Sports' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])



@app.route('/music')
def music():

    month = request.args.get("month", "%")
    city = request.args.get("city", "%")
    year = request.args.get("year", "%")

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Music' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])



@app.route('/cinema')
def cinema():

    month = request.args.get("month", "%")
    city = request.args.get("city", "%")
    year = request.args.get("year", "%")

    conn = get_db_connection()
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Cinema' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
    conn.close()
    
    return jsonify([dict(ix) for ix in search_results])


@app.route('/event', methods=["GET", "POST"])
def event():

    if request.method == "POST":

        # Validate submission
        email = request.json["email"]
        zone = request.json["zone"]
        times_int = str(request.json["times"])

        times = str(times_int)

        if times == "1":
            times += " person"
        else:
            times += " people"

        event_id = request.json["event_id"]

        conn = get_db_connection()
        event = conn.execute('SELECT * FROM events WHERE id = :event_id', {"event_id": event_id}).fetchall()

        # Update the info
        # Days
        if event[0]['day'] == "1":
            day_str = "1st"
        elif event[0]['day'] == "2":
            day_str = "2nd"
        elif event[0]['day'] == "3":
            day_str = "3rd"
        else:
            day_str = event[0]['day'] + "th"

        # Category
        if event[0]['category'] == "Theater":
            category_str = "theatric performance"
        elif event[0]['category'] == "Cinema":
            category_str = "cinematic play"
        elif event[0]['category'] == "Music":
            category_str = "musical event"
        else:
            category_str = "athletic event"


        # Content 
        event_content = event[0]["content"].replace("$","\n\n")

        conn.close()


        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login("eventhubproject@gmail.com", "mbddnqggofzoreiu")

        # Send email
        content = "You have made a reservation for " + times + " on the " + day_str + " of " + event[0]['month'] + " " + event[0]['year'] + " in " + event[0]['city'] + " for the " + category_str + ": " + event[0]['title'] + ".\nCost of reservation " + str(int(zone.split()[3]) * int(times_int)) + "€. \n \n \nAbout the event:\n" + event_content

        msg = "\r\n".join([
            "From:" + "eventhubproject@gmail.com",
            "To:" + email,
            "Subject: Your tickets!",
            "",
            content
        ])


        server.sendmail("eventhubproject@gmail.com", email, msg.encode("utf8"))

       
        return jsonify([dict(ix) for ix in event])

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
    search_result = conn.execute('SELECT * FROM events WHERE LOWER(title) LIKE :search OR LOWER(city) LIKE :search OR LOWER(content) LIKE :search', {"search": search}).fetchall()
    conn.close()

    return jsonify([dict(ix) for ix in search_result])
    