'use client' 
import style from './page.module.scss'
import { useEffect } from 'react'
import Button from './ui/Button/Button'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className={style.error__section}>
      <h2 className={style.error__title}>Something went wrong!</h2>
      <Button
      className={style.error__button}
        text='Try again'
        onClick={() => {
          console.log('>>> RELOAD')
          window.location.reload();
        }}
      />
        
    </div>
  )
}