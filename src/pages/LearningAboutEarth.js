import earth from "../components/earth character.png";
import fire from "../components/QKPN 1.png";


export default function LearningAboutEarth() {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: `url(https://via.placeholder.com/1280x832)`}}>
            <div style={{width: 1124, height: 626, left: 78, top: 103, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
            <img style={{width: 469, height: 269, left: 603, top: 240, position: 'absolute'}} src={fire} />
            <img style={{width: 212, height: 198, left: 236, top: 433, position: 'absolute'}} src={earth} />
            <div style={{width: 300, height: 161, left: 192, top: 240, position: 'absolute'}}>
                <div style={{width: 300, height: 118, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
                <div style={{width: 230, left: 35, top: 38, position: 'absolute', color: 'black', fontSize: 35, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>We’ll be learning about volcanoes today!</div>
            </div>
        </div>
    );
}