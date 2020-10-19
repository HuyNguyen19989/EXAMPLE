import React, {useState} from 'react';

const Test = () => {
   let [responseObj, setResponseObj] = useState({});

   fetch (`localhost/backend/public/api/books/9`)
   .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })

   return (
       <div>
           {JSON.stringify(responseObj)}
       </div>
   )
}
export default Test;