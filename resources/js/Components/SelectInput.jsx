import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
        name='club_id'
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
            <option value="1">some</option>
            <option value="2">some</option>
            <option value="3">some</option>
            <option value="4">some</option>
            </select>
    );
});
