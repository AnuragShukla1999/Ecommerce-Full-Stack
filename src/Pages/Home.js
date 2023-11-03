import Navbar from "../features/Navbar/Navbar"
import ProductList from "../features/product-list/components/ProductList"

const Home = () => {
  return (
    <div>
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    </div>
  )
}

export default Home