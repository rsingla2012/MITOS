import volcanoEruption from "../../components/volcano eruption.png";


export default function VolcanoIntroduction() {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', backgroundImage: 'url(https://via.placeholder.com/1280x832)'}}>
    <div style={{width: 1124, height: 626, left: 78, top: 103, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
    <img style={{width: 331, height: 385, left: 717, top: 240, position: 'absolute'}} src={volcanoEruption} />
    <div style={{width: 419.38, height: 188, left: 221, top: 339, position: 'absolute'}}>
        <div style={{width: 357.20, height: 188, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 20, border: '2px black solid'}} />
        <div style={{width: 255.97, height: 121.48, left: 50.62, top: 33.26, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 50, fontFamily: 'Itim', fontWeight: '400', wordWrap: 'break-word'}}>Did you say volcanoes!?</div>
    </div>
</div>
    );
}