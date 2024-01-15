// /* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";

// const TypeEffect = ({ text, speed = 1000 }) => {
//   const [typedText, setTypedText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const intervalId = setInterval(() => {
//       setTypedText((value) => value + text[index]);
//       index++;
//       if (index === text.length) {
//         clearInterval(intervalId);
//       }
//     }, speed);

//     return () => clearInterval(intervalId);
//   }, [text, speed]);

//   return <div className="typing-effect">{typedText}</div>;
// };

// export default TypeEffect;
