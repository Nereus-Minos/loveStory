# -*- coding: utf-8 -*-
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.utils.translation import ugettext as _
from django.template import Context, loader
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from love.models import Note, Comment

import datetime
import json
from PIL import Image

# 首页
@csrf_exempt
def index(request):

    context = {}

    return render(request, 'Index.htm', context)


# 时间先生
@csrf_exempt
def timeMan(request):

    context = {}

    return render(request, 'lovetree.htm', context)


# 爱情故事
@csrf_exempt
def story(request):

    context = {}

    return render(request, 'story.htm', context)


# 三行情书
@csrf_exempt
def letter(request):

    context = {}

    return render(request, 'Letter.htm', context)


# 小小合照
@csrf_exempt
def youme(request):

    context = {}

    return render(request, 'youme.html', context)


# 送上祝福
@csrf_exempt
def Comments(request):

    # 获取发送内容
    if request.method == 'GET':

        if 'send_message' in request.GET:
            send_message = request.GET.get('send_message')
            name = request.GET.get('name')
            _comment = Comment(heads=name, message=send_message)
            _comment.save()
            return HttpResponse(json.dumps({'ok': 'ok'}))

        if 'ltime' in request.GET:
            _id = request.GET.get('ltime')
            _temps = Comment.objects.filter(id__gt=_id)
            _comments = []
            for _temp in _temps:
                _comment = []
                _comment.append(_temp.heads)
                _comment.append(_temp.message)
                _comment.append(_temp.id)
                _comments.append(_comment)
            return HttpResponse(json.dumps({'comments': _comments}))

    _comments = []
    for _temp in Comment.objects.all():
        _comment = []
        _comment.append(_temp.heads)
        _comment.append(_temp.message)
        _comment.append(_temp.id)
        _comments.append(_comment)

    context = {'comments': _comments}

    return render(request, 'Comments.htm', context)


# 每日情话
@csrf_exempt
def loveWords(request, _id):

    if _id == '0':
        _note = Note.objects.last()
    else:
        _note = get_object_or_404(Note, id=_id)

    _blogheadsids = []
    for _temp in Note.objects.all():
        _blogheadsid = []
        _blogheadsid.append(_temp.heads)
        _blogheadsid.append(_temp.id)
        _blogheadsids.append(_blogheadsid)

    context = {
        'head': _note.heads,
        'message': _note.message,
        'blogheadsids': _blogheadsids,
    }

    return render(request, 'loveWords.html', context)
