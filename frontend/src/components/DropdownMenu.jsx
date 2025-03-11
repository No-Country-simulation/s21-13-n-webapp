import React from 'react';
import Link from 'next/link';

export default function DropdownMenu({ items }) {
    return (
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow text-black">
            {items.map((item, index) => (
                <li key={index}>
                    {item.submenu ? (
                        <>
                            <Link href={item.href}>{item.label}</Link>
                            <ul className="p-2">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link href={subItem.href}>{subItem.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <Link href={item.href}>{item.label}</Link>
                    )}
                </li>
            ))}
        </ul>
    );
}