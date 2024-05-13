<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Student;

class studentsController extends Controller
{
    public function index()
    {
        $students = DB::table('students')->get();
        return $students;
        //$Student= Student::where('first_name',)->first();
        //return $Student;
    }

    public function create()
    {
        //
    }
    
    public function store(Request $request)
    {
        Student::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'semester' => $request->semester,
            'control' => $request->control,
            'program_id' => $request-> program_id

        ]);
        
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //return $request->name;
        //$student = DB::table('students')->where('first_name', $request->name)->first(); //regresa solo el primer valor
        $student = DB::table('students')->get(); //regresar todos los valores
        return $student;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $student = Student::updateOrCreate( 
            ['control' => $request->control],
            ['first_name'=> $request->first_name,'last_name'=> $request->last_name]
        );
        return $student; 
    }

    /**
     * Remove the specified resource from storage.
     */
    /*public function destroy(Request $request)
    {
        //$student =Student::where('control',$request->control)->first();
        $student =Student::where('control',$request->control)->delete();
        //$student->destroy();
        $student->delete();
        $student= Student::all();
        return $student;

    }*/
    public function destroy(Request $request)
    {
        Student::where('id', $request->id)->delete();
        $STUDENT = DB::table('student')->get();
        return $student;
    }
    public function token(){
        $token = csrf_token();
        return $token;
    }
}
