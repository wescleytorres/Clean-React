import React, { useContext, useRef } from 'react'
import Context from '@/presentation/contexts/form/form-context'

import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]

  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={error
        ? 'invalid'
        : 'valid'}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={e => { e.target.readOnly = false }}
        onChange={e => {
          setState({ ...state, [e.target.name]: e.target.value })
        }}
      />
      <label
        data-testid={`${props.name}-label`}
        title={error}
        onClick={() => { inputRef.current.focus() }}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
