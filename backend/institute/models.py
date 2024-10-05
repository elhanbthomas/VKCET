from django.db import models


class Department(models.Model):
    department_code = models.CharField(max_length=3, primary_key=True)
    d_name = models.CharField(max_length=100, verbose_name='Department name')

    def __str__(self):
        return self.d_name
    
class Subject(models.Model):
    subject_code = models.CharField(max_length=6)
    subject_name = models.CharField(max_length=100)


    def __str__(self):
        return self.subject_name
    
class Batch(models.Model):
    batch_code = models.CharField(max_length=10)
    year = models.IntegerField()
    semester = models.IntegerField()
    department = models.ForeignKey(Department,on_delete=models.PROTECT)

    class Meta:
        verbose_name_plural = 'Batches'

    def __str__(self):
        return self.batch_code