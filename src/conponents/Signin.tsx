import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Signin = () => {
    type SigninData = {
        email:string
        password:string
    }
    const [signinData,setSinginData] = useState<SigninData>(
        {
            email:'',
            password:''
        }
    )

    const updateEmail = (event:React.ChangeEvent<HTMLInputElement>) => setSinginData({
        ...signinData,
        email: event.target.value
    })

    const updatePassword = (event:React.ChangeEvent<HTMLInputElement>) => setSinginData({
        ...signinData,
        password: event.target.value
    })

    const postData = () =>{
        fetch('https://techtrain-railway-api.herokuapp.com/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signinData)
        }).then(res => {
                //登録完了アラートの表示
            },
            error => {
                //登録失敗アラートの表示
            });
    }
    return (
        <div>
            メールアドレス
            <input type="email" name="mail" value={signinData.email} onChange={updateEmail} placeholder="sample@example.com"/>
            パスワード
            <input type="password" name="pass" value={signinData.password} onChange={updatePassword} placeholder="********"/>
            <input type="submit" value="送信" onClick={postData}/>
            <Link to='/signin'>IDをお持ちでない方</Link>
        </div>
    );
}

export default Signin;
