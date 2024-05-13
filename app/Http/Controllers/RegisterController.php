<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
//use Validator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class RegisterController extends ResponseController
{

    public function register(Request $request){

        $validator = Validator::make($request->all(), [
        'name'=> 'required',
        'email'=> 'required|email',
        'password'=> 'required',
        'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.',
            $validator->errors());
        }


        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')
                                     ->accessToken;
        $success['name'] = $user->name;

        return $this->sendResponse($success,'User register successfully');                             
    }

    public function login(Request $request): JsonResponse
    {
        if(Auth::attempt(['email' => $request->email,
        'password' => $request->password])){
            $user = Auth::user();
            $success['token'] =
            $user->createToken('MyApp')->accessToken;
            $success['name'] =
            $user->name;

            return $this->sendResponse($success,
            'User login successfully');
        } else{

            return $this->sendError('Unaunthoriserd',
            ['error'=> 'Unaunthoriserd']);
        }
    }

    


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, n $n)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
   



}


