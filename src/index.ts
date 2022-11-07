// import type * as CSS from 'csstype'

// export interface CSSProperties extends CSS.Properties<string | number> {}

// type InternalTheme =
//   | 'tag' // tag
//   | 'tiktok' // 抖音
//   | 'fill-tag' // tag filled with background

// const colors = {
//   blue: '#3B82F6',
//   red: '#EF4444',
//   green: '#10B981',
//   gray: '#6B7280',
//   white: '#FFF',
//   yellow: '#F59E0B',
// }

// type logType = 'info' | 'success' | 'error' | 'warning'

// function typedColor(type: logType = 'info') {
//   switch (type) {
//     case 'info':
//       return colors.blue
//     case 'error':
//       return colors.red
//     case 'success':
//       return colors.green
//     case 'warning':
//       return colors.yellow
//     default:
//       return colors.blue
//   }
// }

// const fillTagTheme = {
//   title: {
//     color: colors.white,
//     paddingLeft: '4px',
//     borderRadius: '4px 0 0 4px',
//     background: colors.gray,
//   } as CSSProperties,
//   desc: {
//     color: colors.white,
//     paddingRight: '4px',
//     borderRadius: '0 4px 4px 0',
//     background: colors.blue,
//   } as CSSProperties,
// }

// const tag = {}

// const tiktok = {}

// const styledConsole = {
//   info() {},
//   success() {},
//   error() {},
//   warning() {},
// }

// interface Options {
//   theme: InternalTheme
// }

// class StyledConsole {
//   private theme: InternalTheme

//   constructor(options: Options) {
//     this.theme = options.theme || 'fill-tag'
//   }

//   config(options: Options) {
//     this.theme = options.theme
//   }

//   info() {}
// }

// type printArgs =
//   | {
//       text: string | number
//       style: CSSProperties
//     }
//   | string

// function print(...args: printArgs[]) {
//   console.log(args, 'args')
//   if (args.length === 1) {
//     //
//     if (typeof args[0] === 'string') {
//       console.log(`%c${args[0]}`)
//     }
//   } else if (args.length > 1) {
//   }
// }
// print()

export {}
