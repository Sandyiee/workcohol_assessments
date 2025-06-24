from django.db import models

class TodoItem(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    status = models.BooleanField(default=False)

    def __str__(self):
        return super().__str__()
