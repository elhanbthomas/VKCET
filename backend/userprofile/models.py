from django.db import models
from django.contrib.auth.models import User
from institute.models import Department, Subject, Batch
GENDER = [
    ('male', 'Male'),
    ('female', 'Female'),
    ('other', 'Other')
]

class StudentProfile(models.Model):
    roll_no = models.IntegerField()
    fname = models.CharField(max_length=100, verbose_name='First name')
    lname = models.CharField(max_length=100, verbose_name='Last name')
    gender = models.CharField(max_length=10, choices=GENDER, default='male')
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
    semester = models.IntegerField(default=1)

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
    department = models.ForeignKey(Department, on_delete=models.PROTECT, blank=True, null=True)
    batch = models.ForeignKey(Batch, on_delete=models.PROTECT, blank=True, null=True)


    class Meta:
        ordering = ('')

    def __str__(self):
        return f"{self.roll_no} {self.fname} {self.lname}"
    

class StaffProfile(models.Model):
    name = models.CharField(max_lenght=255)
    email = models.EmailField()
    dob = models.DateField()
    gender = models.CharField(max_length=10, choices=GENDER)
    address = models.TextField()
    phone = models.CharField(max_length=10)
    
    academic_designation = models.CharField(max_length=100)
    academic_role = models.CharField(max_length=100)
    hr_section = models.CharField(max_length=100)
    hr_designation = models.CharField(max_length=100)
    join_date = models.DateField()
    quaification = models.TextField(blank=True, null=True)
    
    department = models.ForeignKey(Department, on_delete=models.PROTECT)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name