import React from 'react'
import Icon from '../Icon/index'

type ButtonProps = {
  children: string,
  iconName?: string
  classes?: string
  classIcon?: string
  disabled?: boolean
}

export default function Button(props: ButtonProps) {
  const hasIcon = Boolean(props.iconName);
  return (
    <button 
      className={`${props.classes} ${
        hasIcon ? 'gap-2' : 'px-5' }`}
      disabled={props.disabled}
    >
      <span >{props.children}</span>
      {hasIcon && (
        <Icon icon={props.iconName || ''} classes={props.classIcon || ''}/>
      )}
    </button>
  );
}