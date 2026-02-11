'use client';

import { getProducts } from "@/actions";
import { Product } from "@/interfaces";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function NewProductPage() {

    const {register, handleSubmit, formState: {errors}} = useForm<Product>({
        defaultValues: {
            name: "",
            code: "",
            description: "",
            stock: 0,
            sellPrice: 0,
            buyPrice: 0,
            category: "",
            imageUrl: ""
        }
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                console.log(products);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);

    const onSubmit = (data: Product) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register("name", {required: "Este campo es obligatorio"})}
                    placeholder="Nombre del producto"
                />
                {errors.name && <span className="error">{errors.name.message}</span>}
                
                <input 
                    {...register("code", {required: "Este campo es obligatorio"})}
                    placeholder="Código del producto"
                />
                {errors.code && <span className="error">{errors.code.message}</span>}
                
                <input 
                    {...register("description", {required: "Este campo es obligatorio"})}
                    placeholder="Descripción del producto"
                />
                {errors.description && <span className="error">{errors.description.message}</span>}

                <input 
                    {...register("buyPrice", {required: "Este campo es obligatorio", valueAsNumber: true})}
                    placeholder="Precio de compra (U$D)"
                />
                {errors.buyPrice && <span className="error">{errors.buyPrice.message}</span>}
                
                <input 
                    {...register("sellPrice", {required: "Este campo es obligatorio", valueAsNumber: true})}
                    placeholder="Precio de venta (U$D)"
                />
                {errors.sellPrice && <span className="error">{errors.sellPrice.message}</span>}

                <input 
                    {...register("stock", {required: "Este campo es obligatorio", valueAsNumber: true})}
                    placeholder="Stock del producto"
                />
                {errors.stock && <span className="error">{errors.stock.message}</span>}

                {/*
                <input 
                    {...register("category", {required: "Este campo es obligatorio"})}
                    placeholder="Categoría del producto"
                />
                {errors.category && <span className="error">{errors.category.message}</span>}

                <input 
                    {...register("imageUrl", {required: "Este campo es obligatorio"})}
                    placeholder="URL de la imagen del producto"
                />
                {errors.imageUrl && <span className="error">{errors.imageUrl.message}</span>}
                */}

                <button type="submit">Guardar Producto</button>
            </form>
        </div>
    );
}