from django.db import models
from django.core.validators import FileExtensionValidator

from core.models.general import TimeStampedUUIDModel


class ContactForm(TimeStampedUUIDModel):
    name = models.CharField(max_length=12)
    email = models.CharField(max_length=12)
    submitted_date = models.DateField()
    submitted_time = models.TimeField()
    submitted_date_time = models.DateTimeField()
    photo = models.FileField(upload_to='protected_files/contact_forms/', null=True, blank=True,
                             validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png'])])

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Contact Forms"
        ordering = ('-created_at',)
