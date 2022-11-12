import { useEffect, useState } from 'react'
import axios from 'axios'

export const TableDamages = ({ details }) => {

    const [sectorDamage, setSectorDamage] = useState([]);

    useEffect(() => {
        const getSectorDamage = async () => {
            const data = await axios.get(`/api/sector-damage`);
            setSectorDamage(data.data.data)
        }
        getSectorDamage();
    }, [])
    
    return (
        <div className='col-12'>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">SECTOR</th>
                        <th scope="col">DETALLE</th>
                        <th scope="col">GRAVEDAD</th>
                        <th scope="col">CODIGO</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {
                        details?.map((d, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row"><small>{i + 1}</small></th>
                                    <td><small>{sectorDamage.find(x => x._id === d.damageDetails.sectorDamage)?.name}</small></td>
                                    <td><small>{d.damageDetails.details}</small></td>
                                    <td><small>{d.damageCode.details}</small></td>
                                    <td><small>{d.severityCode.details}</small></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
