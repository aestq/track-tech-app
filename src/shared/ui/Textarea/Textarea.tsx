import { type ChangeEvent, type TextareaHTMLAttributes } from 'react'
import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text/Text'
import cls from './Textarea.module.scss'

type TextareaHTMLProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextareaProps extends TextareaHTMLProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  label?: string
  validateError?: string
}

export const Textarea = (props: TextareaProps) => {
  const {
    className,
    value,
    onChange,
    label,
    validateError,
    readOnly,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly
  }

  return (
    <label className={classNames(cls.TextareaWrapper, mods, [className])}>
      {label && (
        <Text
          className={cls.label}
          text={label}
          size='s'
        />
      )}
      <textarea
        className={cls.textarea}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      >
      </textarea>
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
}
