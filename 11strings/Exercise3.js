let prefix = '1F6';
    let digits4 = '01234567890ABCDEF';
    let digits5 = '01234';
let header = `<table>
    <tr>
    <th></th>
    ${ [...digits4].map( c => `<th>${c}</th>` ).join( '' ) }
    </tr>
    <!-- Rows will come here -->
    </table>`

let rows = `${ [...digits5].map( d5 => `
    <tr>
    <th>${d5}</th>
    ${ [...digits4].map( d4 => `
    <td>${ String.fromCodePoint(
    '0x' + prefix + d4 + d5 ) }</td>
    `).join( '' ) }
    </tr>
    ` ).join( '' ) }
    `;


    header = `<table>
    <tr>
    <th></th>
    ${ [...digits4].map( c => `<th>${c}</th>` ).join( '' ) }
    </tr>
    ${ rows }
    </table>`
    console.log(header)
