import React from 'react'

function Row({isFirst, activity, size, index }) {
    const createRow = n => {
        const cells = [];
        for(let i=0; i<n; i++) {
            cells.push(
                isFirst ? (
                <td>{i+1}</td>
                ) : (
                <td style={{cursor: "pointer"}} onClick={e => e.target.style.backgroundColor="green"}> </td>
                )
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
