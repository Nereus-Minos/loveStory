from django.conf.urls import url
from love import views


urlpatterns = [
    url(r'^$', views.index),        # 主页
    url(r'^timeMan/$', views.timeMan),        # 时间先生
    url(r'^story/$', views.story),        # 爱情故事
    url(r'^youme/$', views.youme),        # 小小合照
    url(r'^loveWords/(?P<_id>\d+)/$', views.loveWords, name="loveWords"),  # 每日情话
    url(r'^Comments/$', views.Comments),  # 送上祝福
]
