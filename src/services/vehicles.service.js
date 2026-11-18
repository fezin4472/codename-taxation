import { SEARCHONLOCALSTORAGE, SAVEONLOCALSTORAGE } from "./localstorage.service"

export const saveVehicle = (vehicle) => {
    const vehicles = SEARCHONLOCALSTORAGE('vehicles') || [];
    if (!vehicle.id) {
        vehicle.id = Date.now();
        vehicles.push(vehicle);
    } else {
        const index = vehicles.findIndex((v) => v.id === vehicle.id);
        vehicles[index] = vehicle.id
    }

    SAVEONLOCALSTORAGE("vehicles", vehicles);
};

export const searchVehicles = () => {
    return SEARCHONLOCALSTORAGE("vehicles") || [];
}