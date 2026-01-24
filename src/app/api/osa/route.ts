import {NextResponse} from 'next/server';
import type {Guest} from '@/lib/types/form';

interface OsaRequestBody {
  guests: Guest[];
  additionalInfo: string;
}

export async function POST(req: Request) {
  try {
    const body: OsaRequestBody = await req.json();

    if (!body.guests || body.guests.length === 0) {
      return NextResponse.json({error: 'Ingen gäster angivna'}, {status: 400});
    }

    // Skapa en rad per gäst
    const results = await Promise.all(
      body.guests.map(async (guest) => {
        const res = await fetch(
          `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fields: {
                Name: guest.name,
                Attending: guest.attending ?? true,
                Allergies: guest.allergies || '',
                Questions: JSON.stringify(guest.questions),
                Answers: JSON.stringify(guest.answers),
                AdditionalInfo: body.additionalInfo || '',
                // SubmittedAt: new Date().toISOString(),
              },
            }),
          }
        );

        const data = await res.json();
        if (!res.ok) throw new Error(data.error?.message || 'Airtable error');
        return data;
      })
    );

    return NextResponse.json({message: 'OSA sparad', results});
  } catch (err: any) {
    return NextResponse.json({error: err.message}, {status: 500});
  }
}

// import {NextResponse} from 'next/server';

// // Typ för request body
// interface OsaRequestBody {
//   name: string;
//   attending: boolean;
// }

// export async function POST(req: Request) {
//   try {
//     const body: OsaRequestBody = await req.json();

//     if (!body.name) {
//       return NextResponse.json({error: 'Name is required'}, {status: 400});
//     }
//     console.log('Base:', process.env.AIRTABLE_BASE_ID);
//     console.log('Table:', process.env.AIRTABLE_TABLE_NAME);
//     console.log('Token present:', !!process.env.AIRTABLE_API_KEY);

//     const airtableRes = await fetch(
//       `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
//       {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fields: {
//             Name: body.name,
//             Attending: body.attending,
//           },
//         }),
//       }
//     );

//     const data = await airtableRes.json();

//     if (!airtableRes.ok) {
//       return NextResponse.json(
//         {error: data.error?.message || 'Airtable error'},
//         {status: 500}
//       );
//     }

//     return NextResponse.json({message: 'OSA sparad', data});
//   } catch (err: any) {
//     return NextResponse.json(
//       {error: err.message || 'Unknown error'},
//       {status: 500}
//     );
//   }
// }
