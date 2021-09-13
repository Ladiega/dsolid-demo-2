import Layout from '../components/layout/layout'
import styles from '../components/home/home.module.css'
import Image from 'next/image'
import logoImg from '../public/img/logo.svg'
import Link from 'next/link'

export default function Contact(){


    return(
        <div>
            <Layout>
                <main className={styles.home_main_container}>
                <section className="section">
                    <div className="section-items_container">
                        <div className="item1-container" >
                           
                            <Image
                            className=" item1"
                            src={logoImg}
                            alt="img"
                            width={90}
                            height={90}

                            />
                            
                            
                           
                            
                            
                            
                        </div>
                        <div className="item2-container">
                        <h1 className=" item2"><a href="https://www.instagram.com/dsolid_co/">CONTACT US</a></h1>
                
            
                        </div>
                    </div>
                </section>

                </main>
                <style jsx>{`
                .section {
  background-color: #000;
  margin-top: 80px;

  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid purple;
}

.section-items_container {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.item1 {
  width: 280px;
}
.item2 {
  background-color: #000;
  border: 1px solid #fff1e2;
  padding: 5px 15px 5px 15px;
  margin: 10px;
}

.item2-container a {
  text-decoration: none;
  color: #e20613;
  font-size: 25px;
}
                    
                    
                    `}

                </style>

            </Layout>
           
        </div>

    
        
        

        
    )

}