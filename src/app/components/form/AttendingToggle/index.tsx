'use client';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function AttendingToggle({checked, onChange}: Props) {
  return (
    <label className='flex items-center gap-3 cursor-pointer select-none'>
      {/* Hidden checkbox (riktig input) */}
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className='sr-only'
      />

      {/* Toggle track */}
      <div
        className={`relative w-11 h-6 rounded-full transition-colors
          ${checked ? 'bg-black' : 'bg-black/20'}`}
      >
        {/* Toggle thumb */}
        <div
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow
            transition-transform
            ${checked ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </div>

      {/* Label */}
      <span className='text-sm'>{checked ? 'Kommer' : 'Kommer inte'}</span>
    </label>
  );
}
