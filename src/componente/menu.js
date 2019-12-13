import React from 'react'
import Imagem1 from './imagem1'
import Imagem2 from './imagem2'
import Imagem3 from './imagem3'
class Menu extends React.Component{
    constructor(props){
        super(props)

        this.state={
            imagemrenderizada:null
        }
    }
    mostrarimagem=(e)=>{
        // console.log(this.props.estadoNulo)

        switch(e.target.text){
            case 'imagem1':
                return this.setState({
                    imagemrenderizada: <Imagem1/>

                })
            case 'imagem2':
                return this.setState({
                    imagemrenderizada: <Imagem2/>
                })
            case 'imagem3':
                return this.setState({
                    imagemrenderizada: <Imagem3/>
                 })
        }
    }
    render() {
        return(
            <div>
               <p>&#9776;</p>
               {this.props.paisagem.map(item => {
                   return(<a onClick={(e) => this.mostrarimagem(e)}>{item}</a>)
               })}
               {this.state.imagemrenderizada}
            </div>
        )
    }
}
export default Menu