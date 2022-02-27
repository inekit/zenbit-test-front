import React from "react";
import styled, {css} from "styled-components";


const Form = styled.form`
    width: 400px;
    position:absolute;
    left:120px;
    top:120px;
    *{
        margin-bottom:20px;
    }
`

interface TextProps {
    weight?: 200 | 300 | 400 | 500 | 600 | 700;
    fontSize?: number;
  }

const FormHeader = styled.h2<TextProps>`
    color: #3E3E3E;
    font-weight: ${({ weight = 400 }) => weight};
    font-size: ${({ fontSize = 30 }) => fontSize}px;
    line-height: 43px;
    margin-left: 0;
    text-align: left;
  `
  interface inputProps {
    weight?: 200 | 300 | 400 | 500 | 600 | 700;
    fontSize?: number;
    display?: "block" | "auto"
  }

const Input = styled.input<inputProps>`
  font-weight: ${({ weight = 400 }) => weight};
  color: #3E3E3E;
  background-color: #fff;
  border: 1px solid #DCDCDC;
  border-radius: 0.5rem;
  padding: 30px 0 30px 45px;
  width: calc(100% - 45px);
  display: ${({ display = "block" }) => display};
`

const Button = styled.button<inputProps>`
    width: 170px;
    height:60px;
    border-radius:30px;
    border:none;
    background-color: #FAD34F;
    :hover {
        background-color: #FAAF11;
    }
    color: white;

    transition: 1s;
  `
const texts = {
    title: "Обратитесь к нам!"
}


export const MyForm =  () => {

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const name = formData.get('name'), email = formData.get('email')

    if (!name || !email) return 

	  const APIres = await fetchAPI({name: formData.get('name') as string,  email:formData.get('e') as string});

    //if ( APIres.error.isNull() & APIres.items) 
  };



  return(
  <Form onSubmit={handleSubmit}>
    <FormHeader>{texts.title}</FormHeader>
    <Input type="text" placeholder="Your name*" id="name" name="name"/>
    <Input type="email" placeholder="Your e-mail*" id="email" name="email"/>

    <Button>Send message</Button>
  </Form>
)}


 async function fetchAPI(params: {name: FormDataEntryValue; email: FormDataEntryValue}){
  return await fetch("https://api.example.com/items")
    .then(res => res.json())
    .then(
      (result) => {
        return {
          isLoaded: true,
          items: result.items,
          error: null
        };
      },
      (error) => {
        return {
          isLoaded: true,
          error,
          items: null
        };
      }
    )
}