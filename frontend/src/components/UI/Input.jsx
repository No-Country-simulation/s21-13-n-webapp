import { platform } from 'process';
import React from 'react';

const Input = ({ id, label, type, register, required, pattern, minLength, errorMessage, placeholder }) => {
    return (
        <div className="mb-3">

            <div className="label">
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                {errorMessage &&<span className="label-text-alt text-pink-300">{errorMessage}</span>}
            </div>
            <input
                id={id}
                type={type}
                {...register(id, { required, pattern, minLength })}
                className="input input-sm lg:input-md input-bordered w-full border-pink-400 bg-white border-[1px] focus:border-pink-200 focus:outline-none focus:ring focus:ring-pink-200"
                placeholder={placeholder}
            />
            {/* {errorMessage && <span className="text-red-500 text-sm">{errorMessage}</span>} */}
        </div>
    );
};

export default Input;
