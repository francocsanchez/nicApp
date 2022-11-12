import { ListCardDamage } from "./ListCardDamage";

export const ListDamages = ({ arrDamage,setArrDamage }) => {
    return (
        <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-danger">DAÑOS</span>
                <span className="badge bg-danger rounded-pill">{arrDamage.length}</span>
            </h4>
            <ul className="list-group mb-3">
                {
                    arrDamage.length > 0
                        ? <ListCardDamage arrDamage={arrDamage} setArrDamage={setArrDamage}/>
                        : null
                }
            </ul>
        </div>
    )
}