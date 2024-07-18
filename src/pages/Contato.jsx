import { Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Contato() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    toast.success('Formulário enviado!')
    console.log(data)
    reset()
  }
  return (
    <main className="container-form">
      <Card className=" border-0 container-card-img d-none d-lg-block">
        <Card.Img src="/contact.svg" className="img-contato" />
      </Card>
      <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
        <h1>Formulário de Contato</h1>
        <hr />
        <div className="mb-2">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            placeholder="Seu nome e sobrenome"
            {...register('nome', { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className="text-danger">Campo obrigatório</small>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Seu email"
            className="form-control"
            {...register('email', { required: 'Email inválido' })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="feedback">Deixe aqui seu Feedback:</label>
          <textarea
            id="feedback"
            className="form-control text-area"
            placeholder="Escreva aqui"
            {...register('feedback', { required: true })}
          />
          {errors.feedback && (
            <small className="text-danger">Campo obrigatório</small>
          )}
        </div>
        <Button className="w-100 mt-2 cor-btn" type="submit">
          Enviar
        </Button>
      </form>
    </main>
  )
}

export default Contato
