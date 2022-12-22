import sqlite3
import json
from flask import Flask,jsonify,request

app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn



@app.route('/')
def index():
    conn = get_db_connection()
    popular = conn.execute('SELECT * FROM events ORDER BY RANDOM() LIMIT 12').fetchall()
    print(popular)
    print(type(popular))
    conn.close()
    return json.dumps(popular, default=str)
    