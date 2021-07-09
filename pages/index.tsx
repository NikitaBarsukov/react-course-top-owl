import React from 'react';
import { P, Button, Htag, Tag } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'> Hello </Htag>
			<Htag tag='h2'> Hello </Htag>
			<Htag tag='h3'> Hello </Htag>
			<Button appearance='primary' arrow='down'>
				Кнопка
			</Button>
			<Button appearance='ghost' arrow='right'>
				Кнопка
			</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Red</Tag>
			<Tag size='m' color='red'>
				Green
			</Tag>
			<Tag color='primary'>Primary</Tag>
		</>
	);
}
