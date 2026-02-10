import { useForm } from "react-hook-form";

export default function NewProductPage() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <div>
            <h1>Hello Page</h1>
        </div>
    );
}