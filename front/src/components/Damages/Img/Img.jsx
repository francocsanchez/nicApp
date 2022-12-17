import { Global } from "../../../helpers/Global";

export const Img = ({ img, vin }) => {
  return (
    <div className="col-12">
      <h3 className="pb-2">LISTADO DE IMAGENES - {vin}</h3>
      <div className="row">
        {img?.map((img, i) => {
          return (
            <div className="col-4 mb-4" key={i}>
              <div className="card shadow-sm">
                <a href={`https://ik.imagekit.io/fsanchez/damages/${vin}/${img.img}`} target="_black">
                  <img
                    width="200"
                    height="200"
                    className="bd-placeholder-img card-img"
                    style={{ objectFit: "cover" }}
                    src={`https://ik.imagekit.io/fsanchez/tr:n-ik_ml_thumbnail/damages/${vin}/${img.img}`}
                    alt="damage"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
