export const TitleCountDamages = ({ countDamages }) => {
  return (
    <>
      {countDamages > 0 ? (
        <h3 className="pb-2">LISTADO DE SINIESTROS</h3>
      ) : (
        <h3 className="text-center fw-bold">NO HAY UNIDADES SINIESTRADAS</h3>
      )}
    </>
  );
};
