'use client';

import Text from '@/app/components/Text';
import TextInput from '@/app/components/form/TextInput';
import AttendingToggle from '@/app/components/form/AttendingToggle';
import type {Guest} from '@/lib/types/form';

type Props = {
  guest: Guest;
  index: number;
  canRemove: boolean;
  onUpdate: (id: string, updates: Partial<Guest>) => void;
  onAnswer: (guestId: string, questionId: string, value: string) => void;
  onRemove: (id: string) => void;
};

export default function GuestCard({
  guest,
  index,
  canRemove,
  onUpdate,
  onAnswer,
  onRemove,
}: Props) {
  return (
    <div className='relative rounded-3xl p-6 space-y-6 text-left bg-on-surface bg-surface'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <Text weight='bold'>Person {index + 1}</Text>

        {canRemove && (
          <button
            type='button'
            onClick={() => onRemove(guest.id)}
            className='text-sm text-black/40 hover:text-black'
          >
            Ta bort
          </button>
        )}
      </div>
      <div className=''>
        <div className='flex gap-6 items-end  pb-6 mb-6 '>
          {/* Name */}
          <TextInput
            label='Namn'
            value={guest.name}
            onChange={(e) => onUpdate(guest.id, {name: e.target.value})}
          />

          {/* Attending toggle */}
          <div className='mb-2'>
            <AttendingToggle
              checked={guest.attending}
              onChange={(checked) => onUpdate(guest.id, {attending: checked})}
            />
          </div>
        </div>

        {/* Conditional content */}
        {guest.attending && (
          <div className='space-y-6'>
            <TextInput
              label='Allergier'
              value={guest.allergies}
              onChange={(e) => onUpdate(guest.id, {allergies: e.target.value})}
            />

            <div className='space-y-4'>
              {guest.questions.map((q) => (
                <div key={q.id}>
                  <p className='mb-2 font-medium'>{q.question}</p>
                  <div className='flex flex-wrap gap-2'>
                    {q.options.map((opt) => {
                      const active = guest.answers[q.id] === opt;

                      return (
                        <button
                          key={opt}
                          type='button'
                          onClick={() => onAnswer(guest.id, q.id, opt)}
                          className={`px-3 py-1 rounded-full border text-sm transition
                          ${
                            active
                              ? 'bg-black text-white border-black'
                              : 'border-black/20 hover:border-black'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 'use client';

// import Text from '@/app/components/Text';
// import TextInput from '@/app/components/form/TextInput';
// import type {Guest} from '@/lib/types/form';

// type Props = {
//   guest: Guest;
//   index: number;
//   canRemove: boolean;
//   onUpdate: (id: string, updates: Partial<Guest>) => void;
//   onAnswer: (guestId: string, questionId: string, value: string) => void;
//   onRemove: (id: string) => void;
// };

// export default function GuestCard({
//   guest,
//   index,
//   canRemove,
//   onUpdate,
//   onAnswer,
//   onRemove,
// }: Props) {
//   return (
//     <div className='relative rounded-2xl border border-black/10 p-6 space-y-6 text-left'>
//       {/* Header */}
//       <div className='flex items-center justify-between'>
//         <Text weight='bold'>Person {index + 1}</Text>

//         {canRemove && (
//           <button
//             type='button'
//             onClick={() => onRemove(guest.id)}
//             className='text-sm text-black/40 hover:text-black'
//           >
//             Ta bort
//           </button>
//         )}
//       </div>

//       {/* Name */}
//       <TextInput
//         label='Namn'
//         value={guest.name}
//         onChange={(e) => onUpdate(guest.id, {name: e.target.value})}
//       />

//       {/* Attending toggle */}
//       <label className='flex items-center gap-3 cursor-pointer'>
//         <input
//           type='checkbox'
//           checked={guest.attending}
//           onChange={(e) => onUpdate(guest.id, {attending: e.target.checked})}
//         />
//         <span className='text-sm'>
//           {guest.attending ? 'Kommer' : 'Kommer inte'}
//         </span>
//       </label>

//       {/* Conditional content */}
//       {guest.attending && (
//         <>
//           <TextInput
//             label='Allergier'
//             value={guest.allergies}
//             onChange={(e) => onUpdate(guest.id, {allergies: e.target.value})}
//           />

//           <div className='space-y-4'>
//             {guest.questions.map((q) => (
//               <div key={q.id}>
//                 <p className='mb-2 font-medium'>{q.question}</p>
//                 <div className='flex flex-wrap gap-2'>
//                   {q.options.map((opt) => {
//                     const active = guest.answers[q.id] === opt;

//                     return (
//                       <button
//                         key={opt}
//                         type='button'
//                         onClick={() => onAnswer(guest.id, q.id, opt)}
//                         className={`px-3 py-1 rounded-full border text-sm
//                           ${
//                             active
//                               ? 'bg-black text-white'
//                               : 'border-black/20 hover:border-black'
//                           }`}
//                       >
//                         {opt}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
