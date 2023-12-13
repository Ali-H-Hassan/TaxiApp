<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            'email' => ['required','email:filter'],
            'password'=>['required',
                            'string',
                            function ($attribute, $value, $fail) {
                                // Use a closure to perform custom validation
                                if (empty($value)) {
                                    $fail('The password field is required.');
                                }}]
        ];
    }
}
