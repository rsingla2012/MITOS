import frontArrow from "../components/front arrow.png";
import volcanoEruption from "../components/volcano eruption.png";
import table from  "../components/table of contents.png"
import sound from  "../components/sound icon.png"


export default function Slide4() {
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
            <div style={{styleText}}>
                <h1 style={styleText}>Instructions <br></br> </h1>
                <h1 style = {{justifyContent: "center", alignItems:'center'}}>Click the   
                <img style={{width: 50, height: 34, position: 'relative', paddingLeft: 10, paddingRight: 10}} src={table} />
                icon on the top right to see the <br></br> table of contents. <br></br> <br></br> Click the
                <img style={{width: 50, height: 34, position: 'relative', paddingLeft: 10, paddingRight: 10}} src={sound} />
                icon on the top left to hear <br></br> the voiceover. 
                </h1>
            </div>
        </div>
    </div>

    );
}