<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Student::create(["first_name" => 'MMM', "last_name" => 'la mejor carrera', "email" => 'a@a.mx',"semester"=> '2', "control"=> '1818', "program_id"=>'1']);
    }
}
