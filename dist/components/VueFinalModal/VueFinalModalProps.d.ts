import type { PropType, RendererElement } from 'vue';
export declare const vueFinalModalProps: {
    /**
     * @description Set `null | false` to disable teleport.
     * @default `'body'`
     * @example
     * ```js
     * teleportTo: '#modals'
     * ```
     */
    readonly teleportTo: {
        readonly type: PropType<string | false | RendererElement | null>;
        readonly default: "body";
    };
    readonly modalId: {
        readonly type: PropType<import("../..").ModalId>;
        readonly default: undefined;
    };
    readonly modelValue: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly displayDirective: {
        readonly type: PropType<"if" | "show" | "visible">;
        readonly default: "if";
        readonly validator: (prop: any) => boolean;
    };
    readonly hideOverlay: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly overlayTransition: {
        readonly type: PropType<((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps>;
        readonly default: undefined;
    };
    readonly contentTransition: {
        readonly type: PropType<((string & {}) | "vfm-fade" | "vfm-slide-down" | "vfm-slide-up" | "vfm-slide-right" | "vfm-slide-left") | import("vue").TransitionProps>;
        readonly default: undefined;
    };
    readonly overlayClass: {
        readonly type: PropType<any>;
        readonly default: undefined;
    };
    readonly contentClass: {
        readonly type: PropType<any>;
        readonly default: undefined;
    };
    readonly overlayStyle: {
        readonly type: PropType<import("../..").StyleValue>;
        readonly default: undefined;
    };
    readonly contentStyle: {
        readonly type: PropType<import("../..").StyleValue>;
        readonly default: undefined;
    };
    readonly clickToClose: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    readonly escToClose: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    readonly background: {
        readonly type: PropType<"interactive" | "non-interactive">;
        readonly default: "non-interactive";
        readonly validator: (prop: any) => boolean;
    };
    readonly focusTrap: {
        readonly type: PropType<false | import("focus-trap").Options>;
        readonly default: () => {
            allowOutsideClick: boolean;
        };
    };
    readonly lockScroll: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    readonly reserveScrollBarGap: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    readonly zIndexFn: {
        readonly type: PropType<(context: {
            index: number;
        }) => number | undefined>;
        readonly default: ({ index }: {
            index: number;
        }) => number;
    };
    readonly swipeToClose: {
        readonly type: PropType<"none" | "up" | "right" | "down" | "left">;
        readonly default: "none";
        readonly validator: (prop: any) => boolean;
    };
    readonly threshold: {
        readonly type: PropType<number>;
        readonly default: 0;
    };
    readonly showSwipeBanner: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    readonly preventNavigationGestures: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
};
