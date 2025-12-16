import * as React from "react";
import MyButton from "../../components/MyButton.tsx";

type Props = {}
type State = {counter: number}
class ClasseComponent extends React.Component<Props, State> {
    message = "Hello World";
    state: State = {counter: 0}
    interval?: number;

    constructor(props: Props) {
        super(props);
        console.log("Contructeur");
    }


    updateMessage = () => {
        console.log(this)
        this.message = "Nouveau Message - màj";
    }

    increment = () => {
        this.setState({counter: this.state.counter + 1})
    }

    componentDidMount() {
        console.log("Component mounted.");
        // Le composant est pret à être utilisékk
        // Lancer les actions au démarrage du composant : un appel API par exemple
        let counter = 0;
        this.interval = setInterval(() => {
            counter++;
            console.log(counter);
        }, 1000);
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
        // Pour faire des effets de bord lors d'une mise à jour d'une props ou d'un state
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Démontage du composant");
        // Pour désouscrire aux observables, flux, stream...
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h2>Composant Classe</h2>
                <p>Message : {this.message}</p>
                <p>
                    <MyButton onClick={this.updateMessage}>MAJ</MyButton>
                </p>
                <p>Compteur : {this.state.counter}</p>
                <p>
                    <MyButton onClick={this.increment}>Increment</MyButton>
                </p>
            </>
        )
    }

}

export default ClasseComponent;