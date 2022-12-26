import sqlite3
import json
from flask import Flask,jsonify,request
from flask_cors import CORS

CITIES = ['All', 'Litochoro', 'Athens', 'Thessaloniki', 'Spiti Koumpi', 'Sotiros', 'Katerini', 'Synora', 'Kalamata']
MONTHS = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','Octomber', 'November', 'December']
YEARS = ['All', '2023', '2024', '2025']

app = Flask(__name__)

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
    search_results = conn.execute("SELECT * FROM events WHERE category = 'Sport' AND month LIKE :month AND year LIKE :year AND city LIKE :city", {"month": month, "year": year, "city": city}).fetchall()
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