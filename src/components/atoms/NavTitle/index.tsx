import React from 'react';
import Icon from '../Icon/index'
import Link from 'next/link';

interface IndexProps {
    title: string,
    titleClasses?: string,
    classes?: string
    link?: string,
    iconName?: string
    onClick?: () => void
}

export default function Titles ({ title, link, iconName, titleClasses, classes, onClick }: IndexProps) {
  const content = (
    <div onClick={onClick} className={`${classes} hover:cursor-pointer`}>
            {iconName && <Icon icon={iconName} />}
            <h1 className={titleClasses}>{title}</h1>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};