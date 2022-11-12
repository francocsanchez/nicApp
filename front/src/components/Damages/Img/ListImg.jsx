import { Img } from './Img'

export const ListImg = ({img}) => {

  return (
    <div>
        {
            img?.length
              ? <h3 className="pb-2"><Img img={img}/></h3>
              : <h1 className="text-center fw-bold py-5">NO HAY IMAGENES CARGADAS</h1>
          }
    </div>
  )
}
