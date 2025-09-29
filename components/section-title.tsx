import { SectionTitleProps } from '@/interfaces/section-title.interface';
import React from 'react'

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className='font-bold text-lg md:text-2xl'>
        { title }
    </div>
  )
}

export default SectionTitle;