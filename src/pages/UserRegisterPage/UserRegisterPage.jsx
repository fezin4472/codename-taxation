/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomField from "../../components/CustomField/CustomField";
import Customizedbutton from "../../components/CustomizedButton/CustomizedButton";
import Main from "../../components/Main/Main"
import { saveUser, searchUsers } from "../../services/users.service";
import { toast, Zoom } from "react-toastify";
import Emailvalidation from "../../utils/Emailvalidation";
import CPFvalidation from "../../utils/CPFValidation";
import { FormatWithMask, MASK_CPF } from "../../utils/FormatWithMask";

function USERREGISTERPAGE() {
    const [formUser, setFormUser] = useState({
        id: "",
        name: "",
        address: "",
        cpf: "",
        birthdate: "",
        email: "",
    });

    const params = useParams();
    useEffect(() => {
        if (params.id) {
            const userToEdit = searchUsers().find(
                (item) => item.id === +params.id,
            );

            if (userToEdit) {
                setFormUser(userToEdit);
            }
        }
    }, [params.id]);

    const save = () => {
        if (!formUser.name.trim() || !formUser.email.trim()) {
            toast.warn("OBRIGATORY FILL", { theme: "colored", transition: Zoom });
            return;
        }

        if (!Emailvalidation(formUser.email)) {
            toast.error("INVALID EMAIL", { theme: "colored", transition: Zoom });
        }

        if (formUser.cpf.trim() && CPFvalidation(formUser.cpf) === false) {
            toast.error("INVALID", { theme: "colored", transition: Zoom });
        }

        saveUser(formUser);
        toast.success("client saved", { theme: "colored", transition: Zoom });
    };

    return (
        <Main title="CADASTRE-SE">
            <CustomField
                label="Nome"
                value={formUser.name}
                onChange={(e) =>
                    setFormUser({ ...formUser, name: e.target.value })
                }
                maxLength={50}
            />
            <CustomField
                label="Endereço"
                value={formUser.address}
                onChange={(e) =>
                    setFormUser({ ...formUser, address: e.target.value })
                }
            />
            <CustomField
                label="CPF"
                value={formUser.cpf}
                onChange={(e) =>
                    setFormUser({ ...formUser, cpf: FormatWithMask(e.target.value, MASK_CPF)  })
                }
            />
            <CustomField
                label="Data De Nasc."
                type="date"
                value={formUser.birthdate}
                onChange={(e) =>
                    setFormUser({ ...formUser, birthdate: e.target.value })
                }
            />
            <CustomField
                label="E-mail"
                value={formUser.email}
                onChange={(e) =>
                    setFormUser({ ...formUser, email: e.target.value })
                }
            />

            <Customizedbutton type="secondary" onClick={save}>
                CADASTRAR
            </Customizedbutton>
        </Main>
    );
}

export default USERREGISTERPAGE;