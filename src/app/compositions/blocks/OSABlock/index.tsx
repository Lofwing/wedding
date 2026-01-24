'use client';

import {useState} from 'react';
import classNames from 'classnames';
import Text from '@/app/components/Text';
import MaxWidth from '@/app/components/MaxWidth';
import {getRandomQuestions} from '@/lib/utils/randomQuestions';
import type {Guest} from '@/lib/types/form';
import GuestCard from '../../GuestCard';

const wrapperClasses = classNames(
  // 'bg-surface',
  // 'text-on-surface',
  // 'bg-secondary',
  'text-on-background',
  'p-12',
  'w-full mx-auto',
);

const QUESTIONS_PER_GUEST = 3;

export default function OSABlock() {
  const [guests, setGuests] = useState<Guest[]>([createGuest()]);
  const [additionalInfo, setAdditionalInfo] = useState('');

  function createGuest(): Guest {
    return {
      id: crypto.randomUUID(),
      name: '',
      attending: true,
      allergies: '',
      questions: getRandomQuestions(QUESTIONS_PER_GUEST),
      answers: {},
    };
  }

  const updateGuest = (id: string, updates: Partial<Guest>) => {
    console.log('updates', updates);
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? {...g, ...updates} : g)),
    );
    console.log('guest', guests);
  };

  const updateAnswer = (guestId: string, questionId: string, value: string) => {
    setGuests((prev) =>
      prev.map((g) =>
        g.id === guestId
          ? {
              ...g,
              answers: {...g.answers, [questionId]: value},
            }
          : g,
      ),
    );
  };

  const addGuest = () => {
    setGuests((prev) => [...prev, createGuest()]);
  };

  // const handleSubmit = () => {
  //   const payload = {
  //     guests,
  //     additionalInfo,
  //   };

  //   console.log(payload); // 🔥 redo för backend / export / GPT
  // };

  const handleSubmit = async () => {
    const payload = {
      guests,
      additionalInfo,
    };
    console.log('guests', guests);
    try {
      const res = await fetch('/api/osa', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Tack! Din OSA är registrerad.');
        // nollställ form
        setGuests([createGuest()]);
        setAdditionalInfo('');
      } else {
        alert('Fel: ' + data.error);
      }
    } catch (err: any) {
      alert('Fel: ' + err.message);
    }
  };

  const removeGuest = (id: string) => {
    setGuests((prev) => prev.filter((g) => g.id !== id));
  };

  return (
    <section className={wrapperClasses}>
      <MaxWidth className='!max-w-[740px] bg-background p-12 rounded-3xl'>
        <Text elementType='h2' size='headline-2' weight='bold' className='mb-4'>
          Dags att OSA
        </Text>

        <Text size='base' elementType='p' className='mb-8'>
          Du kan anmäla flera personer. Varje person får några helt oviktiga
          frågor.
        </Text>

        <form
          className='space-y-4'
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className='space-y-4'>
            {guests.map((guest, index) => (
              <GuestCard
                key={guest.id}
                guest={guest}
                index={index}
                canRemove={guests.length > 1}
                onUpdate={updateGuest}
                onAnswer={updateAnswer}
                onRemove={removeGuest}
              />
            ))}
          </div>
          <button
            type='button'
            onClick={addGuest}
            className='px-4 py-2 rounded-full border border-black/30'
          >
            + Lägg till person
          </button>

          {/* 🌿 Gemensamt fält */}
          <div className='max-w-xl text-left mt-8'>
            <Text weight='bold' elementType='div'>
              Något annat?
            </Text>
            <Text size='base' className='mb-2' elementType='p'>
              Frivilligt – något som gäller hela sällskapet. Praktiskt, roligt
              eller helt oviktigt.
            </Text>
            <textarea
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={3}
              placeholder='Till exempel: vi kommer lite sent, någon fyller år, eller något helt annat'
              className='w-full rounded-md bg-white border border-black/20 p-2 text-sm focus:outline-none focus:border-black'
            />
          </div>

          <div className='flex justify-center gap-4'>
            <button
              type='submit'
              className='px-6 py-2 rounded-full bg-black text-white'
            >
              Skicka OSA
            </button>
          </div>
        </form>
      </MaxWidth>
    </section>
  );
}
