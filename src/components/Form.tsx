import { AnyRecord } from "dns";
import React from "react";
import styled, {css} from "styled-components";
import {FormComponents} from "./FormComponents";
const {Form, FormHeader, Input, Button} = FormComponents


interface myFormFields{ name: string, message: string, email: string, result?: Object | null }

export class MyForm extends React.Component<{}, myFormFields> {


  constructor(props: any) {
    super(props);
    this.state = {name: "", message: '', email: ''};
 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange = async (event:{target: {value: string}}, name: 'name' | 'message' | 'email') => {
    await this.setState({[name]: event.target.value} as unknown as myFormFields)
}


  reloadForm(event: { preventDefault: () => void; }){
    event.preventDefault();

    this.setState({name: "", email: "", message: "", result: null})
  }




  async handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    console.log(this.state)


    const {name, message, email} = this.state

    if (!name || !message  || !email) return 

	  const APIres = await fetchAPI({
      name:name as string,  
      email:email as string,
      message:message as string
    })

    if (APIres) this.setState({result: APIres});

  }


  
  FormRender = ()=>(
    <Form onSubmit={(e)=>this.handleSubmit(e)}>
      <FormHeader>Обратитесь к нам!</FormHeader>
      <Input value={this.state.name} onChange={e=>this.handleChange(e, 'name')} type="text" placeholder="Your name*" id="name" name="name" required/>
      <Input value={this.state.email} onChange={e=>this.handleChange(e, 'email')} placeholder="Your e-mail*" id="email" name="email" required/>
      <Input value={this.state.message} onChange={e=>this.handleChange(e, 'message')} placeholder="Your message*" id="message" name="message" required/>
  
      <Button>Send message</Button>
    </Form>
  )



  responseRender = ()=>(
    <Form onSubmit={(e)=>this.reloadForm(e)}>
      <FormHeader>{this.state.result? "Форма успешно добавлена" : "Ошибка!"}</FormHeader>
      <Button>Send another one</Button>
    </Form>
  )



  render() {
    if (!this.state.result) return this.FormRender()
     return this.responseRender()
  }
}





 async function fetchAPI(params: {name: String; email: String, message: String}) : 
  Promise<{isLoaded: boolean, items: Array<Object> | null, error: Error | null}>{
  return await fetch("http://62.109.12.174:3035/forms", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)})
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        return {
          isLoaded: true,
          items: result.items,
          error: null
        };
      },
      (error) => {
        console.log(error)

        return {
          isLoaded: true,
          error,
          items: null
        };
      }
    )
}