import React from 'react';
import {useGoogleLogin, GoogleLogin } from '@react-oauth/google'
import shape from '@material-ui/core/styles/shape';


 const GoogleLoginSocial = () => {
    const login = useGoogleLogin({
        onSuccess: credentialResponse  => console.log(credentialResponse ),
       
      });
    return (<>
       <button onClick={() => login()}>Google Login</button>
       <GoogleLogin 
       onSuccess={credentialResponse => console.log(credentialResponse)
       }
       shape="square"
       size='medium'
       type='standard'
      logo_alignment='center'

       />
       </>
    )

}
export default GoogleLoginSocial

