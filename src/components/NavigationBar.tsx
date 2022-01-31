import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { useMemo } from "react";

export const NavigationBar = () => {
  const navigate = useNavigate();

  const items = useMemo(
    () => [
      {
        label: "Inicio",
        icon: "pi pi-fw pi-home",
        command: () => {
          navigate("/");
        },
      },
      {
        label: "Crear",
        icon: "pi pi-fw pi-plus",
        command: () => {
          navigate("/empleados/create");
        },
      },
      {
        label: "Administrar",
        icon: "pi pi-fw pi-pencil",
        command: () => {
          navigate("/empleados/manage");
        },
      },
    ],
    []
  );

  return (
    <>
      <div className="p-2">
        <Menubar model={items}></Menubar>
      </div>
    </>
  );
};
