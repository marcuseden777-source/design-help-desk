export default function AtrellisLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body { background: #F1F5F9 !important; }
        .bg-elements { display: none !important; }
        main { display: block !important; }
      `}</style>
      {children}
    </>
  );
}
