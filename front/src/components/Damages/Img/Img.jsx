import { Global } from "../../../helpers/Global";

export const Img = ({ img }) => {
  return (
    <div className="col-12">
      <h3 className="pb-2">LISTADO DE IMAGENES</h3>
      <div className="row">
        {img?.map((img, i) => {
          return (
            <div className="col-4 mb-4" key={i}>
              <div className="card shadow-sm">
                <a href={`${Global.imgPublic}img/uploads/${img.img}`} target="_black">
                  <img
                    width="200"
                    height="200"
                    className="bd-placeholder-img card-img"
                    style={{ objectFit: "cover" }}
                    src={`${Global.imgPublic}img/uploads/${img.img}`}
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
