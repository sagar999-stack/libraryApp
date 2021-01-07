<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\books;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Products = Books::all();
        return response()->json(['status' => 200, 'products' => $Products]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([

            'title'=>'required|max:150',
            'description'=>'required',
            'writer'=>'required',
            'quantity'=>'required|numeric',
            'price'=>'required|numeric',
        ]);

        $product = new Books();
        $product->title = $request->title;
        $product->description = $request->description;
        $product->writer = $request->writer;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->save();
           if($product)
           {
               return response()->json(['status'=>200]);
           }
       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $Products = Books::find($id);
        return response()->json(['status' => 200, 'products' => $Products]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       $product = Books::find($id);
       $product->title = $request->title;
       $product->description = $request->description;
       $product->writer = $request->writer;
       $product->quantity = $request->quantity;
       $product->price = $request->price;
       if($product->save()){
           return response()->json(['status'=>200]);
       }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Books::find($id);
        if (!is_null($product)) {
            if($product->delete())
            {
               
                return response()->json(['status'=>200]);
               
            }
        }
        else{
            return response()->json(['status'=>200]);
            if(response()->json(['status'=>200])){
                return response()->json(['status'=>201]); 
            }
        }
       
    }
}
