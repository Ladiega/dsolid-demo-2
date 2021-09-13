import Layout from '../components/layout/layout'
import styles from '../components/home/home.module.css'
import Image from 'next/image'
import hCamineta from '../public/img/Camisetas/CAMISETASHISTORIAS.png'


export default function News(){


    return(
        <div>
            <Layout>
                <main className={styles.news_main_container}>
                <section className="section-h1_news">
                    <h1 className="section-h1">NEWS</h1>
                    <h2 className="section-h1_title">Title</h2>
                    <div>
                        <Image
                    className="section-h1_img"
                    alt="tshits"
                    src={hCamineta}
                    height={150}
                    width= {150}
                    /> 
                    </div>            
                    <p className="section-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae laborum, deserunt et sed incidunt aperiam nihil numquam aliquid similique culpa atque quos facilis veniam inventore autem nulla accusamus. Perspiciatis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eveniet temporibus magni molestiae, id quis! Nulla delectus, omnis nostrum voluptates itaque at unde. Nostrum neque sed autem amet totam labore.</p>
                                                   
                </section>
                <section className="section-h1_news">
                    <h1 className="section-h1">NEWS</h1>
                    <h2 className="section-h1_title">Title</h2>
                    <div>
                        <Image
                    className="section-h1_img"
                    alt="tshits"
                    src={hCamineta}
                    height={150}
                    width= {150}
                    /> 
                    </div>            
                    <p className="section-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae laborum, deserunt et sed incidunt aperiam nihil numquam aliquid similique culpa atque quos facilis veniam inventore autem nulla accusamus. Perspiciatis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eveniet temporibus magni molestiae, id quis! Nulla delectus, omnis nostrum voluptates itaque at unde. Nostrum neque sed autem amet totam labore.</p>
                                                   
                </section>
                <section className="section-h1_news">
                    <h1 className="section-h1">NEWS</h1>
                    <h2 className="section-h1_title">Title</h2>
                    <div>
                        <Image
                    className="section-h1_img"
                    alt="tshits"
                    src={hCamineta}
                    height={150}
                    width= {150}
                    /> 
                    </div>            
                    <p className="section-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae laborum, deserunt et sed incidunt aperiam nihil numquam aliquid similique culpa atque quos facilis veniam inventore autem nulla accusamus. Perspiciatis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam eveniet temporibus magni molestiae, id quis! Nulla delectus, omnis nostrum voluptates itaque at unde. Nostrum neque sed autem amet totam labore.</p>
                                                   
                </section>


                <style jsx>{`
                        
                        
                        .section-h1_news {
                        margin: 20%;
                        background-color: #fff1e2;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 50%;
                        border: 1px solid #e20613;
                        border-radius: 10px;
                        box-shadow: 10px 5px 5px red;
                        }
                        .section-h1 {
                        border: 1px solid black;
                        text-align: center;
                        text-align: justify;
                        display: flex;
                        margin: 5%;
                        padding: 10px 50px 10px 50px;
                        color: #e20613;
                        }
                        .section-p {
                        border: 1px solid black;
                        margin: 5%;
                        padding: 10px 50px 10px 50px;

                        color: black;
                        }
                        .section-h1_img {
                        width: 180px;
                        margin: 5% 10% 5% 10%;
                        
                
                        }

                    
                    
                    `}</style>

                    
                    
                </main>

            </Layout>
           
        </div>

    
        
        

        
    )

}