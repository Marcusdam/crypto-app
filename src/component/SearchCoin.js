// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from "axios";
// import SearchResult from '../pages/SearchResult';

// const SearchCoin = () => {
// const [ coin,  setCoin] = useState ([])
//     const search_url = `https://api.coingecko.com/api/v3/search?query=bitcoin`;

//     useEffect(() =>{
//         const fetchSearch = async () =>{
//             const request = await axios.get(search_url);
//             console.log(request.data)
//             setCoin(request.data)
//         }

//         fetchSearch();
//     })
//   return (
//     <div>
//        {/* <h1></h1> */}

//        <SearchResult coins={coin}/>
      
//     </div>
//   )
// }

// export default SearchCoin
