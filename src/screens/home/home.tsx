import { useEffect, useState } from 'react';
import axios from 'axios';
import HZ_Navbar from "../../components/HZ_Navbar";
import { Height } from '@mui/icons-material';
import { height } from '@mui/system';

function Home() {

  const [ hotelData, setHotelData ] = useState<any>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://tripadvisor-scraper.p.rapidapi.com/hotels/search',
        params: {query: 'new york'},
        headers: {
          'x-rapidapi-key': 'b35d157dbemshe2afd87d9d90646p18ec82jsnf32412a452a5',
          'x-rapidapi-host': 'tripadvisor-scraper.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setHotelData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <HZ_Navbar
        title="Hotel Management System"
        links={[
          { to: "/customerlogin", label: "Customer Login" },
          { to: "/managerlogin", label: "Manager Login" },
          { to: "/stafflogin", label: "Staff Login" },
          { to: "/adminlogin", label: "Admin Login" },
        ]}
      />
      {hotelData.map((e:any,i:any)=>(
        <img className='w-100' key={i} src={e.thumbnail_url}/>
      ))}
    </>
  );
}

export default Home;
