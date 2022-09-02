import React from 'react';

import '../common.styles.css';
import './Producto.styles.css';

export type ProductoProps = {
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    imagenUrl: string,
    etiquetas: Array<string>,
    botonAgregar?: React.ReactElement,
    botonEliminar?: React.ReactElement,
    cantidad?: number,
};

const Producto = (props: ProductoProps) => {
    return (
        <div className='producto-container m8'>
            <img className='producto-imagen' src={props.imagenUrl}/>
            <div className='producto-info p8'>
                <div className='producto-nombre'>
                    {props.nombre}
                </div>
                <div className='producto-precio'>
                    ${props.precio}
                </div>
                <div className='producto-descripcion'>
                    {props.descripcion}
                </div>
                <div>
                    {props.botonAgregar}
                    {props.botonEliminar}
                </div>
            </div>
        </div>
    );
};

export default Producto;