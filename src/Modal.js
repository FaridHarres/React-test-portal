import { Component } from "react";
import ReactDOM from 'react-dom';


class Modal extends Component{
    constructor(props) {
      super(props);
      this.popUpContainer = document.createElement('div')
    
      document.body.appendChild(this.popUpContainer)
    }

    //retirer du dom apres fermeture du popup
    componentWillUnmount(){
        document.body.removeChild(this.popUpContainer)
    }
    render(){
        return ReactDOM.createPortal(

            <div className="modal" onClick={this.props.close}>
                <div>
                    <p>Proident magna laborum ex est proident culpa nulla enim. Eu esse ullamco sit sint commodo. Et do labore dolor aliqua amet adipisicing Lorem. Laboris culpa ad magna id irure aliqua officia excepteur cupidatat  fugiat cillum quis aute. Eiusmod sit do mollit velit mollit.</p>
                    <button >Fermer</button>
                </div>

            </div>, this.popUpContainer
        )
    }
}

export default Modal