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