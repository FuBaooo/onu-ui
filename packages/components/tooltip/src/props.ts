import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import type { Placement, TriggerType } from '../../types'

export const toolTipProps = {
  /** Whether the popup is visible v-model */
  popupVisible: {
    type: Boolean,
    default: undefined,
  },
  /** Whether the popup is visible by default (uncontrolled mode) */
  defaultPopupVisible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as PropType<'Dark' | 'Light'>,
    default: 'Dark',
  },
  content: String,
  /** trigger type: 'hover','click','focus','contextMenu' */
  trigger: {
    type: [String, Array] as PropType<TriggerType | TriggerType[]>,
    default: 'hover',
  },
  /**
   * Popup position
   * @values
   * 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
   * @default 'top'
   */
  position: {
    type: String as PropType<Placement>,
    default: 'top',
  },
  /**
   * The class name of the popup content
   */
  contentClass: {
    type: String,
  },
  /**
   * The style of the popup content
   */
  contentStyle: {
    type: Object as PropType<CSSProperties>,
  },
  backgroundColor: String,
  /**
   * The class name of the popup arrow
   */
  arrowClass: {
    type: String,
  },
  /**
   * The style of the popup arrow
   */
  arrowStyle: {
    type: Object as PropType<CSSProperties>,
  },
  /**
   * Mount container for pop-up box
   */
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement | undefined>,
  },

  /** Whether to update the position of the popup when the container is scrolled */
  updateAtScroll: {
    type: Boolean,
    default: false,
  },
}

export const toolTipEmits = {
  'update:popupVisible': (_visible: boolean) => true,
  'popupVisibleChange': (_visible: boolean) => true,
}

export type ToolTipEmits = typeof toolTipEmits
export type OToolTipEmits = ExtractPropTypes<typeof toolTipProps>
