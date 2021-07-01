import React from 'react';
import { Htag } from '../components/Htag/Htag';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'> Hello </Htag>
			<Htag tag='h2'> Hello </Htag>
			<Htag tag='h3'> Hello </Htag>
		</div>
	);
}
