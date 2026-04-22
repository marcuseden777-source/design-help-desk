import { NextResponse } from 'next/server';
import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import { AtrellisPdfTemplate } from '@/components/AtrellisPdfTemplate';

export async function GET() {
  try {
    const buffer = await renderToBuffer(<AtrellisPdfTemplate />);

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Atrellis_Partnership_Proposal.pdf"',
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Atrellis PDF error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
