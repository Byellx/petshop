import Header from '@/components/Header'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import styles from '@/styles/Petshop.module.css'

import {useState} from 'react'

export default function Petshop(){
    const [showLogin, setShowLogin] = useState<boolean>(true)

    const swapLogin = (event: React.MouseEvent<HTMLAnchorElement>):void => {
        event.preventDefault()
        setShowLogin(!showLogin)
    }

    return(
        <>
        <Header/>
        <div className={styles.FormPageBox}>
            <div className={styles.FormBox}>
                {showLogin?(<Login/>):(<Signup setShowLogin={setShowLogin}/>)}
                {
                    showLogin?(
                        <span><div>Não tem uma conta?<a href='#' onClick={swapLogin}>Cadastre-se</a></div></span>
                    ):(
                        <span><div>Já tem uma conta?<a href='#' onClick={swapLogin}>Login</a></div></span>
                    )
                }
            </div>
            <div className={styles.WallpaperBox}></div>
        </div>
        </>
    )
}