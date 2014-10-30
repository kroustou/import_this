from django.conf.urls import patterns, url

urlpatterns = patterns(
    '',
    url(r'^$', 'blog.views.list', name='list'),
)
