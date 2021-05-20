import { getByLabelText } from '@testing-library/dom';
import React, {Component} from 'react';

class Micomponente extends Component{
    
    render(){
        function showPreview(event){
            if(event.target.files.length > 0){
                var src = URL.createObjectURL(event.target.files[0]);
                var preview = document.getElementById("file-ip-1-preview");
                preview.src = src;
                preview.style.display = "block";
                console.log(src);
                console.log(preview);
            }
        }

        function otroEstudio(){
            
            if(document.getElementsById("otro") == "otro"){
                <div className="txleft">
                    <input classname="datos" type="text" name="otroGrado" id="otroGrado" ></input>
                </div>
            }
            
            
        }

        function cacharDatos(){

            let name = document.getElementById("nom").value;
            console.log(name);
        }
        return(
            <div className="borde">
                <div className="txleft">
                    <h1>Nombre Completo</h1>
                    <input classname="datos" type="text" name="nombre" id="nom" placeholder="Escribe tu nombre"></input>
                    <h1>Grado de estudios máximo</h1>
                    <select id="gradoMax" name="gradoMax">
                        <option value="bachillerato">Bachillerato</option>
                        <option value="licenciatura">Licenciatura</option>
                        <option value="maestria">Maestría</option>
                        <option id="otro" onClick="otroEstudio()">Otro...</option>
                    </select>
                   <script type="text/javascript">
                        {function cacharDatos(){
                         var name = document.getElementById("nom").value;
                        console.log(name);
                         }}
                   </script>
                </div>
                                
                <div className="addphoto">
                    <h1>Agregar foto</h1>
                </div>

                <div className="search">
                    
                    <h1>Arma tu CV</h1>
                    <h1 className="gra">Gratis</h1>
                    
                    <button  className="btn" onClick="cacharDatos()">Buscar Empleo</button>
                

                </div>

                <div className="center">
                    <div className="form-input">
                        <label htmlFor="file-ip-1">Subir imagen</label>
                        <input type="file" id="file-ip-1" accept="image/*" onClick="showPreview(event)"></input>
                        
                        <div className="preview">
                            <img id="file-p-1-preview">

                            </img>
                            
                        </div>
                    </div>
                </div>
                
                
                
                

                
            </div>
        );
    }
}

export default Micomponente;