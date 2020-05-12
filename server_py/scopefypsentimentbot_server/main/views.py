# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from library.df_response_lib import *
from library.joke import *
from library.db import *
from datetime import datetime
import json
import requests

# Create your views here.
def home(request):
    return HttpResponse('Hello World!')

def getContent():
    url = 'https://www.reddit.com/r/jokes/top.json?sort=top&t=day'
    r = requests.get(url)
    return r.json()

@csrf_exempt
def webhook(request):
    # build a request object
    # headers = json.loads(request.headers)
    req = json.loads(request.body)
    print(req)
    # get action from json
    action = req.get('queryResult').get('action')
    language = req.get('queryResult').get('languageCode')
    database = db()
    databaseResult = database.PostData(req)
    if action == 'custom.agent.currenttime':
        now = datetime.now()
        if language == 'en':
            fulfillmentText = {'fulfillmentText': 'Now is '+now.strftime("%Y-%m-%d %H:%M:%S")}
        else:
            fulfillmentText = {'fulfillmentText': '而家 '+now.strftime("%Y-%m-%d %H:%M:%S")}
        return JsonResponse(fulfillmentText, safe=False)
    elif 'joke':
        result = joke()
        fulfillmentText = {'fulfillmentText': result.getJoke()}
        return JsonResponse(fulfillmentText, safe=False)