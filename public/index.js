function fetchFromDatabase(done){
    $.get('/api/products',function (data){
        done(data)
    })
}

function createCards(product){
    return $(`<div class="col-5 card m-1 p-4">
    <div class="product-name">${product.name}</div>
    <div class="product-manu">${product.manufacturer}</div>
    <div class="row">
        <div class="col-4 m-3 p-3">
            <div class="price"><b>${product.price}</b></div>
        </div> 
        <button class="col btn btn-primary m-3">Buy</button>
    </div>
</div>`)
}

$(document).ready(()=>{
    const listItems = $('#product-list')
    fetchFromDatabase((products)=>{
        listItems.empty()
        for(product of products){
            listItems.append(createCards(product))
        }
    })

})
