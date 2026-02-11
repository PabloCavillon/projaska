'use client';

import { Fragment } from 'react';
import products from '../../data/products.json';

export default function Products() {
    

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                        <th>Precio de compra</th>
                        <th>Precio de venta</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, j) => (<Fragment key={j}>
                        <tr>
                            <td>001</td>
                            <td>{product.modelo}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                            <td>$ {product.buyPrice}</td>
                            <td>$15.00</td>
                        </tr>
                        <tr>
                            <td colSpan={6}>{product.name}</td>
                        </tr>
                    </Fragment>))}
                </tbody>
            </table>
        </div>
    )
}
