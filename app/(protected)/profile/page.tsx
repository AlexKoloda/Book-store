import PasswordForm from '@/app/ui/PasswordForm/PasswordForm';
import InformationForm from '@/app/ui/InformationForm/InformationForm';
import ProfileClientSide from '@/app/ui/ProfileCLientSide/ProfileClientSide';
import { Metadata } from 'next';
import style from './page.module.scss'

export const metadata: Metadata = {
  title: 'Book Room: Profile',
  description: 'Personal information, built Fusion Interns',
}

const Profile = () => { 
  return (
    <section className={style.profile__section}>
        <ProfileClientSide />
      <div className={style.profile__container}>
        <InformationForm />
        <PasswordForm />
      </div>
    </section>
  );
};

export default Profile;