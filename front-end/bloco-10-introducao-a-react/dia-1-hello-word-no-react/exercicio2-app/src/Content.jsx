import React, { Component } from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends Component {
    render() {
        return (
            <div className="content">
                {conteudos.map((elemento) => (
                    <div key={elemento.conteudo} className='card'>
                        <h2>{`O conteúdo é: ${elemento.conteudo}`}</h2>
                        <h2>{`Status: ${elemento.status}`}</h2>
                        <h2>{`Bloco: ${elemento.bloco}`}</h2>
                    </div>
                ))}
            </div>
        );
    }
}

export default Content;