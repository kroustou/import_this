from django.shortcuts import render
from blog.models import Post


def list(request):
    return render(request, 'blog/list.html', {'posts': Post.objects.all()})
