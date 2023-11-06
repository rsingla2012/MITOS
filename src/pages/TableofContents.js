import volcano from "../components/black-volcano-png-25 1.png"
import frontArrow from "../components/front arrow.png";
import volcanoEruption from "../components/volcano eruption.png";




export default function TableofContents() {
    const styleBackground = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',  
        backgroundImage: {volcanoEruption},   

      };
    

    return (
<div style={styleBackground}>  
      <div style={{width: 1124, height: 1588, left: 78, top: 107, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
      <div style={{width: 372, height: 45, left: 454, top: 471, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>..........................</div>
      <img style={{width: 167, height: 166, left: 556, top: 305, position: 'absolute'}} src={volcano} />
      <div style={{left: 356, top: 164, position: 'absolute', color: 'black', fontSize: 75, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Table of Contents</div>
      <div style={{width: 372, height: 45, left: 454, top: 567, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Intro</div>
      <div style={{width: 372, height: 45, left: 454, top: 651, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Page 1: Welcome</div>
      <div style={{width: 486, height: 45, left: 397, top: 735, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Page 2: Volcanologist</div>
      <div style={{width: 486, height: 45, left: 397, top: 819, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Page 3: General Info</div>
      <img style={{width: 160, height: 53, left: 1042, top: 1718, position: 'absolute'}} src={frontArrow} />
      <img style={{width: 160, height: 53, left: 238, top: 1771, position: 'absolute', transform: 'rotate(-180deg)', transformOrigin: '0 0'}} src={frontArrow} />
      <div style={{left: 451, top: 1718, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 50, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Table of Contents</div>
      </div>
    );
}