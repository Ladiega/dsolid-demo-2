/* eslint-disable @next/next/no-page-custom-font */


import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import hIcon from '../../public/img/hmenu.svg'
import Script from 'next/script'





export default function Nav (){
    return(
<div>
    <Head>
   
    <link
            href="https://fonts.googleapis.com/css2?family=Teko:wght@400;700&display=swap" 
            rel="stylesheet" />
    </Head>
    <header className="header">
        <nav className="nav">         
            <Link href="/" >
             <a className="logo nav-link">dsolid_co</a>
            </Link>
            
            
            <button className="nav-toggle" aria-label="Menu open!">
                
                <Image
                  
                  src = {hIcon}
                  alt = "Picture of the author"
                  width={30} 
                  height={30} 
               />

            </button>
            
            <ul className="nav-menu ">
                <li className="nav-menu-items">
                    <Link href="/home" >
                        <a className="nav-menu-link nav-link">HOME</a>
                    </Link>
                    
                    
                </li>
                <li className="nav-menu-items">
                    <Link href="/news">
                     <a  className="nav-menu-link nav-link">NEWS</a>
                    </Link>                 
                </li>
                <li className="nav-menu-items">
                    <Link href="/links"  >
                    <a className="nav-menu-link nav-link">LINKS</a>
                    </Link>
                    
                    
                </li>
                <li className="nav-menu-items contact_us">
                    <Link href="/contact">
                    <a className="nav-menu-link nav-link nav-menu-link_active ">CONTACT US</a>
                    </Link>
                    
                </li>
            </ul>

        </nav> 


<style jsx>{`
        .header {
   
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  font-family: "Teko";
  position: fixed;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
.nav-link {
  color: #fff1e2;
  text-decoration: none;
}

.logo {
  font-size: 30px;

  padding: 0 40px;
  line-height: 80px;
}
.nav-menu {
  display: flex;
  margin-right: 40px;
  list-style: none;
}
.nav-menu-items {
  font-size: 18px;
  margin: 0 10px;
  line-height: 80px;
  width: max-content; /*cuando hay mas de dos palabras "contact us"*/
}
.nav-menu-link {
  padding: 8px 12px;
  border-radius: 5px;
}
.nav-menu-link_active {
  border: 2px solid #e20613;
}

.nav-menu-link:hover {
  /* no está funcionando*/
  border: 2px solid #e20613;
  color: #fff1e2;
  transition: 0.5s;
}

.nav-menu-link_active {
  border: 2px solid #fff1e2;
  color: #e20613;
}

.nav-toggle {
  color: #fff1e2;
  background: none;
  border: none;
  font-size: 20px;
  padding: 0 20px;
  line-height: 60px;
  cursor: pointer;

  display: none; /* para que no se vea cuando esta en su tamaño de escritorio*/
}

/*--------------media query----------*/
@media (max-width: 768px) {
  .logo {
    font-size: 25px;

    padding: 0 20px;
    line-height: 60px;
  }
  .nav-menu {
    flex-direction: column;
    align-items: center;
    margin-right: 20px;

    background-color: #fff1e2;

    position: fixed;
    left: 0;
    top: 60px;
    width: 100%;
    padding: 20px 0;

    height: calc(100% - 60px);
    overflow-y: auto;

    left: 100%; /*posision desactivada*/
    transition: left 0.2s;
  }
  .nav-menu-items {
    line-height: 70px;
    color: #000;
  }
  .nav-menu-link {
    color: #000;
  }

  .nav-menu-link:hover {
    background: none;
    color: #000;
  }

  .nav-menu-link_active {
    background-color: #000;
    border: 2px solid #e20613;
    color: #fff1e2;
  }

  .nav-toggle {
    margin-top:13px;  
    display: block; /* para que no se vea cuando esta en su tamaño de escritorio*/
  }
  .nav-menu_visible {
    left: 0; /*posision activada* se llema en el script.js7 no en el html... se encontraria en el .nav-menu/*/
  }

  /*Para Navegar con tab*/
  .nav-toggle:focus:not(:focus-visible) {
    outline: none;
  }
}

            
            
            
            
`}</style>

    
    </header> 
    <script jsx>
      {`
       const navToggle = document.querySelector('.nav-toggle')
       const navMenu = document.querySelector('.nav-menu')


       navToggle.addEventListener ('click', () => {
           navMenu.classList.toggle('nav-menu_visible'); 
           
           


           if(navMenu.classList.contains('nav-menu_visible')){
               navToggle.setAttribute('aria-label','Close the Menu!');

           }else{
               navToggle.setAttribute('aria-label','Open the Menu');
           }


       });
            
           
            
            `}
    </script>
</div>
  
    )
}
