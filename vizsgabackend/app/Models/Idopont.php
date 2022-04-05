<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Idopont extends Model
{
    use HasFactory;
    public $table = "idopontok";
    public $timestamps = false;
    public $fillable = ['targy','tipus','kezdes'];
}
