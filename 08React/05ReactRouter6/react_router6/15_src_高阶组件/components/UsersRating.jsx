// export const UsersRating = () => {
//     const isConnected = false
  
//     if(!isConnected) {
//       return (
//         <p>You don't have access !</p>
//       )
//     }
  
//     return (
//       <div>
//         <p>UsersRating</p>
//       </div>
//     )
//   }

import {withAuthentication} from './HOC'
export const UsersRating  = withAuthentication(() => {
    return (
      <div>
        <p>UsersRating</p>
      </div>
    )
  })