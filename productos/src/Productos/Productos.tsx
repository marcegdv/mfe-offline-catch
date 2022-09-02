import React from 'react';
import Producto from '../Producto/Producto';

import { listado } from './productos.mock.js';

import '../common.styles.css';
import './Productos.styles.css';

export type ProductosProps = {
    titulo?: string,
    botonAgregar?: React.ReactElement,
    botonEliminar?: React.ReactElement,
};

const Productos = (props: ProductosProps) => {
    return (
        <div className='productos-container p8'>
            <div className='productos-titulo p8 fs24'>
                {props.titulo ?? 'Productos'}
            </div>
            <div className='productos-listado p8'>
                {listado.map((item) =>
                    <Producto
                        key={item.id}
                        {...item}
                        //botonAgregar={BotonProducto('Agregar')}
                        //botonEliminar={BotonProducto('Quitar')}
                    />
                )}
            </div>
            <div className='productos-footer p8 fs24'>
                ¡Los mejores precios!
            </div>
        </div>
    );
};

export default Productos;

const BotonProducto = (label: string): React.ReactElement => {
    return (
        <div onClick={() => { }}
            style={{
                border: '2px solid #07f',
                borderRadius: '4px',
                width: 'fit-content',
                padding: '4px',
                fontSize: '12px',
                color: 'black',
                backgroundColor: 'white',
                cursor: 'pointer'
            }}
        >
            {label}
        </div>
    )
};
