import React from 'react'
import styled from 'styled-components'
import { SignupPage } from './SignupPage'


const Body = styled.div`
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    align-items: center;
    color: #03a1fc;
    background-color: #fff;
    justify-content: center;
    background-image: url();
    background-size: cover;
    background: #fff;
`

const Main = styled.div`
    width: 350px;
    height: 550px;
    border-radius: 20px;
    padding:  60px 35px 35px 35px;
    background-color: #fff;
    font-family: sans-serif;
    font-weight: 700;
`

const Logo = styled.div`
    background-image: url();
    width: 140px;
    height: 140px;
    margin: 50px 75px;
    border-radius: 50%;
`

const Title = styled.div`
    text-align: center;
    font-size: 28px;
    color: #555;
    letter-spacing: 5px;
    margin: 35px;
`

const Credentials = styled.div`
    width: 100%;
    padding: 2px 5px 0px 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
    background: none;
    font-family: 18px;
    color: #555;
    padding: 20px 10px 20px 5px;
    letter-spacing: 1px;
`

const UserName = styled.div`
    margin-bottom: 20px;
    border-bottom: 2px solid #c2c4c3;
    transition: .5s ease;

    &:hover{
        border-bottom: 3px solid #03a1fc;
    }
`

const PassWord = styled.div`
    margin-bottom: 30px;
    border-bottom: 2px solid #c2c4c3;
    transition: .5s ease;

    &:hover{
        border-bottom: 3px solid #03a1fc;
    }
`

const Button = styled.button`
    outline: none;
    border: none;
    width : 100%;
    height: 60px;
    border-radius : 30px;
    color: #fff;
    font-size :20px ;
    font-weight: 700;
    text-align: center;
    text-align: center;
    background-image: linear-gradient(to right, #56c1ff, #28adfa, #03a1fe);
    background-size : 200%;
    box-shadow: 3px 3px 8px #b1b1b1,
                -3px -3px 8px #fff;
    transition: .5s;

    &:hover{
        background-position: right;
    }
`

const Link = styled.div`
    margin: 10px;
    text-align: center;
`

const A = styled.a`
    color: #aaa;
    font-size: 15px;
`

const LoginPage = () => {
  return (
    <Body>
    <Main>
        
            <Title>
                Lend Loans
            </Title>
            <form>
            <Credentials>
                <UserName>
                <span class="glyphicon"></span>
                <Input type="text" name='username' placeholder='Username' required=""></Input>
                </UserName>
                <PassWord>
                <span class="glyphicon"></span>
                <Input type="password" name='password' placeholder='Password' required=""></Input>
                </PassWord>
            </Credentials>
            <Button>Submit</Button>
            </form>
            <Link><A href='#'> Forget PassWord ? </A> <A href="./SignupPage">Sign up</A></Link>
        </Main>
    </Body>
  )
}

export default LoginPage