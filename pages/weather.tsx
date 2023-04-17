import WeatherPart from '@/components/weatherPart';
import Header from '@/components/header';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="wrapper">
        <Header />
        <WeatherPart />
      </div>
    </main>
  );
}
