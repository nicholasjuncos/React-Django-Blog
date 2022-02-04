from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.validators import UnicodeUsernameValidator

from ..common.fields import CIEmailField, CICharField


class User(AbstractUser):
    username_validator = UnicodeUsernameValidator()
    username = CICharField(
        _('username'),
        max_length=150,
        unique=True,  # Remove this when utilizing email auth
        help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
        validators=[username_validator],
        error_messages={
            'unique': _("A user with that username already exists."),
        },
    )
    email = CIEmailField(_('email address'), unique=True)
    profile_photo = models.ImageField(upload_to='user/profile/', blank=True, null=True)
    cover_photo = models.ImageField(upload_to='user/cover/', blank=True, null=True)
    bio = models.TextField(max_length=200, blank=True)
    REQUIRED_FIELDS = ['email']

    class Meta:
        ordering = ('username',)

    # def __str__(self):
    #     return self.email  # Change to email if needed
        # if self.name:
        #     return self.name
        # if self.first_name and self.last_name:
        #     return self.first_name + " " + self.last_name
        # else:
        #     return "Anonymous User"

    @property
    def full_name(self):
        return (self.first_name + ' ' + self.last_name).strip()

    def has_group(self, group):
        return self.groups.filter(name=group).exists()

    def initial_dict(self):
        return {
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email
        }
