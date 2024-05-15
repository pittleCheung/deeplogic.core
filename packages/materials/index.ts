// 获取当前目录下的所有组件
// import { exportComponents } from './components/_utils/utils';

// const requireComponent = require.context('./components', true, /\.jsx$/);
// // 获取当前目录下的所有组件并转换为对象导出


// 获取当前目录下的所有组件并转换为对象导出
// const components = exportComponents(requireComponent);

// // 单独导出 Page 组件
// export const { Page } = components;

// export default { ...components, Text: components?.TypographyText };

// eager为false懒加载
// export const exportComponents =   (componentNames: any, requireComponent:any) => {
//   return  componentNames.reduce?.(
//     async (acc: Record<string, any>, path: string) => {
//       if(acc instanceof Promise){
//         acc = await acc;
//       }
//       const component = await requireComponent[path]()
//       const paths = path
//         .replace(/^.\//, "") // 删除开头的 ./
//         .replace(/\/index/, "") // 删除 /index
//         .replace(/\.jsx?$/, "") // 删除文件后缀名
//         .split("/") // 拆分路径
//         .map((name) => name[0].toUpperCase() + name.slice(1)) // 首字母大写
//       const name = paths
//         .map((n) => {
//           // 处理驼峰命名
//           if (n.includes(".")) {
//             const [left, right] = n.split(".")
//             return `${left}${right[0].toUpperCase()}${right.slice(1)}`
//           } else {
//             return n
//           }
//         })
//         ?.at(-1)! // 获取最后一个

//       // 如果组件存在，则添加到组件列表中，否则从组件列表中删除
//       if (component) {
//         acc[name] = component.default
//       } else {
//         delete acc[name]
//       }

//       return acc
//     },
//     {},
//   )
// }


export const handleComponents = (requireComponent:any) => {
       let newObj:any = {}
       for(let prop in requireComponent){
         const item = requireComponent[prop]
         const paths = prop
           .replace(/^.\//, "") // 删除开头的 ./
           .replace(/\/index/, "") // 删除 /index
           .replace(/\.jsx?$/, "") // 删除文件后缀名
           .split("/") // 拆分路径
           .map((name) => name[0].toUpperCase() + name.slice(1)) // 首字母大写
         const name = paths
           .map((n) => {
             // 处理驼峰命名
             if (n.includes(".")) {
               const [left, right] = n.split(".")
               return `${left}${right[0].toUpperCase()}${right.slice(1)}`
             } else {
               return n
             }
           })
           ?.at(-1)! // 获取最后一个
         newObj[name] = item.default
       }
       return newObj
}

// console.time()

const requireComponent = import.meta.glob("./components/**/*.jsx",{ eager: true})


const components = handleComponents(requireComponent)


// console.log(
//   "requireComponent====>",
//   Object.keys(requireComponent),
//   requireComponent,
//   components,
// )

// console.timeEnd()




// // 单独导出 Page 组件
export const { Page } = components;


export default { ...components, Text: components?.TypographyText };

