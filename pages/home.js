import Layout from '../components/layout/layout'
import styles from '../components/home/home.module.css'


export default function Home(){
    


    return(
        <div>
            <Layout>
                <main className={styles.home_main_container}>
                    <h1 className={styles.home_h1}>
                        dsolid Project
                    </h1>
                    <p className={styles.home_p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit suscipit cumque iste ipsum, quas libero quo nobis animi repellendus? Earum consectetur voluptas quod dolorum, repudiandae provident harum amet eum ipsum!</p>

                </main>

            </Layout>
           
        </div>

    
        
        

        
    )

}