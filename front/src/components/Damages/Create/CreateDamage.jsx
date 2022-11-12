import { useState } from "react";
import { FormDamages } from "./FormDamages"
import { ListDamages } from "./ListDamages"

export const CreateDamage = () => {
    const [arrDamage, setArrDamage] = useState([]);
    return (
        <div className='container'>
            <div className="row g-5">
                <ListDamages
                    arrDamage={arrDamage}
                    setArrDamage={setArrDamage}
                />
                <FormDamages
                    arrDamage={arrDamage}
                    setArrDamage={setArrDamage}
                />
            </div>
        </div>
    )
}
