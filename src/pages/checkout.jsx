import CheckoutUI from "../components/checkout";
import Footer from "../components/footer";
import { Header } from "../components/header";


export default function Checkout(params) {
    return(
        <>
            <Header></Header>
            <CheckoutUI></CheckoutUI>
            <Footer></Footer>
        </>
    )    
}