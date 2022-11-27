import React from "react";

export const StatusDamages = ({ damage }) => {
  return (
    <>
      {damage.repair ? (
        <li className="badge text-bg-success">Reparado</li>
      ) : (
        <>
          {damage.history.length > 1 ? (
            <li className="badge text-bg-warning">En Proceso</li>
          ) : (
            <li className="badge text-bg-danger">Siniestrado</li>
          )}
        </>
      )}
    </>
  );
};
