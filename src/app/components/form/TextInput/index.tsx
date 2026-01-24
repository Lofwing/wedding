import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const TextInput: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className='flex flex-col gap-1 w-full text-left max-w-[340px]'>
      {label && (
        <label className='text-sm font-medium text-gray-700'>{label}</label>
      )}

      <input
        {...props}
        className={`
          rounded-xl border px-3 py-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
          ${className}
        `}
      />

      {error && <span className='text-xs text-red-600'>{error}</span>}
    </div>
  );
};

export default TextInput;
