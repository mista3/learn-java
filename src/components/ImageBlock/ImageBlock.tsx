import { Image, ImageProps } from 'antd';
import s from './ImageBlock.module.scss';

export const ImageBlock = ({
  src,
  ...props
}: ImageProps) => {

  return <div className={s.image_block}>
    <Image
      src={src}
      {...props}
    />
  </div>
}