import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';
import logo from './logo.svg';

const Producto = React.lazy(() => import('mfeProductos/Producto'));
const Carrito = React.lazy(() => import('mfeCarrito/Carrito'));

const Contenedor = () => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px',
            borderRadius: '8px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#0f0',
            backgroundColor: '#111',
            color: '#eee',
        }}>
            Contenedor App
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Carrito size={128} />
                </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Producto
                        id={1}
                        nombre='ReactJS'
                        descripcion='Micro-frontend en React.'
                        precio={75}
                        imagenUrl={logo}
                        etiquetas={[]}
                        cantidad={2}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};

export default Contenedor;