from django.db import models

class Message(models.Model):
    content = models.CharField(max_length=255)

    class Meta:
        db_table = 'message'

    def __str__(self):
        return self.content

