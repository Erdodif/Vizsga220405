<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreidopontRequest;
use App\Http\Requests\UpdateidopontRequest;
use App\Models\Idopont as Idopont;
use Error;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class IdopontController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Idopont::all(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreidopontRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreidopontRequest $request)
    {
        $tipus = mb_strtolower($request["tipus"]);
        if (!($tipus == "szakmai" || $tipus == "erettsegi")) {
            return response()->json(["error" => "csak szakmai és érettségi időpontok tárolására van lehetőség!"], 400);
        }
        try{
            $idopont = Idopont::create($request->only(["targy","tipus","kezdes"]));
            return response($idopont,201);
        }
        catch(Exception|Error $e){
            return response()->json(["error" => $e], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\idopont  $idopont
     * @return \Illuminate\Http\Response
     */
    public function show(int $idopont)
    {
        try {
            $elem = Idopont::findOrFail($idopont)->first();
            return response()->json($elem, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(["error" => "Időpont nem található"], 404);
        } catch (Exception | Error $e) {
            return response()->json(["error" => $e], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateidopontRequest  $request
     * @param  \App\Models\idopont  $idopont
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateidopontRequest $request, int $idopont)
    {
        try {
            $elem = Idopont::findOrFail($idopont)->first();
            $elem->fill($request->only(["targy","tipus","kezdes"]));
            $elem->save();
            return response()->json($elem, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json(["error" => "Időpont nem található"], 404);
        } catch (Exception | Error $e) {
            return response()->json(["error" => $e], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\idopont  $idopont
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $idopont)
    {
        try {
            $elem = Idopont::findOrFail($idopont)->first();
            $elem->delete();
            return response('', 204);
        } catch (ModelNotFoundException $e) {
            return response()->json(["error" => "Időpont nem található"], 404);
        } catch (Exception | Error $e) {
            return response()->json(["error" => $e], 500);
        }
    }
}
