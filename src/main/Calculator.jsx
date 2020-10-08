import React, { Component } from 'react'/*importa um react com componente */
import './Calculator.css' /*importar o css proprio */

import Button from '../components/Button'/*importar pasta componentes botão class */
import Display from '../components/Display'/*importanto o display q é tela de valor da calculadora */

const initialState = {/*constante representa o estado inicial, da função clearname restaurar para estado inicial  */
    displayValue: '0',/*valor exibido na calculadora referenciado no display aplicação,, é string */
    clearDisplay: false,/*false para limpar o display inicialmente por enquanto */
    operation: null,/*variavel armazenara as operaçoes + * - / */
    values: [0, 0],/*array de dois valores,, aqui numero não string */
    current: 0/*parametro q vai dizer se esta manipulando o valor values de indice 0 ou de indice 1 */
}

export default class Calculator extends Component {/*criar a classe q estende component*/

    state = { ...initialState }//startar o estado inicial

    constructor(props) {/*construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe,recebendo props*/
        super(props)/*passa super props para geral do contrutor */

        this.clearMemory = this.clearMemory.bind(this)/*clearMemory recebe this clear.. .bind:cria uma função vinculada com mesmo corpo que a função original */
        this.setOperation = this.setOperation.bind(this)/*conectado com this */
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {/*AC botão limpar a tela */
        this.setState({ ...initialState })/*caso clearmemory seja clicado starta initialstate */
    }

    setOperation(operation) {/*divisão multiplicação soma */
        if (this.state.current === 0) {//se for igual a zero primeiro valor do array
            this.setState({ operation, current: 1, clearDisplay: true })//current p sair de 0 e ir p 1,,set state recebe operation,current:atual numero,limpar tela vdd..criando assim 2 numeros diferentes so falta fazer as operaçoes abaixo e geral resul calc
        } else {//senão se for 1 e não zero
            const equals = operation === '=' //se for clicou igual ao igual =
            const currentOperation = this.state.operation//operação executada no momento

            const values = [...this.state.values]//gerar clone de values
            try {//try catch para não gerar problemas com equals,,eval é uma função que avalia uma string como se fosse uma expressão e retorna um resultado
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)//gerar calculo do valor com função eval, pega primeiro valor 0 usa current operation e segundo valor 1 gerando resultado valor 0 values
            } catch(e) {
                values[0] = this.state.values[0]//se der catch
            }

            values[1] = 0//valor indice 1 zerado

            this.setState({
                displayValue: values[0],//recebe os valores resultado =
                operation: equals ? null : operation,//operação se for equals é nula se não operation
                current: equals ? 0 : 1,//se for equal mecher valor equals n precisa ir display se for outro segundo valor e não primeiro
                clearDisplay: !equals,//se for diferente de equals limpa o display
                values //passando valores
            })
        }
    }

    addDigit(n) {/*adicionar digito numero 1234.. ou ponto */
        if (n === '.' && this.state.displayValue.includes('.')) {/*se eu recebi um digito q é um ponto e valor do dis play ja contem um ponto. não pode adicionar outro */
            return
        }//ou seja ignora e sai da função

        const clearDisplay = this.state.displayValue === '0'//limpar tela,apenas digito 0 inicialmente limpa mostra o numero atual
            || this.state.clearDisplay//ou quando clear display for true
        const currentValue = clearDisplay ? '' : this.state.displayValue//variavel valor corrente = se display for limpo o valor corrente sera vazio se não pega this.statedisplay value valor q tiver
        const displayValue = currentValue + n //varias const e regras no caso validando de cima p baixo,,proxima const sera novo valor +o digito n
        this.setState({ displayValue, clearDisplay: false })//aparecer os valores displayvalue e cleardisplay vai automaticamente pra false

        if (n !== '.') {//sempre q digitado um valor diferente de ponto.. quer add em values: [0, 0],
            const i = this.state.current //armazenando indice dentro array q esta mechendo
            const newValue = parseFloat(displayValue)//converter string p numero quebrado
            const values = [...this.state.values]//clona p novo e recebe em values
            values[i] = newValue//recebe novo valor indice
            this.setState({ values })//colocando no estado do objeto numero
            console.log(values)//ver o que sai dentro do array console
        }
    }

    render() {/*função render para renderizar a calculadora *//*const addDigit = n => this.addDigit(n)    :add digit mesmo com operation... */
        return (/*retorn do render dentro return uma div marcada classname:class de jsx' calculator,,display valor*/
            <div className="calculator">  
                <Display value={this.state.displayValue} />{/*valor display tela da calculadora aponta p estado*/}
                <Button label="AC" click={this.clearMemory} triple />{/*AC chama click .clearmemory,zerar os calculos AC, triple para ocupar 3 espaços na calculadora */}
                <Button label="/" click={this.setOperation} operation />{/*referencia / a setoperation.. */}
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />{/*commentarios dentro da div */}
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />{/*muda a cor para laranja editado pelo css button.css */}
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />{/*double para ocupar dois espaços na calculadora tabela editado css */}
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
                
            </div>
        )/*todos os botoes inseridos acima em button label" click... */
    }
}