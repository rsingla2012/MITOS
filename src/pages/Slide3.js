import frontArrow from "../components/front arrow.png";
import volcanoEruption from "../components/volcano eruption.png";


export default function Slide3() {
    const styleBackground = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',  
        backgroundImage: {volcanoEruption},   

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
        position: 'relative',
        justifyContent: "center", alignItems:'center',
        display: "flex",
      };

      const styleHeader = {
        color: 'black', 
        fontSize: 100, 
        fontFamily: 'Itim', 
        fontWeight: '400', 
        wordWrap: 'break-word',
        
      };

    return (
    <div style={styleBackground}>
        <div style={styleTextBox}>
            <div >
                <h1 style = {styleText}>Instructions</h1>
                <h1> At the center bottom, you will see page numbers. <br></br>

Intro shows you’re on the introductory page!</h1>
            </div>
            
        </div>
    </div>

    );
}