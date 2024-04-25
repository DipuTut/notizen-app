
export default function Card(){

    const name: string = 'Asadul'
    let paragraph = <p>Das ist weiterer Text</p>

    if (name ==='Marc') {
        paragraph = <p>Marc hat den Durchblick</p>
    }

    return (
        <div>
            <p>Liebe Grüße von {name}</p>
            <br />
            {paragraph}
        </div>
    )
}