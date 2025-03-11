import React from 'react';
import { IoMdCart } from "react-icons/io";

export default function Cart() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="rounded-none hover:bg-pink-200 btn btn-ghost lg:btn-lg">
                <div className="indicator flex flex-col items-center justify-center">
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg> */}
        
                        <IoMdCart size={30} className='text-black' />
                        <span className="text-[9px] text-black font-bold">CARRITO</span>

                    <span className="badge badge-xs text-[8px] border-0 text-white indicator-item top-[6px] left-[16px] bg-pink-700 bg-opacity-80">8</span>

                </div>
                

            </div>
            <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[50] mt-3 w-52 shadow">
                <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}