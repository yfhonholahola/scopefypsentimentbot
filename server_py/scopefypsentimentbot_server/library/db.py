from firebase import firebase

class db():
    def __init__(self):
        firebase = firebase.FirebaseApplication('https://scope-fyp-sentiment-bot-kwrxmo.firebaseio.com/', None)

    def PostData(self, data):
        data =  { 'Name': 'John Doe',
          'RollNo': 3,
          'Percentage': 70.02
          }
        result = self.db.child("python-example-f6d0b").child("Students").push(data)
        return result

# myDb = db()
# myDb.PostData()



# result = firebase.get('/email', None)
# print(result)