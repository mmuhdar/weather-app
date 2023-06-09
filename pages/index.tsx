import InputPart from '@/components/inputPart';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="wrapper">
        <Header />
        <InputPart />
      </div>
    </main>
  );
}
