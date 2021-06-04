import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

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





    const postDataAxios = async () => {
        const headers = {
            'Content-Type': 'application/json',
            'mode':'cors',
            'withCredentials': 'true'
        };
        await axios.post('https://techtrain-railway-api.herokuapp.com/users',       {
                name: 'string',
                email: 'string',
                password: 'stringaaaa',
            },
            {headers})
            .then((response) => {
                console.log(response.data);
            })
    }

    const postData = () => {
        fetch('https://techtrain-railway-api.herokuapp.com/users', {
            method: 'POST',
            mode: 'cors',
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(        {
                name:'aaaa',
                email:'aa@a.com',
                password:'aaaaaa'
            })
        }).then(res => {
                console.log(res)
                alert(res)
            },
            error => {
                console.log(error)
                alert(error)
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
            <input type="submit" value="送信" onClick={postDataAxios}/>
            <Link to='/signin'>既にIDをお持ちの方</Link>
        </div>
    );
}

export default Signup;
