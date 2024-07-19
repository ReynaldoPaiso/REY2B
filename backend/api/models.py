from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=225, null=True)
    middle_name = models.CharField(max_length=225, null=True)
    last_name = models.CharField(max_length=225, null=True)
    address = models.CharField(max_length=225, null=True)
    email = models.EmailField(max_length=225, null=True)
    phone = models.CharField(max_length=225, null=True)
    date_of_birth = models.CharField(max_length=225, null=True)
    place_of_birth = models.CharField(max_length=225, null=True)
    sex = models.CharField(max_length=225, null=True)
    age = models.CharField(max_length=225, null=True)
    civil_status = models.CharField(max_length=225, null=True)
    height_m = models.CharField(max_length=225, null=True)
    weight_kg= models.CharField(max_length=225, null=True)
    blood_type = models.CharField(max_length=225, null=True)
    citizenship = models.CharField(max_length=225, null=True)
    province = models.CharField(max_length=225, null=True)
    zip_code = models.CharField(max_length=225, null=True)
    religion = models.CharField(max_length=225, null=True)
    pagibig_id_no = models.CharField(max_length=225, null=True, blank=True)
    philhealth_no = models.CharField(max_length=225, null=True, blank=True)
    sss_no = models.CharField(max_length=225, null=True, blank=True)
    tin_no = models.CharField(max_length=225, null=True, blank=True)
    gsis_id_no = models.CharField(max_length=225, null=True, blank=True)
    agency_employee = models.CharField(max_length=225, null=True)
    residential_address = models.CharField(max_length=225, null=True)
    telephone_no = models.CharField(max_length=225, null=True, blank=True)
    fathers_name = models.CharField(max_length=225, null=True)
    mothers_name = models.CharField(max_length=225, null=True)


    def __str__(self):
        return self.first_name