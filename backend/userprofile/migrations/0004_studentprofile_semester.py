# Generated by Django 5.1 on 2024-09-14 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0003_alter_studentprofile_gender'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentprofile',
            name='semester',
            field=models.IntegerField(default=1),
        ),
    ]
