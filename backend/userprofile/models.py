from django.db import models
from django.contrib.auth.models import User

GENDER = [
    ('male', 'Male'),
    ('female', 'Female'),
    ('other', 'Other')
]

class StudentProfile(models.Model):
    roll_no = models.CharField(max_length=10)
    fname = models.CharField(max_length=100, verbose_name='First name')
    lname = models.CharField(max_length=100, verbose_name='Last name')
    gender = models.BooleanField(max_length=10, choices=GENDER)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    date_of_birth = models.DateField()
    religion = models.CharField(max_length=100)
    sslc_marks = models.FloatField(blank=True, null=True)
    plus_two_marks = models.FloatField()
      
    account = models.PositiveBigIntegerField()
    university_reg_no = models.CharField(max_length=50, unique=True)
    avail_hostel = models.BooleanField()
    avail_bus = models.BooleanField()

    parent_phone = models.CharField(max_length=20)
    father_name = models.CharField(max_length=100, blank=True, null=True)
    father_occupation = models.CharField(max_length=256, blank=True, null=True)
    mother_name = models.CharField(max_length=100, blank=True, null=True)
    mother_occupation = models.CharField(max_length=256, blank=True, null=True)

    nationality = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    pincode = models.CharField(max_length=6)
    address_line = models.TextField()

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    class Meta:
        ordering = ('')

    def __str__(self):
        return f"{self.roll_no} {self.fname} {self.lname}"