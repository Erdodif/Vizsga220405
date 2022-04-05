<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreidopontRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "targy" => ["required", "max:255"],
            "tipus" => ["required", "max:255"],
            "kezdes" => ["required", "date"]
        ];
    }
}
