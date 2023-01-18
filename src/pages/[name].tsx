/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "../styles/Details.module.scss"
import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from "next";
import { ICountries, ICountriesArray } from "../interfaces/intrefaces";
import { ParsedUrlQuery } from 'querystring'
import Link from "next/link";
import ArrowIcon from '../assets/arrow.svg'
import BorderCountries from "../components/BorderCountries/BorderCountries";

interface IParams extends ParsedUrlQuery {
    slug: string
}
export const getStaticPaths:GetStaticPaths = async () => {
	const res = await fetch("https://restcountries.com/v3.1/all");
	const data = await res.json();

	const paths = Object.values(data).map((items:any) => {
		return {
			params: { name: items.name.common.toLowerCase() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps:GetStaticProps = async (context) => {
	const {name} = context.params as IParams;
	const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	const data = await res.json();

	return {
		props: { countries: data },
	};
};

const Details = ({countries}:ICountriesArray) => {
	const currency =Object.values(Object.values(countries[0].currencies)[0])[0] as string
	const nativeName =Object.values(Object.values(countries[0].name.nativeName)[0])[1] as string
	
  return (
    <div className={styles.main}>
		
		<Link href='/' >
			<ArrowIcon className={styles.icon}/>
			Back
		</Link>
		
		<div className={styles.wrapper}>
			<img className={styles.image}  src={countries[0].flags.png} alt={countries[0].name.common}/>
			<div className={styles.textWrapper}>
				<h2 className={styles.mainTitle}>{countries[0].name.common}</h2>
				<div className={styles.info}>
					<div>
						<p className={styles.title}>Native Name: <span className={styles.subtitle}>{nativeName}</span> </p>
						<p className={styles.title}>Population: <span className={styles.subtitle}>{new Intl.NumberFormat().format(countries[0].population)}</span> </p>
						<p className={styles.title}>Region: <span className={styles.subtitle}>{countries[0].region}</span> </p>
						<p className={styles.title}>Sub region: <span className={styles.subtitle}>{countries[0].subregion}</span> </p>
						<p className={styles.title}>Capital: <span className={styles.subtitle}>{countries[0].capital}</span> </p>
					</div>
					<div>
						<p className={styles.title}>Top Level Domain: <span className={styles.subtitle}>{countries[0].tld[0]}</span> </p>
						<p className={styles.title}>Currencies: <span className={styles.subtitle}>{currency}</span> </p>
						<p className={styles.title}>Languages: <span className={styles.subtitle}>{Object.values(countries[0].languages).join(', ')}</span> </p>
				
					</div>
        		</div>
				{countries[0].borders && <div className={styles.borderInfo}>
					<p className={styles.title}>Border Countries: </p>
					<div className={styles.borderWrapper}>
						{countries[0].borders?.map((name,index)=> {
							return <BorderCountries key={index} name={name}/>
						})}
					</div>
				</div> }
			</div>
		</div>

	</div>
  )
}

export default Details