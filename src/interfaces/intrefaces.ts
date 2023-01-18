export interface ICountries {
	capital: string[];
	continents: string[];
	name: {
		common: string;
		nativeName: object;
	};
	region: string;
	subregion: string;
	population: number;
	currencies: object;
	languages: object;
	borders?: string[];
	flags: {
		png: string;
	};
	tld: string[];
}

export interface ICountriesArray {
	countries: ICountries[];
}
