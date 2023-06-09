import "./style.scss"

const CartHeader = () => {
    return ( 
        <header className="cart-header">
        <div className="cart-header__title">Назва товарів</div>
        <div className="cart-header__count">Кількість</div>
        <div className="cart-header__cost">Вартість </div>
    </header>
     );
}
 
export default CartHeader;