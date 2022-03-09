import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas'

function App() {

    const [linea1, setLinea1] = useState('');
    const [linea2, setLinea2] = useState('');
    const [img, setImg] = useState('');

    const onChangeLinea1 = function(e){
        setLinea1(e.target.value);
    }
    const onChangeLinea2 = function(e){
        setLinea2(e.target.value);
    }
    const pickImg = function(e){
        setImg(e.target.value);
    }
    const exportar = function(e){
        html2canvas(document.querySelector("#meme")).then(canvas => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = 'meme.png';
            link.href = img;
            link.click();
            
        });
    }


    return ( 
        <div className = "App" >
            
            <div className='main'>
                <h1>Meme Generator!</h1>
                <select onChange={pickImg}>
                    <option>Pick an image</option>
                    <option>fire</option>
                    <option>futurama</option>
                    <option>history</option>
                    <option>matrix</option>
                    <option>philosoraptor</option>
                    <option>smart</option>
                </select><br/>

                <input onChange={onChangeLinea1} type="text" placeholder='Line 1...'></input><br/>
                <input onChange={onChangeLinea2} type="text" placeholder='Line 2...'></input><br/>

                <div className='preview'>
                    <div className='meme' id='meme'>
                        <span className='linea1'>{linea1}</span><br/>
                        <img src={require('src/'+ img +'.jpg')} alt=''/>
                        <span className='linea2'>{linea2}</span>
                    </div>
                </div>

                <button onClick={exportar}> Download meme </button><br/><br/>
                <a href='https://carlos-fernandez.netlify.app/'> Creator</a>

            </div>  
        </div>
    );
}

export default App;