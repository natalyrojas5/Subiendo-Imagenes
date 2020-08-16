import React, { Component } from 'react'

export const withFileUpload = (WrapperComponents) => {
    return class WithFileComponent extends Component{
        constructor(props){
            super(props);

            this.state = {
                files: []
            }
            this.fileReader = new FileReader();
            console.log(this.fileReader)
        }

        addFile = event =>{
            // Array de imagenes o archivos
            const files = event.target.files; 

            // Método para leer la URL de los datos de mi archivo - readAsDataURL(Archivo)
            this.fileReader.readAsDataURL(files[0]);
        }

        appendFile = ()=>{
            this.setState({
                files: [...this.state.files, this.fileReader.result]
            })
        }

        componentDidMount(){
            // El FileReader tiene un addEventListener('load') al realizarse la subida de la imagen
            this.fileReader.addEventListener('load', this.appendFile)
        }

        componentWillMount(){
            this.fileReader.removeEventListener('load', this.appendFile);
        }

        render(){
            return (
                <WrapperComponents {...this.props}
                    addFile={this.addFile}
                    files={this.state.files}
                />
            )
        }
    }
}
