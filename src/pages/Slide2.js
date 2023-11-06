import frontArrow from "../components/front arrow.png";
import volcanoEruption from "../components/volcano eruption.png";



export default function Slide2() {
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
    ;

    return (
    <div style={styleBackground}>
        <div style={styleTextBox}>
            <div style={{styleText}}>
                <h1 style={styleText}>Instructions <br></br> </h1>
                <h1 >When
                <img style={{width: 103, height: 34, position: 'relative'}} src={frontArrow} />
                and
                <img style={{width: 103, height: 34, position: 'relative',  transform: 'rotate(-180deg)'}} src={frontArrow} />
                pop up next to it, you can move on. <br></br>  Click 
                <img style={{width: 103, height: 34, position: 'relative'}} src={frontArrow} />
                to go next! <br></br>  Click 
                <img style={{width: 103, height: 34, position: 'relative',  transform: 'rotate(-180deg)'}} src={frontArrow} />
                to go back!
                </h1>
            </div>
        </div>
    </div>
    );
}