# Flask App for Battle Ballers
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect, MetaData, Table

from flask import Flask, jsonify
from  flask import (Flask, render_template, jsonify, request, redirect)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///Data-Dunks.sqlite"
engine = create_engine("sqlite:///Data-Dunks.sqlite")

db = SQLAlchemy(app)

metadata = MetaData()
# we can reflect it ourselves from a database, using options
# such as 'only' to limit what tables we look at...
metadata.reflect(engine, only=['master', 'career_best'])


Base = automap_base(metadata=metadata)
# reflect the tables
Base.prepare(engine, reflect=True)

Master = Base.classes.master
Best = Base.classes.career_best

#  home page - welcome
@app.route("/")
def index():
    return render_template("index.html")
    # buttons to navigate
    # exciting

@app.route("/home")
def home():
    return render_template("index.html")
    # buttons to navigate
    # exciting 

# player vs player
    # ____ vs _____
@app.route("/pvp.html")
def roster():
    return render_template("pvp.html")

# team vs team
@app.route("/tvt.html")
def teamroster():
    return render_template("tvt.html")
    # ____ vs _____

# separate about page
@app.route("/about.html")
def about():
    return render_template("about.html")

# separate database access page
@app.route("/stats")
def stats():
    return render_template("stats.html")

if __name__ == "__main__":
    app.run(debug = True)