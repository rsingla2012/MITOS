import earth from "../components/earth character.png";
import fire from "../components/QKPN 1.png";
import BackgroundImage from "../components/lava background.png"


export default function HelloStudents3() {
    
     return (
    <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: 'url(https://via.placeholder.com/1280x832)'}}>
    <div style={{width: 1124, height: 626, left: 78, top: 104, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
    <img style={{width: 469, height: 269, left: 611, top: 242, position: 'absolute'}} src={fire} />
    <div style={{width: 300, height: 161, left: 200, top: 183, position: 'absolute'}}>
        <div style={{width: 300, height: 150, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
        <div style={{width: 230, left: 35, top: 38, position: 'absolute', color: 'black', fontSize: 25, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Click the button below to see the volcano in action!</div>
    </div>
    <img style={{width: 257, height: 305, left: 235, top: 344, position: 'absolute'}} src={earth} />
    
</div>
        
     );
}

// import earth from "../components/earth character.png";
// import fire from "../components/QKPN 1.png";
// import BackgroundImage from "../components/lava background.png";

// export default function HelloStudents2() {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         position: "relative",
//         backgroundImage: 'url(https://via.placeholder.com/1280x832)',
//       }}
//     >
//       <div
//         style={{
//           width: "87.5%",
//           height: "75.24%",
//           left: "6.09375%",
//           top: "12.5%",
//           position: "absolute",
//           background: "white",
//           borderRadius: "2.34%",
//           border: "2px black solid",
//         }}
//       />
//       <img
//         style={{
//           width: "36.6%",
//           height: "26.36%",
//           left: "47.734375%",
//           top: "29.09%",
//           position: "absolute",
//         }}
//         src={fire}
//       />
//       <div
//         style={{
//           width: "23.43%",
//           height: "12.28%",
//           left: "15.625%",
//           top: "14.9%",
//           position: "absolute",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "73.47%",
//             left: "0",
//             top: "0",
//             position: "absolute",
//             background: "white",
//             borderRadius: "2.34%",
//             border: "2px black solid",
//           }}
//         />
//         <div
//           style={{
//             width: "76.66667%",
//             left: "11.66667%",
//             top: "21.67832%",
//             position: "absolute",
//             color: "black",
//             fontSize: "5.46875vw",
//             fontFamily: "Itim",
//             fontWeight: "400",
//             wordWrap: "break-word",
//           }}
//         >
//           Let’s learn about volcanoes!
//         </div>
//       </div>
//       <img
//         style={{
//           width: "20.078125%",
//           height: "23.264866%",
//           left: "18.359375%",
//           top: "41.585766%",
//           position: "absolute",
//         }}
//         src={earth}
//       />
//     </div>
//   );
// }
