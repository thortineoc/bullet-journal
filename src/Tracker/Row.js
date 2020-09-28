import React from 'react'

function Row({activity, size, index, }) {
    console.log(`size is ${size}`);
    const createRow = n => {
        const cells = [];
        for(let i=0; i<n; i++) {
            cells.push(
            <td style={{cursor: "pointer"}} onClick={e => e.target.style.backgroundColor="green"}> </td>
            )
        }
        return cells;
    }
    return (
        <div>
           <table>
               <tr>
                    <th>{activity}</th>
                    {createRow(size)}
               </tr>
           </table>
        </div>
    )
}

export default Row
