import earth from "../../components/earth character.png";
import fire from "../../components/QKPN 1.png";
import BackgroundImage from "../../components/lava background.png"
import "./HelloStudents.css";


export default function HelloStudents() {
     return (
    <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: 'url(https://via.placeholder.com/1280x832)'}}>
    <div style={{width: 1124, height: 626, left: 78, top: 104, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
    <img style={{width: 469, height: 269, left: 611, top: 242, position: 'absolute'}} src={fire} />
    <div style={{width: 300, height: 161, left: 200, top: 183, position: 'absolute'}}>
        <div style={{width: 300, height: 118, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
        <div style={{width: 230, left: 35, top: 38, position: 'absolute', color: 'black', fontSize: 35, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Hello students!</div>
    </div>
    <img style={{width: 257, height: 305, left: 235, top: 344, position: 'absolute'}} src={earth} />
    
</div>
        
     );
}