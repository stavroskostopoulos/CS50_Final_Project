from flask import Flask,jsonify,request

app = Flask(__name__)

@app.route('/')
def index():
    data = {
        "Modules": 15,
        # tou tzimakou thn mama
        # events = db.execute("SELECT * FROM events WHERE category = ? AND month = ? AND year = ? AND city = ?",
        #                             category, month, year, city)
        "Subject" : "Data otidhpote and Algorithms"
    }
    return jsonify(data)
    