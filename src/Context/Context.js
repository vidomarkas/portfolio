// import React, { createContext, useState, useEffect } from "react";

// export const Context = createContext({});

// export const ContextProvider = (props) => {
//   const [data, setData] = useState([]);

//   const [loading, setLoading] = useState(true);

//   const fetchData = () => {
//     console.log("fetching Data");
//     fetch(
//       "https://vdomarkas.com/wp/wp-json/contact-form-7/v1/contact-forms/162/feedback"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.log("Error fetching the data. ", err);
//       });
//   };

//   useEffect(() => {
//     setLoading(true);
//     fetchData();
//     // eslint-disable-next-line
//   }, []);

//   if (!loading) {
//     console.log("data", data);
//     return (
//       <Context.Provider value={{ data }}>{props.children}</Context.Provider>
//     );
//   } else {
//     return null;
//   }
// };
