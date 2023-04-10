import { writable } from 'svelte/store';

type Test<T> = {
	value: T;
	title: string;
};

interface Test2<T> {
	value: T;
	title: string;
}

export function returnProps() {
	return { store: writable<Test<number>>({ value: 1, title: '' }) };
}

export function returnProps2() {
	return { store: writable<Test2<number>>({ value: 1, title: '' }) };
}
