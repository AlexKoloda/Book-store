import style from './PasswordForm.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangePasswordType } from '@/app/lib/definitions';
import { passwordUpdateSchema } from '@/public/validation/schemas';
import { updatePasswordApi } from '@/api/clientApi/updateApi';

import Button from '../Button/Button';
import Input from '../Input/TextInput';


const PasswordForm: React.FC = () => {
  const [isChangePassword, setIsChangePassword] = useState(false);

  const {
    register: changePassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors },
  } = useForm<ChangePasswordType>({
    resolver: yupResolver(passwordUpdateSchema),
  });

  const toggleChangePassword = () => {
    setIsChangePassword(!isChangePassword);
  };

  const onSubmitPassword = async (data: ChangePasswordType) => {
    setIsChangePassword(false);
    updatePasswordApi(data);
  };

  return (
    <form
      name='password'
      onSubmit={handleSubmitPassword(onSubmitPassword)}
      className={style.profile__form}
    >
      <div className={style.profile__box}>
        <h1 className={style.profile__title}>Password</h1>
        <div className={style.profile__button} onClick={toggleChangePassword}>
          Change password
        </div>
      </div>
      {isChangePassword ? (
        <>
          <Input
            {...changePassword('oldPassword')}
            type='password'
            placeholder='Old password'
            className={style.profile__input}
          />
          <Input
            {...changePassword('newPassword')}
            type='password'
            placeholder='New password'
            className={style.profile__input}
          />
          <p className={style.profile__description_error}>
            {errors.newPassword?.message}
          </p>
          <Input
            {...changePassword('passwordReplay')}
            type='password'
            placeholder='Password replay'
            className={style.profile__input}
          />
          <p className={style.profile__description_error}>
            {errors.passwordReplay?.message}
          </p>
          <Button
            text='Confirm'
            type='submit'
            className={style.profile__button_submit}
          />
        </>
      ) : (
        <Input
          {...changePassword('oldPassword')}
          type='password'
          placeholder='Password'
          className={style.profile__input_disable}
          readOnly={true}
        />
      )}
    </form>
  );
};

export default PasswordForm;
