import styled from 'styled-components'

export const Header = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    background-color: transparent;
    z-index: 100;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
`

export const LogoImage = styled.img`
    display: block;
    max-width: 20%;
    margin-left: auto;
    margin-right: auto;
`

export const Sociallink = styled.div`
    position: absolute;
    top: 50%;
    left: 20px;
    background-color: transparent;
    transform:translate(0%, -50%);
`

export const Socialicon = styled.img`
    display: inline-block;
    max-width: 30px;
    margin-left: 10px;
    margin-right: 10px;
`

export const Navlink = styled.div`
    position: absolute;
    top: 50%;
    right: 20px;
    background-color: transparent;
    transform:translate(0%, -50%);
`

export const Navbar = styled.div`
    .Nav1 {
        top:0;
        right:0;
        background-color: black;
        width:200px;
        height: 100%;
        display: block;
        position: fixed;
        transition: margin .5s;
        margin: 0 -200px 0 0;
    }
    .Nav1.is-nav-open {
        margin-right:0
    }
`

export const Redirectbutton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
`