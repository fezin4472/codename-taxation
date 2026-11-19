/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import CustomField from "../../components/CustomField/CustomField";
import Main from "../../components/Main/Main";
import { useParams } from "react-router-dom";
import { saveVehicle, searchVehicles } from  "../../services/vehicles.service"
import { toast, Zoom } from "react-toastify";
import Customizedbutton from "../../components/CustomizedButton/CustomizedButton";

function VEHCILEREGISTER () {
    const [formVehicle, setFormVehicle] = useState({
        brand: "",
        model: "",
        version: "",
        plate: "",
    });

    const params = useParams();
    useEffect(() => {
        if (params.id) {
            const vehicleToEdit = searchVehicles().find(
                (item) => item.id === +params.id,
            );

            if (vehicleToEdit) {
                setFormVehicle(vehicleToEdit);
            }
        }
    }, [params.id]);

    const save = () => {
        if (!formVehicle.brand.trim() || !formVehicle.plate.trim()) {
            toast.warn("OBRIGATORY FILL", { theme: "colored" , transition: Zoom });
            return;
        }

        saveVehicle(formVehicle);
        toast.success("vehicle saved", { theme: "colored" , transition: Zoom });
    }
    return (
        <Main title="CADASTRA UM VEÍCULO">
            <CustomField 
                label="Marca"
                value={formVehicle.brand}
                onChange={(e) =>
                    setFormVehicle({ ...formVehicle, brand: e.target.value})
                }
            />
            <CustomField
                label="Modelo"
                value={formVehicle.model}
                onChange={(e) =>
                    setFormVehicle({ ...formVehicle, model: e.target.value})
                }
            />
            <CustomField
                label="Versão"
                value={formVehicle.version}
                onChange={(e) =>
                    setFormVehicle({ ...formVehicle, version: e.target.value})
                }
            />
            <CustomField
                label="Placa"
                value={formVehicle.plate}
                onChange={(e) =>
                    setFormVehicle({ ...formVehicle, plate: e.target.value})
                }
            />

            <Customizedbutton type="secondary" onClick={save}>
                CADASTRAR
            </Customizedbutton>
        </Main>
    );
}

export default VEHCILEREGISTER;