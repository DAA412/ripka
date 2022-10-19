import MySQLdb

db = MySQLdb.connect(
    host="localhost",
    user="dbuser",
    passwd="123",
    db="cakes"
)

c = db.cursor()
c.execute("INSERT INTO cakes (name, ingredients) VALUES (%s, %s);", ('Cake', 'Ingredients'))
db.commit()
c.close()
db.close()
