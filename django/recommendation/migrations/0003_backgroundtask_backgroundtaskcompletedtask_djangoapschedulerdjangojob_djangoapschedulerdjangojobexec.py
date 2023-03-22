# Generated by Django 3.2.13 on 2023-03-22 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recommendation', '0002_authgroup_authgrouppermissions_authpermission_authuser_authusergroups_authuseruserpermissions_django'),
    ]

    operations = [
        migrations.CreateModel(
            name='BackgroundTask',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('task_name', models.CharField(max_length=190)),
                ('task_params', models.TextField()),
                ('task_hash', models.CharField(max_length=40)),
                ('verbose_name', models.CharField(blank=True, max_length=255, null=True)),
                ('priority', models.IntegerField()),
                ('run_at', models.DateTimeField()),
                ('repeat', models.BigIntegerField()),
                ('repeat_until', models.DateTimeField(blank=True, null=True)),
                ('queue', models.CharField(blank=True, max_length=190, null=True)),
                ('attempts', models.IntegerField()),
                ('failed_at', models.DateTimeField(blank=True, null=True)),
                ('last_error', models.TextField()),
                ('locked_by', models.CharField(blank=True, max_length=64, null=True)),
                ('locked_at', models.DateTimeField(blank=True, null=True)),
                ('creator_object_id', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'background_task',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='BackgroundTaskCompletedtask',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('task_name', models.CharField(max_length=190)),
                ('task_params', models.TextField()),
                ('task_hash', models.CharField(max_length=40)),
                ('verbose_name', models.CharField(blank=True, max_length=255, null=True)),
                ('priority', models.IntegerField()),
                ('run_at', models.DateTimeField()),
                ('repeat', models.BigIntegerField()),
                ('repeat_until', models.DateTimeField(blank=True, null=True)),
                ('queue', models.CharField(blank=True, max_length=190, null=True)),
                ('attempts', models.IntegerField()),
                ('failed_at', models.DateTimeField(blank=True, null=True)),
                ('last_error', models.TextField()),
                ('locked_by', models.CharField(blank=True, max_length=64, null=True)),
                ('locked_at', models.DateTimeField(blank=True, null=True)),
                ('creator_object_id', models.PositiveIntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'background_task_completedtask',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoApschedulerDjangojob',
            fields=[
                ('id', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('next_run_time', models.DateTimeField(blank=True, null=True)),
                ('job_state', models.TextField()),
            ],
            options={
                'db_table': 'django_apscheduler_djangojob',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoApschedulerDjangojobexecution',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('status', models.CharField(max_length=50)),
                ('run_time', models.DateTimeField()),
                ('duration', models.DecimalField(blank=True, decimal_places=2, max_digits=15, null=True)),
                ('finished', models.DecimalField(blank=True, decimal_places=2, max_digits=15, null=True)),
                ('exception', models.CharField(blank=True, max_length=1000, null=True)),
                ('traceback', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'django_apscheduler_djangojobexecution',
                'managed': False,
            },
        ),
    ]
