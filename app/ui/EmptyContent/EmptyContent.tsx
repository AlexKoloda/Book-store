import React from 'react';
import style from './EmptyContent.module.scss'

import Image from 'next/image';
import AstroBoy from '@/public/icons/AstroBoy.jpeg';

const EmptyContent= () => {
return (
<h1 className={style.empty__title}>
        ...Nothing alike yet, but our scouts are in another galaxy!
        <Image src={AstroBoy} alt='Astro boy' width={80} height={80} />
</h1>
);
};

export default EmptyContent;
