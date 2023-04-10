import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        store?: import("svelte/store").Writable<{
            value: number;
            title: string;
        }> | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ComponentProps = typeof __propDef.props;
export type ComponentEvents = typeof __propDef.events;
export type ComponentSlots = typeof __propDef.slots;
export default class Component extends SvelteComponentTyped<ComponentProps, ComponentEvents, ComponentSlots> {
}
export {};
