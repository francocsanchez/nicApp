import { Link } from 'react-router-dom'

export const CardDamage = ({ damage }) => {
    return (
        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header">
                    <h5 className="my-0 fw-normal">{damage.car.vin}</h5>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled">
                        <li>TRANSITO</li>
                        {
                            damage.damage.repair
                                ? (<li className='badge text-bg-success'>Reparado</li>)
                                : (
                                    <>
                                        {damage.damage.history.length > 1
                                            ? (<li className='badge text-bg-warning'>En Proceso</li>)
                                            : (<li className='badge text-bg-danger'>Siniestrado</li>)
                                        }
                                    </>
                                )
                        }
                        <li className='mt-2 small'>
                            {damage.car.ope?.numOp ? 'VENDIDO' : 'SIN OP'}
                        </li>
                    </ul>
                    <Link className="w-100 btn btn-sm btn-outline-secondary" to={`/damages/${damage._id}/show`}>HISTORIAL</Link>
                </div>
            </div>
        </div>
    )
}