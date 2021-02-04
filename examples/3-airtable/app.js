const result = document.querySelector('.result')

const fetchProducts = async () => {

    try {
        /*separate functions*/
        //const { data } = await axios.get('/api/airtable')
        /*working with one function complete*/
        const { data } = await axios.get('/api/complete')
        const products = data.map((product) => {
            const { id, url, name, price } = product
            return `<a href="product.html?id=${id}" class="product">
            <img src="${url}" alt="${name}"/>
            <div className="info">
            <h5>${name}</h5>
            <h5 className="price">$${price}</h5>
            </div>
            </a>`
        }).join('')
        result.innerHTML = products
    } catch (error) {
        result.innerHTML = '<h4>There was an error</h4>'
    }
}
fetchProducts()