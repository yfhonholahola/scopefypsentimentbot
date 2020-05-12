import json
import requests
from bs4 import BeautifulSoup
from random import randrange

class joke():
    def __init__(self):
        self.url = 'http://www.reddit.com/r/jokes/top.json?sort=top&t=day'

    def getJoke(self):
        headers = requests.utils.default_headers()
        headers.update({ 'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0'})
        r = requests.get(self.url,headers=headers)
        thread = r.json()['data']['children'][randrange(25)]['data']
        title = 'Here\'s a joke: {}'.format(thread['title'])
        selftext = thread["selftext"]
        output = title + '\n\n' + selftext
        return output