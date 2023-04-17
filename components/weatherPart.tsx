import Image from 'next/image';
import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { MdOutlineLocationOn } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import sunny from '../public/clear.svg';
import rain from '../public/rain.svg';
import storm from '../public/storm.svg';
import cloud from '../public/cloud.svg';
import snow from '../public/snow.svg';
import haze from '../public/haze.svg';
import temperature from '../public/tempe.png';
import raindrop from '../public/raindrop.png';

const fetcher = (url: string, city: any) =>
  axios.post(url, { city }).then((res) => res.data);

export default function WeatherPart() {
  const { city } = useRouter().query;
  const localUrl = 'http://localhost:3000/history';
  // const productionUrl = 'https://weather-app-server-elwt.vercel.app/history';
  const railwayUrl = 'https://weather-app-server-production-5177.up.railway.app/history'

  const { data, isLoading, error } = useSWR(railwayUrl, (url) =>
    fetcher(url, city)
  );
  const response = data?.data?.response;
  const weatherCode = response?.current?.condition?.code;

  const weather = () => {
    switch (weatherCode) {
      case 1000:
        return sunny;
      case 1003 || 1006 || 1009:
        return cloud;
      case 1030 || 1135 || 1147:
        return haze;
      case 1063 ||
        1069 ||
        1072 ||
        1150 ||
        1153 ||
        1168 ||
        1171 ||
        1180 ||
        1183 ||
        1186 ||
        1189 ||
        1192 ||
        1195 ||
        1198 ||
        1201 ||
        1204 ||
        1207 ||
        1240 ||
        1243 ||
        1246 ||
        1249 ||
        1252 ||
        1273:
        return rain;
      case 1087 || 1276:
        return storm;
      default:
        return rain;
    }
  };

  return (
    <section className="weather-part flex justify-center items-center">
      <Image
        itemType="image/svg+xml"
        width={100}
        height={100}
        src={weather()}
        alt="Weather Icon"
      />
      <div className="temp">
        <span className="numb">{response?.current?.temp_c}</span>
        <span className="deg">°</span>C
      </div>
      <div className="weather">{response?.current?.condition?.text}</div>
      <div className="location flex justify-center items-center">
        <MdOutlineLocationOn />
        <span>
          {response?.location?.name}, {response?.location?.country}
        </span>
      </div>
      <div className="bottom-details">
        <div className="column feels">
          <Image width={30} height={30} src={temperature} alt="feelslike" />
          <div className="details">
            <div className="temp">
              <span className="numb-2">{response?.current?.feelslike_c}</span>
              <span className="deg">°</span>C
            </div>
            <p>Feels like</p>
          </div>
        </div>
        <div className="column humidity">
          <Image width={25} height={25} src={raindrop} alt="hummidity" />
          <div className="details">
            <span>{response?.current?.humidity}%</span>
            <p>Humidity</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
