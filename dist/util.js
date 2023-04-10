import { writable } from 'svelte/store';
export function returnProps() {
    return { store: writable({ value: 1, title: '' }) };
}
export function returnProps2() {
    return { store: writable({ value: 1, title: '' }) };
}
