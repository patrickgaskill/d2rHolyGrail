import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px;
`

export const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 999999;
  padding: 15px;
  background: #111111;
`

export const Logo = styled.div`
  display: flex;
  padding-bottom: 10px;
  min-width: 500px;

  a {
    img {
      height: 12px;
      padding-left: 4px;
    }
  }

  h1 {
    font-size: 60px;
    font-family: 'Gwendolyn', cursive;
  }

  h6 {
    align-self: flex-end;
    margin-bottom: 6px;
    font-family: 'Gwendolyn', cursive;
    font-size: 16px;
  }
`

export const Image = styled.img`
  height: 70px;
`

export const ButtonPanel = styled.div`
  float: right;
`