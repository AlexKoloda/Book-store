'use client' 
import style from './page.module.scss'
import { useEffect } from 'react'
import Button from './ui/Button/Button'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { parseError } from './lib/util/parseError'
 
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    if (error instanceof AxiosError) {
      toast.error(parseError(error));
    }
  }, [error])
 
  return (
    <div className={style.error__section}>
      <h2 className={style.error__title}>Something went wrong!</h2>
      <Button
      className={style.error__button}
        text='Try again'
        onClick={() => {
          window.location.reload();
        }}
      />
        
    </div>
  )
}
