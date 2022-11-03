import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    placeholder,
    className,
    autoComplete,
    required,
    readOnly,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const baseClass = readOnly
        ? 'border-gray-300 border-0 shadow-none focus:border-0 focus:ring-0 rounded-md shadow-sm '
        : 'border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ';

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                className={
                    baseClass +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                readOnly={readOnly}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
