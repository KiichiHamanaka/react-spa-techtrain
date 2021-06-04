import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Signup: React.VFC = () => {
    type SignUpData = {
        name:string
        email:string
        password:string
    }
    //カスタムフックにした方が良さげ
    const [signupData,setSignupData] = useState<SignUpData>(
        {
            name:'',
            email:'',
            password:''
        }
    )

    const updateName = (event:React.ChangeEvent<HTMLInputElement>) => setSignupData({
        ...signupData,
        name: event.target.value
    })

    const updateEmail = (event:React.ChangeEvent<HTMLInputElement>) => setSignupData({
        ...signupData,
        email: event.target.value
    })

    const updatePassword = (event:React.ChangeEvent<HTMLInputElement>) => setSignupData({
        ...signupData,
        password: event.target.value
    })

    const postData = () => {
        fetch('https://techtrain-railway-api.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupData)
        }).then(res => {
            //登録完了アラートの表示
            },
            error => {
            //登録失敗アラートの表示
        });
    }
    return (
        <div>
            名前
            <input type="text" name="name" value={signupData.name} onChange={updateName} placeholder="山田太郎"/>
            メールアドレス
            <input type="email" name="mail" value={signupData.email} onChange={updateEmail} placeholder="sample@example.com"/>
            パスワード
            <input type="password" name="pass" value={signupData.password} onChange={updatePassword} placeholder="6から12文字で入力して下さい"/>
            <input type="submit" value="送信" onClick={postData}/>
            <Link to='/signin'>既にIDをお持ちの方</Link>
        </div>
    );
}

export default Signup;
