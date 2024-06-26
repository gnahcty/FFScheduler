export default {
  root: ({ props }) => ({
    class: [
      'inline-flex relative',
      {
        'opacity-60 select-none pointer-events-none cursor-default': props.disabled
      },
      { '[&>input]:pr-10': props.toggleMask }
    ]
  }),
  panel: {
    class: [
      'hidden',
      // Spacing
      'p-5',

      // Shape
      'border-0  ',
      'shadow-md rounded-md',

      // Colors
      'bg-black ',
      'text-surface-700  ',
      ' '
    ]
  },
  meter: {
    class: [
      'hidden',
      // Position and Overflow
      'overflow-hidden',
      'relative',

      // Shape and Size
      'border-0',
      'h-3',

      // Spacing
      'mb-2',

      // Colors
      'bg-surface-100  '
    ]
  },
  meterlabel: ({ instance }) => ({
    class: [
      'hidden',

      // Size
      'h-full',

      // Colors
      {
        'bg-red-500  ': instance?.meter?.strength == 'weak',
        'bg-orange-500  ': instance?.meter?.strength == 'medium',
        'bg-green-500  ': instance?.meter?.strength == 'strong'
      },

      // Transitions
      'transition-all duration-1000 ease-in-out'
    ]
  }),
  showicon: {
    class: ['absolute top-1/2 right-3 -mt-2 z-10', 'text-surface-600  ']
  },
  hideicon: {
    class: ['absolute top-1/2 right-3 -mt-2 z-10', 'text-surface-600  ']
  },
  input: {
    root: ({ props, context, parent }) => ({
      class: [
        // Font
        'font-sans leading-none',

        // Flex
        { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

        // Spacing
        'm-0',
        {
          'px-4 py-4': props.size == 'large',
          'px-2 py-2': props.size == 'small',
          'p-3': props.size == null
        },
        'w-full',

        // Shape
        { 'rounded-md': parent.instance.$name !== 'InputGroup' },
        {
          'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup'
        },
        { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
        { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },

        // Colors
        'text-surface-600  ',
        'placeholder:text-surface-400  ',
        'bg-surface-0  ',
        'border',
        { 'border-surface-300  ': !parent.props.invalid },

        // Invalid State
        { 'border-red-500  ': parent.props.invalid },

        // States
        {
          //   'hover:border-primary-500  ':
          //     !context.disabled && !parent.props.invalid,
          'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500/50   focus:z-10':
            !context.disabled,
          'opacity-60 select-none pointer-events-none cursor-default': context.disabled
        },

        // Misc
        'appearance-none',
        'transition-colors duration-200',
        'ring-gray-100',
        'ring-1',
        'shadow-sm'
      ]
    })
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0'
  }
}
