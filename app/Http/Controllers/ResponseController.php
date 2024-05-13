<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;

class ResponseController extends Controller
{

    public function sendResponse($result, $message)
    {
        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message,
        ];
        return response()->json($response,200);
    }

      public function sendError ($error, $errorMessages = [], $code = 404)
      {
         $response = [
            'success' => false,
            'message' => $error,
        ]; 
        if (!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }
        return response()->json($response,$code);
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
        //return $request->name;
        //$student = DB::table('students')->where('first_name', $request->name)->first(); //regresa solo el primer valor
        $user = DB::table('user')->get(); //regresar todos los valores
        return $user;
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
    public function destroy(n $n)
    {
        User::where('id', $request->id)->delete();
        $user = DB::table('user')->get();
        return $user;
    }


    public function token(){
        $token = csrf_token();
        return $token;
    }
}
