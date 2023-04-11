from flask import Flask, Blueprint
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'MyDB'

mysql = MySQL(app)

views = Blueprint(__name__, "views")


def query(q):
    cur = mysql.connection.cursor()
    print(cur.execute(q))
    mysql.connection.commit()
    cur.close()


@views.route("/add-item")
def home():
    pass


@views.route("/add-type")
def home():
    pass


@views.route("/delete-type")
def home():
    pass


@views.route("/delete-type")
def home():
    pass


@views.route("/get")
def home():
    pass


@views.route("/loan-item")
def home():
    pass


@views.route("/unload-item")
def home():
    pass


if __name__ == '__main__':
    app.run(port=8000)
