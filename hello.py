from flask import Flask, render_template
import itertools
import datetime
from dateutil import parser
import random

app = Flask(__name__)

@app.route('/index.html')
def home():
    return render_template('index.html')

@app.route('/debug')
def debug():
    return render_template('base2.html')

@app.route('/')
@app.route('/intro')
def intro():
    return render_template('intro.html')

@app.route('/contract')
def contract():
    return render_template('contract.html')

def random_date(start, end):
    return start + datetime.timedelta(
        seconds=random.randint(0, int((end - start).total_seconds())))


class TableElement:
    """Use to populate table of contract info"""
    companies = ['Microsoft', 'Google', 'Slack', 'Uber', 'Aetna', 'Apple', 'Cloudflare', 'UC Berkeley', 'Pinn Construction']
    names = ['James', 'Jessica', 'Chris', 'Elaine', 'Liz', 'Tim', 'John', 'Albert', 'Sarah']
    contract_types = ['NDA']
    grades = [''.join(x) for x in itertools.product('ABCD', ['+', '-', ''])] + ['F', 'Ungraded']
    earliest_date = parser.parse('10/28/2015')
    latest_date = parser.parse('6/6/2016')

    def __init__(self, company=None, person=None, contract_type=None, issue_date=None, due_date=None, grade=None):
        self.company = company
        self.person = person
        self.contract_type = contract_type
        self.issue_date = issue_date
        self.due_date = due_date
        self.grade = grade

    def random_init(self):
        self.company = random.choice(TableElement.companies)
        self.person = random.choice(TableElement.names)
        self.contract_type = random.choice(TableElement.contract_types)
        self.grade = random.choice(TableElement.grades)
        start_date = random_date(TableElement.earliest_date, TableElement.latest_date)
        self.issue_date = start_date.strftime('%m/%d/%Y')  
        end_date = random_date(start_date, TableElement.latest_date)
        self.due_date = end_date.strftime('%m/%d/%Y')
        return self

@app.route('/profile')
def profile():
    '''Table should show: contract type, main person, other company, date, due/signed date, grade'''
    num_elements = 63
    table_elements = [TableElement().random_init() for _ in range(num_elements)]
    return render_template('dash.html', table_elements=table_elements)

# @app.route('/upload')
# def post():
#     return render_template('upload.html')

@app.route('/upload')
def upload():
    return render_template('upload2.html')

@app.route('/chat_debug')
def chat_debug():
    return render_template('chat_debug.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('intro.html'), 404

if __name__ == '__main__':
    app.run(debug=True)