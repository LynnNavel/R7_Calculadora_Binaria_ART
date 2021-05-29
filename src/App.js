import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

var numerosBinario = []
var checkResult = ''
var aux=''
var pruebita=''
class App extends Component {

    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    decimalToBinary() {
        return Number(this.state.value).toString(2);
        
	}
	
	binaryToDecimal() {
		return parseInt(this.state.value, 2);
	}

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            console.log("Has pulsado: "+this.state.result + button)
            this.setState({
                result: this.state.result + button
            })
        }
    };

    
    calculate = () => {
        
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            var topo = '';
            topo = this.separar();
            console.log("topo= " +topo);
            topo = eval(topo);
            topo = Number(topo.toString(2));

            this.setState({
                // eslint-disable-next-line

                //result: (eval(checkResult) || "" ) + ""

                //result : (Number(eval(checkResult)).toString(2) || "gatito" ) + "Nyah~"
                // resultado = (eval(checkResult) || "" ) + "",
                
                result : (topo || "" ) + ""
                
            })
            topo='';
            checkResult='';
            pruebita='';
            aux='';
            console.log("topo es "+topo+" y checresult es "+checkResult+", pruebita es" +pruebita+" y aux es "+aux)
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    separar() {

        var pos = 0;
        //100 + 10  - 111
        console.log("Antes del for")
        //for(const[index] of checkResult.length){
        for (let index = 0; index < checkResult.length+1; index++) {

            if(checkResult.charAt(index) === "+"){
                
                aux = checkResult.substring(pos, index);

                pos = index;

                pruebita += parseInt(aux, 2) + "+";

            } else if(checkResult.charAt(index) === "-"){
                
                aux = checkResult.substring(pos, index);

                pos = index;

                pruebita += parseInt(aux, 2) + "-";

            }else if(checkResult.charAt(index) === "*"){

                aux = checkResult.substring(pos, index);

                pos = index;
                
                pruebita += parseInt(aux, 2) + "*";

            }else if(checkResult.charAt(index) === "/"){

                aux = checkResult.substring(pos, index);

                pos = index;
                
                pruebita += parseInt(aux, 2) + "/";

            } else if ( index === checkResult.length){ 

                aux = checkResult.substring(pos+1, index);
                
                pruebita += parseInt(aux, 2)

            }

        }
        
        console.log("La primera pruebita es"+pruebita)
        // pruebita=pruebita.substring(0, pruebita.length-1)
        return pruebita;
        
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculoradora binaria :3</h1>
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
