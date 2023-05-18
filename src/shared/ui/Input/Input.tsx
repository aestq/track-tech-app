import { type ChangeEvent, type InputHTMLAttributes, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import cls from './Input.module.scss'

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputHTMLProps {
  className?: string
  onChange?: (value: string) => void
  value?: string
  label?: string
  validateError?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    onChange,
    value,
    label,
    validateError,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <label className={classNames(cls.InputWrapper, {}, [className])}>
      {label && (
        <Text
          className={cls.label}
          title={label}
          size='xs'
        />
      )}
      <input
        className={cls.input}
        onChange={onChangeHandler}
        value={value}
        {...otherProps}
      />
      {validateError && (
        <Text
          className={cls.validateErrorText}
          text={validateError}
          size='xs'
          theme='error'
        />
      )}
    </label>
  )
})
