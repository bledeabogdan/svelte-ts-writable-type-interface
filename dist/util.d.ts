type Test<T> = {
    value: T;
    title: string;
};
interface Test2<T> {
    value: T;
    title: string;
}
export declare function returnProps(): {
    store: import("svelte/store").Writable<Test<number>>;
};
export declare function returnProps2(): {
    store: import("svelte/store").Writable<Test2<number>>;
};
export {};
