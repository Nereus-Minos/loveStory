# -*- coding: utf-8 -*-
from django.db import models
from django.contrib import admin
from loveStory.settings import *
from django.utils.encoding import python_2_unicode_compatible
import six


def substr(content, length,add_dot=True):
    u"""
    summary:
        字符串截取
    author:
        Jason Lee <huacnlee@gmail.com>
    """
    if(len(content) > length):
        content = content[:length]
        if(add_dot):
            content = content[:len(content)-3] + '...'
    return content


# Note model
class Note(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    heads = models.CharField('消息头', max_length=200)
    message = models.TextField('消息')
    addtime = models.DateTimeField('发布时间', auto_now=True)

    def __unicode__(self):
        return self.message

    def message_short(self):
        return substr(self.message, 30)

    def addtime_format_admin(self):
        return self.addtime.strftime('%Y-%m-%d %H:%M:%S')

    class Meta:
        verbose_name = u'消息'
        verbose_name_plural = u'消息'


class NoteAdmin(admin.ModelAdmin):
    list_display = ('id', 'message_short', 'addtime_format_admin')
    list_display_links = ('id', 'message_short')
    search_fields = ['message']
    list_per_page = 20


# comment model
class Comment(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    heads = models.CharField('姓名', max_length=200)
    message = models.TextField('内容')
    addtime = models.DateTimeField('发布时间', auto_now=True)

    def __unicode__(self):
        return self.message

    def message_short(self):
        return substr(self.message, 30)

    def addtime_format_admin(self):
        return self.addtime.strftime('%Y-%m-%d %H:%M:%S')

    class Meta:
        verbose_name = u'评论'
        verbose_name_plural = u'评论'


class CommentAdmin(admin.ModelAdmin):
    list_display = ('id', 'message_short', 'addtime_format_admin')
    list_display_links = ('id', 'message_short')
    search_fields = ['message']
    list_per_page = 20


admin.site.register(Note, NoteAdmin)
admin.site.register(Comment, CommentAdmin)
