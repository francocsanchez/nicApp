import { FormAdd } from "./FormAdd"

export const AddHistory = ({ id, repair }) => {

    return (
        <div className="my-3 p-3 bg-light rounded shadow-sm">
            <h6 className="border-bottom pb-2 mb-0 text-center">SIN OPERACION </h6>
            {
                repair
                    ? <h6 className='my-2 text-center text-bg-success py-2'>UNIDAD REPARADA</h6>
                    : <FormAdd id={id} />
            }
        </div>
    )
}