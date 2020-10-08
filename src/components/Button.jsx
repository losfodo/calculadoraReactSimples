import React from 'react'/*import padrão react e css de button para conectar */
import './Button.css'/*importar css botão */

export default props => {/*componente criado funcional sem estado export default,=>retornar,,passa componentes filhos para props */
    let classes = 'button '/*retornar botão classename */
    classes += props.operation ? 'operation' : ''/*coloca props.operation se estiver definida coloca operation classe */
    classes += props.double ? 'double' : ''/*se propriedade.double for passada add double ou vazio nada */
    classes += props.triple ? 'triple' : ''/*mesmo para triple  */
    
    return (/*o retorno das classes e clicks */
        <button 
            onClick={e => props.click && props.click(props.label)}/*para os botoes de fato funcionarem onclick dispara uma arrowfunction evento chamando props.click acionando propslabel*/
            className={classes}>
            {props.label}
        </button>/*label dos botoes,,classes é classname de double operation triple */
    )
}