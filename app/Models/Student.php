<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected  $fillable = ['first_name','last_name','control','semester','email','program_id'];

    public function program(){
        return $this->belongsTo(Program::class);
    }
}
