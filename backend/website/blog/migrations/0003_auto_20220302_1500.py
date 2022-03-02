# Generated by Django 3.2.11 on 2022-03-02 21:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0002_comment_follow_like_reply'),
    ]

    operations = [
        migrations.AddField(
            model_name='like',
            name='modified',
            field=model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified'),
        ),
        migrations.AlterField(
            model_name='like',
            name='article',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.post'),
        ),
        migrations.AlterField(
            model_name='like',
            name='comment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.comment'),
        ),
        migrations.AlterField(
            model_name='like',
            name='reply',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.reply'),
        ),
        migrations.AlterUniqueTogether(
            name='follow',
            unique_together={('user_follower', 'author_followed')},
        ),
    ]
