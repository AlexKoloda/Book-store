import style from './InformationForm.module.scss';
import { useUserContext } from '@/app/lib/contexts/UserContext';
import { UserProfileType } from '@/app/lib/definitions';
import { userSchema } from '@/public/validation/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { updateInformationApi } from '@/api/clientApi/updateApi';

import Button from '../Button/Button';
import Input from '../Input/TextInput';

const InformationForm: React.FC = () => {
  const { user } = useUserContext();
  const userName = user?.name.replace(/[0-9]/g, '');
  const [isChange, setIsChange] = useState(false);
  
  const { register, handleSubmit } = useForm<UserProfileType>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: UserProfileType) => {
    setIsChange(false);
    const apiData = data;
    apiData.id = user?.id;
    updateInformationApi(apiData);
    
  };
  
  const toggleChange = () => {
    setIsChange((prevState) => !prevState);
  };

  return (
    <form
      name='information'
      onSubmit={handleSubmit(onSubmit)}
      className={style.profile__form}
    >
      <div className={style.profile__box}>
        <h1 className={style.profile__title}>Personal information</h1>
        <div className={style.profile__button} onClick={toggleChange}>
          Change information
        </div>
      </div>

      <div className={style.profile__wrapper}>     
      {isChange ? (
        <>
          <Input
            {...register('name')}
            type='text'
            placeholder='Your name'
            defaultValue={userName}
            className={style.profile__input}
          />
          <Input
            {...register('email')}
            type='email'
            placeholder='email'
            defaultValue={user?.email}
            className={style.profile__input}

          />
          <Button
            text='Confirm'
            type='submit'
            className={style.profile__button_submit}
          />
          
        </>
      ) : (
        <>
          <Input
            {...register('name')}
            type='text'
            placeholder='Your name'
            defaultValue={userName}
            className={style.profile__input_disable}
            readOnly={true}
          />
          <Input
            {...register('email')}
            type='email'
            placeholder='email'
            defaultValue={user?.email}
            className={style.profile__input_disable}
            readOnly={true}
          />
        </>
      )}
       </div>
    </form>
  );
};

export default InformationForm;
