import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSite } from "../../../site/hook/useSite";
import Style from "../create.module.css";

export function CreateForm() {
    const navigate = useNavigate();
    const { handleAdd } = useSite();
    const [addFormState, setAddFormState] = useState({
        name: "",
        description: "",
        path: "",
        publicPath: "",
        key: "",
    });

    const handleInput = (ev) => {
        const element = ev.target;
        setAddFormState({
            ...addFormState,
            [element.name]: element.value,
        });
    };

    const handleAddSubmit = (ev) => {
        ev.preventDefault();
        addFormState.key = addFormState.name;
        handleAdd(addFormState);
        Swal.fire("Gracias!", "has creado un nuevo sitio", "success");
        navigate("/home");
    };

    return (
        <div>
            <form className={Style.container_form} onSubmit={handleAddSubmit}>
                <label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ingrese un nombre"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="description"
                        required
                        placeholder="Ingrese una descripcion"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="path"
                        required
                        placeholder="Ingrese la direccion URL"
                        onInput={handleInput}
                    />
                </label>
                <label>
                    <input
                        type="url"
                        name="publicPath"
                        required
                        placeholder="Ingrese la direccion URL publica"
                        onInput={handleInput}
                    />
                </label>

                <label className={Style.container_form_button}>
                    <button className={Style.form_button} type="submit">
                        Guardar
                    </button>
                    <button
                        className={Style.form_button}
                        onClick={() => {
                            navigate("/home");
                        }}
                    >
                        Cancelar
                    </button>
                </label>
            </form>
        </div>
    );
}

export default CreateForm;
