import './ItemListContainer.css'
import { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useGetData from '../hook/useGetData';
import { dataContext } from "../../component/Context/DataContext";

export const ItemListContainer = () => {

    // Lógica para determinar el tamaño del producto y valor c/u
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productSize, setProductSize] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        let price = 0;
        if (selectedProduct === 'pequeno') {
            setProductSize('Pequeño');
            price = 500;
        } else if (selectedProduct === 'mediano') {
            setProductSize('Mediano');
            price = 700;
        } else if (selectedProduct === 'grande') {
            setProductSize('Grande');
            price = 900;
        }

        setTotalPrice(price);
        }, [selectedProduct]);
        
    const handleProductSelection = (product) => {
        setSelectedProduct(product);
    };


    //Logica para el boton comprar

    const { buyProducts } = useContext(dataContext);
    const { products, loading } = useGetData();


    //Logica para filtrado 

    const [selectedCategoria, setSelectedCategoria] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        if (selectedCategoria) {
            const filtered = products.filter(products => products.categoria === selectedCategoria);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategoria, products]);

    const handleCategorySelection = (Category) => {
        setSelectedCategoria(Category);
    };


    return (
        <>
        <main className='main-nav'>
                <div>
                    <ul className='category-nav'>
                        <li onClick={() => handleCategorySelection(null)}>
                            <span className='font-nav'>A</span>ll
                        </li>
                        <li onClick={() => handleCategorySelection('Tradicional')}>
                            <span className='font-nav'>T</span>radicional 
                        </li>
                        <li onClick={() => handleCategorySelection('Leche')}>
                            <span className='font-nav'>L</span>eche
                        </li>
                        <li onClick={() => handleCategorySelection('Alcohol')}>
                            <span className='font-nav'>A</span>lcohol
                        </li>
                        <li onClick={() => handleCategorySelection('Especial')}>
                            <span className='font-nav'>E</span>special
                        </li>
                    </ul>
                </div>
            </main>
            {loading && 'cargando..'}
            {products && (
                <div className='container-cards d-flex justify-content-center flex-wrap'>
                    {filteredProducts.map((product) => {
                        return (
                            <div className='cardproduct'>
                                <Card className='productItems' key={product.id} />
                                <Card.Img className='CardImg' variant="top" src={product.imagenes} alt='img-product-card' />
                                <Card.Body />
                                <Card.Title>{product.name}</Card.Title>
                                {product.categoria}
                                <Card.Text>
                                    {product.descripcion}
                                </Card.Text>
                                ${product.precio}
                                <div>
                                    <Button className='btn-select' onClick={() => handleProductSelection('pequeno')}>Pequeño</Button>
                                    <Button className='btn-select' onClick={() => handleProductSelection('mediano')}>Mediano</Button>
                                    <Button className='btn-select' onClick={() => handleProductSelection('grande')}>Grande</Button>
                                    <p>Producto seleccionado: {selectedProduct}</p>
                                    <p>Tamaño seleccionado: {productSize}</p>
                                    <p>Total: ${totalPrice}</p>
                                    <div className='btn-shp-hook'>
                                        <Button value={selectedProduct} variant="primary" onClick={() => buyProducts(product)}>Buy</Button><span className='vector-cart'>🛒</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );

};



export default ItemListContainer;