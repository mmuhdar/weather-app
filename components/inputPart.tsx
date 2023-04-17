import { useState } from 'react';
import { useRouter } from 'next/router';

export default function InputPart() {
  const [city, setCity] = useState('');
  const router = useRouter();
  const submitHandler = (): void => {
    router.push({
      pathname: '/weather',
      query: { city },
    });
  };

  return (
    <section className="input-part">
      <p className="info-txt"></p>
      <div className="content">
        <input
          type="text"
          placeholder="Enter city name"
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <div className="separator"></div>
        <button onClick={() => submitHandler()}>Submit</button>
      </div>
    </section>
  );
}
