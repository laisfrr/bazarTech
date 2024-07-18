import { Button, Card } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    toast.success('Bem vinda(o)!')
    console.log(data)
    reset()
  }
  return (
    <main className="container-form">
      <Card className=" border-0 container-card-img d-none d-lg-block">
        <Card.Img src="/Login.gif" className="img-contato" />
      </Card>
      <form className="form-section" onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <hr />
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
        <div className="mb-4">
          <label htmlFor="senha" className="mt-2">
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            className="form-control"
            placeholder="Sua senha"
            {...register('senha', {
              required: 'Senha inválida',
              minLength: {
                value: 6,
                message: 'O limite mínimo é de 6 caracteres'
              }
            })}
          />
          {errors.senha && (
            <small className="text-danger">{errors.senha.message}</small>
          )}
        </div>
        <Button className="w-100 mt-2 cor-btn" type="submit">
          Entrar
        </Button>
      </form>
    </main>
  )
}

export default Login
