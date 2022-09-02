import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

// import Producto from 'mfeProductos/Producto';
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
            Contenedor
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Carrito size={128} />
                </Suspense>
            </ErrorBoundary>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Producto
                        id={1}
                        nombre='Emperor: Battle for Fune'
                        descripcion='El juego creador del término "Estrategia en tiempo real" (del inglés: Real Time Strategy).'
                        precio={75}
                        imagenUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4ZuTJVZo-O7v3bmyL_GLC6akuo3LqsFMnQ'
                        etiquetas={['informatica', 'monitor']}
                        cantidad={2}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>
    );
};
export default Contenedor;