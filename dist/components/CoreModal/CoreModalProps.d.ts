import type { Options } from 'focus-trap';
import type { PropType, TransitionProps } from 'vue';
import type { ModalId, StyleValue } from '../../Modal';
type AnyString = string & {};
type VfmTransition = 'vfm-fade' | 'vfm-slide-down' | 'vfm-slide-up' | 'vfm-slide-right' | 'vfm-slide-left' | AnyString;
export declare const coreModalProps: {
    /**
     * @description An uniq name for the open/close a modal via vfm.open/vfm.close APIs.
     * @default `undefined`
     * @example Symbol: `Symbol('MyModal')`
     * @example String: `'AUniqString'`
     * @example Number: `300`
     */
    readonly modalId: {
        readonly type: PropType<ModalId>;
        readonly default: undefined;
    };
    /**
     * @description Display the modal or not.
     * @default `undefined`
     * @example
     * ```js
     * const showModal = ref(false)
     * v-model="showModal"
     * ```
     */
    readonly modelValue: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    /**
     * @description Render the modal via `if` or `show`.
     * @default `'if'`
     * @example
     * ```js
     * displayDirective: 'if'
     * ```
     * @example
     * ```js
     * displayDirective: 'show'
     * ```
     */
    readonly displayDirective: {
        readonly type: PropType<"if" | "show" | "visible">;
        readonly default: "if";
        readonly validator: (prop: any) => boolean;
    };
    /**
     * @description Hide the overlay or not.
     * @default `undefined`
     * @example
     * ```js
     * hideOverlay="true"
     * ```
     */
    readonly hideOverlay: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    /**
     * @description Customize the overlay transition.
     * @default `undefined`
     */
    readonly overlayTransition: {
        readonly type: PropType<VfmTransition | TransitionProps>;
        readonly default: undefined;
    };
    /**
     * @description Customize the content transition.
     * @default `undefined`
     */
    readonly contentTransition: {
        readonly type: PropType<VfmTransition | TransitionProps>;
        readonly default: undefined;
    };
    /**
     * @description Bind class to vfm__overlay.
     * @default `undefined`
     */
    readonly overlayClass: {
        readonly type: PropType<any>;
        readonly default: undefined;
    };
    /**
     * @description Bind class to vfm__content.
     * @default `undefined`
     */
    readonly contentClass: {
        readonly type: PropType<any>;
        readonly default: undefined;
    };
    /**
     * @description Bind style to vfm__overlay.
     * @default `undefined`
     */
    readonly overlayStyle: {
        readonly type: PropType<StyleValue>;
        readonly default: undefined;
    };
    /**
     * @description Bind style to vfm__content.
     * @default `undefined`
     */
    readonly contentStyle: {
        readonly type: PropType<StyleValue>;
        readonly default: undefined;
    };
    /**
     * @description Is it allow to close the modal by clicking the overlay.
     * @default `true`
     */
    readonly clickToClose: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /**
     * @description Is it allow to close the modal by keypress `esc`.
     * @default `true`
     */
    readonly escToClose: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /**
     * @description Is it allow to click outside of the vfm__content when the modal is opened
     * @default `'non-interactive'`
     */
    readonly background: {
        readonly type: PropType<"interactive" | "non-interactive">;
        readonly default: "non-interactive";
        readonly validator: (prop: any) => boolean;
    };
    /**
     * @description
     * * Use `{ disabled: true }` to disable the focusTrap.
     * * Checkout the createOptions type here https://github.com/focus-trap/focus-trap for more.
     * @default `{ allowOutsideClick: true }`
     */
    readonly focusTrap: {
        readonly type: PropType<false | Options>;
        readonly default: () => {
            allowOutsideClick: boolean;
        };
    };
    /**
     * @description Lock body scroll or not when the modal is opened.
     * @default `true`
     */
    readonly lockScroll: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /**
     * @description Creates a padding-right when scroll is locked to prevent the page from jumping
     * @default `true`
     */
    readonly reserveScrollBarGap: {
        readonly type: PropType<boolean>;
        readonly default: true;
    };
    /**
     * @description Define how to increase the zIndex when there are nested modals
     * @default `({ index }) => 1000 + 2 * index`
     */
    readonly zIndexFn: {
        readonly type: PropType<(context: {
            index: number;
        }) => number | undefined>;
        readonly default: ({ index }: {
            index: number;
        }) => number;
    };
    /**
     * @description The direction of swiping to close the modal
     * @default `none`
     * @example
     * Set swipeToClose="none" to disable swiping to close
     * ```js
     * swipeToClose="none"
     * ```
     */
    readonly swipeToClose: {
        readonly type: PropType<"none" | "up" | "right" | "down" | "left">;
        readonly default: "none";
        readonly validator: (prop: any) => boolean;
    };
    /**
     * @description Threshold for swipe to close
     * @default `0`
     */
    readonly threshold: {
        readonly type: PropType<number>;
        readonly default: 0;
    };
    /**
     * @description If set `:showSwipeBanner="true"`, only allow clicking `swipe-banner` slot to swipe to close
     * @default `undefined`
     * @example
     * ```js
     * swipeToClose="right"
     * :showSwipeBanner="true"
     * ```
     * ```html
     * <VueFinalModal
     *   ...
     *   swipeToClose="right"
     *   :showSwipeBanner="true"
     * >
     *   <template #swipe-banner>
     *     <div style="position: absolute; height: 100%; top: 0; left: 0; width: 10px;" />
     *   </template>
     *   ...modal content
     * </VueFinalModal>
     * ```
     */
    readonly showSwipeBanner: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
    /**
     * @description When set `:preventNavigationGestures="true"`, there will be two invisible bars for prevent navigation gestures including swiping back/forward on mobile webkit. For example: Safari mobile.
     * @default `undefined`
     * @example
     * Set preventNavigationGestures="true" to prevent Safari navigation gestures including swiping back/forward.
     * ```js
     * :preventNavigationGestures="true"
     * ```
     */
    readonly preventNavigationGestures: {
        readonly type: PropType<boolean>;
        readonly default: undefined;
    };
};
export {};
