import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { searchUsers } from "../../services/users.service";
import { SAVEONLOCALSTORAGE } from "../../services/localstorage.service";
import { toast, Zoom } from "react-toastify";
import Main from "../../components/Main/Main";
import CustomField from "../../components/CustomField/CustomField";
import { IoAddCircle, IoMailOutline, IoPencilOutline, IoTrash } from "react-icons/io5";
import "./UserListPage.css";

function USERLISTPAGE () {
    const navigate = useNavigate();
    const [users, setUsers] = useState(searchUsers());
    const [searchTerm, setSearchTerm] = useState("");

    const deleteUser = (userToDelete) => {
        if (confirm(`você vai deletar ${userToDelete}, tem certeza ponto de interrogação`)){
            const updatedUsers = users.filter((item) => item.id !== userToDelete)
            setUsers(updatedUsers);
            SAVEONLOCALSTORAGE("users", updatedUsers);
            toast.success("usuário removido", {theme: "colored", transition: Zoom})
        }
    };

    const editUser = (userToEdit) => {
        navigate("/register-u/" + userToEdit.id);
    };

    const filteredUsers = users.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <Main title="LISTA DE USUÁRIOS" returnTo="/">
            <CustomField
                type="search"
                label="pesquisar"
                placeholder="digita o nome do usuário"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredUsers.map((item, index) => {
                return (
                    <div key={index} className="UserListPage-item">
                        <div>
                            <h3>{item.name}</h3>
                            <span className="UserListPage-item-email">
                                <IoMailOutline/>
                                {item.email}
                            </span>
                        </div>

                        <div className="UserListPage-item-action">
                                <IoPencilOutline
                                    size={24}
                                    onClick={() => editUser(item)}
                                />
                                <IoTrash
                                    size={24}
                                    color="red"
                                    onClick={() => deleteUser(item)}
                                />
                        </div>
                    </div>
                )
            })}

            <div className="UserListPage-addButton">
                <IoAddCircle />
            </div>
        </Main>
    )
}

export default USERLISTPAGE;
