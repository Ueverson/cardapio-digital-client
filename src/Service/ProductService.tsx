interface Produto {
    cli_id:  number
    pro_id: number
    ped_status : string
}

export async function salvarCompra({cli_id, pro_id, ped_status}: Produto) {

    const url = 'http://localhost:3000/actions/salvarCompra';
   
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cli_id, pro_id, ped_status
        })
    }).catch((err) => err.message)

}