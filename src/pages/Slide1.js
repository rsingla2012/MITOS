import volcanoEruption from "../components/volcano eruption.png";


export default function Slide1() {
    const styleBackground = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',  
        backgroundImage: {volcanoEruption}
      };

    const styleTextBox = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        height: '20vh',
        width: '80vh',
        borderRadius: 20, 
        border: '2px black solid',
        width: 1124, 
        height: 626,
      };

      const styleText = {
        color: 'black', 
        fontSize: 100, 
        fontFamily: 'Itim', 
        fontWeight: '400', 
        wordWrap: 'break-word',
        position: 'relative'
      };

    
    return (
    <div style={styleBackground}>
        <div style={styleTextBox}>
            <h1 style ={styleText}>Volcano: Lesson 1</h1>
        </div>
    </div>
    );
}
