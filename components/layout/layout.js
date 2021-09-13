import Nav from '../nav'
import {Footer} from '../footer/index'


export default function Layout({ children }){
    return(
        <div>
         
            <Nav></Nav>
            
            <main>{children}</main>

            <Footer></Footer>
         
        </div>
    );
}