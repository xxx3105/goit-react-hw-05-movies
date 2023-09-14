import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const Container = styled.main`
  gap: 24px;
  padding: 0;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 100px;
  user-select: none;
`;

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   user-select: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
     user-select: none;
}

ul{
    margin:0;
    padding:0;
    list-style: none;
     user-select: none;
}

img{
    display:block;
    max-width:100%;
    object-fit:cover;
     user-select: none;

}
 
h1 { 
  margin: 0;
  padding: 0;
   user-select: none;
   color: #1a1a1a;

}

h2 {
  color:#1a1a1a;
  margin: 0;
  margin-top: 10px;
  padding: 0;
}

li {
  list-style-type: none;
   user-select: none;
}

ul{
  list-style-type: none;
   user-select: none;
}

a{text-decoration: none;}

p{color:#1a1a1a;}
`;
