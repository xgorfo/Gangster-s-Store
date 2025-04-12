import ProductCard from "../components/ProductCard";

function MainPage() {

    const products = [
      {
        id: 1,
        name: 'Ноутбук',
        price: 500,
        description: 'Ноутбук очень классный ваще отличный ноут !',
        img: ''
      },
      {
        id: 2,
        name: 'Планшет',
        price: 200,
        description: 'Планшет нереально классный ваще отличный планшет !',
        img: ''
      }
    ]

    return(
    <div className="App">
      <h2>Товары</h2>
      {products.map((product) => (
        <ProductCard name={product.name} desc={product.description} price={product.price} img={product.img}>

        </ProductCard>
      ))}
    </div>
    );
}

export default MainPage;