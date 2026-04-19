import { NextResponse } from 'next/server';
import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { HelpersBookTemplate } from '@/components/HelpersBookTemplate';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const buffer = await renderToBuffer(
      <HelpersBookTemplate data={data} />
    );

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Design_Help_Desk_Brief.pdf"',
      },
    });
  } catch (error) {
    console.error('PDF Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
