import { useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";
import { useState } from "react";
import { searchVehicles } from "../../services/vehicles.service"
import { SAVEONLOCALSTORAGE } from "../../services/localstorage.service";
import { toast, Zoom } from "react-toastify";
import CustomField from "../../components/CustomField/CustomField";
import { IoMailOutline, IoPencilOutline, IoTrash } from "react-icons/io5";

function VEHICLELISTPAGE () {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useState(searchVehicles());
    const [searchTerm, setSearchTerm] = useState("");

    const deleteVehicle = (vehicleToDelete) => {
        if(confirm(`você vai deletar ${vehicleToDelete}, tem certeza ponto de interrogação`)){
            const updatedVehicles = vehicles.filter((item) => item.id !== vehicleToDelete)
            setVehicles(updatedVehicles);
            SAVEONLOCALSTORAGE("vehicles", updatedVehicles);
            toast.success("veículo removido", {theme: "colored", transition: Zoom})
        }
    }

    const editVehicle = (vehicleToEdit) => {
        navigate("/register-v/" + vehicleToEdit.id)
    };

    const filteredVehicles = vehicles.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <Main title="LISTA DE VEÍCULOS">
            <CustomField
                type="search"
                label="pesquisar"
                placeholder="digita a placa do carro"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredVehicles.map((item, index) => {
                return (
                    <div key={index} className="VehicleListPage-item">
                        <div>
                            <h3>{item.name}</h3>
                                <span className="VehicleListPage-item-email">
                                    <IoMailOutline/>
                                    {item.email}
                                </span>
                            </div>
                
                            <div className="UserListPage-item-action">
                            <IoPencilOutline
                                size={24}
                                onClick={() => editVehicle(item)}
                            />
                            <IoTrash
                                size={24}
                                color="red"
                                onClick={() => deleteVehicle(item)}
                            />
                        </div>
                    </div>
                )
            })}
        </Main>
    );
}

export default VEHICLELISTPAGE;