import { GetStaticProps } from 'next';
import CountryWrapper from '../components/CountryWrapper/CountryWrapper'
import SearchAndFilter from '../components/SearchAndFilter/SearchAndFilter'
import { ICountries, ICountriesArray } from '../interfaces/intrefaces';

export const getStaticProps:GetStaticProps = async () => {
	const res = await fetch("https://restcountries.com/v3.1/all");
	const data = await res.json();

	return {
		props: {
			countries: data,
		},
	};
	
};



export default function Home({countries}:ICountriesArray) {
  return (
    <>
      <SearchAndFilter/>
      <CountryWrapper countries= {countries}/>
    </>
  )
}
