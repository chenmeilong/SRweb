// export const TopBook = () => {
//     const isConnected = false
  
//     if(!isConnected) {
//       return (
//         <p>You don't have access !</p>
//       )
//     }
  
//     return (
//       <div>
//         <p>Top Book</p>
//       </div>
//     )
//   }
import {withAuthentication} from './HOC'
export const TopBook = withAuthentication(() => {
    return (
      <div>
        <p>Top Book</p>
      </div>
    )
  })
  