import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import classes from '../Auth.module.scss'

import AuthButton from '../AuthButton'
import AuthField from '../AuthField'
import AuthTitle from '../AuthTitle'
import { AuthService } from '../../../../services/auth/auth.service'
import { useAuthRedirect } from '../useAuthRedirect'

const Login = () => {
  useAuthRedirect()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async data => {
    await AuthService.login(data.email, data.password)
    reset()
  }

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle title="Вхід до особистого кабінету" />
        <AuthField
          register={register('email', {
            required: "Поле обов'язкове",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Невірний формат email',
            },
          })}
          label="E-mail"
          type="email"
          forId="email"
          error={errors.email?.message}
        />
        <AuthField
          register={register('password', {
            required: "Поле обов'язкове",
            minLength: {
              value: 6,
              message: 'Пароль має бути не менше 6 символів',
            },
          })}
          label="Пароль"
          type="password"
          forId="password"
          error={errors.password?.message}
        />
        <AuthButton text="Увійти" />
      </form>

      <div className={classes.links}>
        <Link to="/hz" className={classes.link}>
          Забули пароль?
        </Link>
        <p>Чи</p>
        <Link to="/auth/register" className={classes.link}>
          Ще не маєте облікового запису?
        </Link>
      </div>
    </div>
  )
}
export default Login
