import classes from '../Auth.module.scss'

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import AuthButton from '../AuthButton'
import AuthField from '../AuthField'
import AuthTitle from '../AuthTitle'
import { AuthService } from '../../../../services/auth/auth.service'
import { useAuthRedirect } from '../useAuthRedirect'

const Register = () => {
  useAuthRedirect()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm()

  const onSubmit = async data => {
    await AuthService.register(data.email, data.password, data.userName)
    reset()
  }

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle title="Реєстрація нового користувача" />
        <AuthField
          register={register('userName', {
            required: "Поле обов'язкове",
            minLength: {
              value: 4,
              message: "Ім'я користувача має бути не менше 4 символів",
            },
          })}
          label="Ім'я користувача"
          type="text"
          forId="userName"
          error={errors.userName?.message}
        />
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
        <AuthField
          register={register('repeatPassword', {
            required: "Поле обов'язкове",
            minLength: {
              value: 6,
              message: 'Пароль має бути не менше 6 символів',
            },
            validate: value =>
              value === getValues('password') || 'Паролі не співпадають',
          })}
          label="Повторити пароль"
          type="password"
          forId="repeatPassword"
          error={errors.repeatPassword?.message}
        />
        <AuthButton text="Зареєструватися" />
      </form>

      <div className={classes.links}>
        <Link to="/auth/login" className={classes.link}>
          Уже маєте обліковий запис?
        </Link>
      </div>
    </div>
  )
}
export default Register
