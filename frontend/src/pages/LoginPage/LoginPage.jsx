import React, { useState } from 'react'
import cl from './LoginPage.module.scss'

//* COMPONENTS
import LogoComponent from '../../shared/modules/LogoComponent/LogoComponent'
import FormLogin from '../../widgets/FormLogin/FormLogin'
import FormRegistration from '../../widgets/FormRegistration/FormRegistration'

function LoginPage() {

    const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={cl.loginPage}>
        
        <div className={`${cl.loginPage__spots} ${cl.spot1}`}><span></span></div>
        <div className={`${cl.loginPage__spots} ${cl.spot2}`}><span></span></div>

        <LogoComponent/>
        {
            isLogin 
            ?
            <FormLogin setIsLogin={setIsLogin}/>
            : 
            <FormRegistration title="Регистрация"/>
        }
        
    </div>
  )
}

export default LoginPage