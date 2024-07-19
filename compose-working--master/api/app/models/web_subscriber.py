from django.db import models

from core.models.general import TimeStampedUUIDModel


class WebSubscriber(TimeStampedUUIDModel):
    email = models.CharField(max_length=256, unique=True)

    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "Web Subscribers"
        ordering = ('-created_at',)
