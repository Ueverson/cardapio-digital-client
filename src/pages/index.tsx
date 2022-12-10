import type {NextPage} from 'next';
import Head from 'next/head';
import Cardapio from '../components/Cardapio';
import Header from '../components/Header';
import {CardapioCards} from '../components/Cardapio';
import {Sections} from '../components/Cardapio';
import CartIcon from '../components/CartIcon';
const Home: NextPage = () => {
	return (
		<div className="bg-black-500">
			<Head>
				<title>Cardápio Digital</title>
			</Head>
			<header>
				<Header title="RockLand Bar" subtitle="Desde 1958"/>
			</header>
			<main>
				<div className="flex justify-center whitespace-nowrap overflow-hidden">
					<Sections/>
				</div>
				<div className="flex justify-center align-middle items-center">
					<CardapioCards/>
				</div>
				<Cardapio/>
				<CartIcon/>
			</main>
		</div>
	);
};

export default Home;
